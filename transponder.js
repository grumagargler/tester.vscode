const Studio = require('vscode');
const FileSystem = require('fs');
const MessagesList = require('./messages').MessagesList;
const SystemFolder = '.tester';
var Problems;
var Output;
var RequestID;
var TestedControls;
var Scenarios;

function Init() {
	Problems = Studio.languages.createDiagnosticCollection();
	Output = Studio.window.createOutputChannel('Tester');
	Output.show(false);
	RequestID = new Map();
	TestedControls = {
		Set: [],
		Current: "",
		Lang: ""
	};
	Scenarios = [];
}

function Run() {
	if (!testerReady()) return;
	Problems.clear();
	Output.clear();
	if (workspaceDirty()) saveAndRun();
	else runTesting();
}

function workspaceDirty() {
	for (let document of Studio.workspace.textDocuments) {
		if (document.isDirty) return true;
	}
	return false;
}

function saveAndRun() {
	for (let document of Studio.workspace.textDocuments) {
		if (document.isDirty) {
			let request = prepareRequest();
			request.File = document.fileName;
			request.Request = Requests.SaveBeforeRun;
			sendRequest(request);
			return;
		}
	}
}

function runTesting() {
	let request = prepareRequest();
	request.Request = Requests.Run;
	sendRequest(request);
}

function testerReady() {
	let file = testerFile('response');
	if (!file) return false;
	let requestID = RequestID.get(file);
	if (!requestID || !FileSystem.existsSync(file)) return true;
	let response = getResponse(file);
	if (!response) return true;
	let request = response.Request;
	return response.Status === Statuses.Completed &&
		(request.Request === Requests.SaveFile || request.ID === requestID);
}

function testerFile(Name, Source = undefined) {
	let file = Source == undefined ? currentFile() : Source;
	let folder = testerFolder(file);
	if (folder) return folder + '/' + Name;
}

function currentFile() {
	return Studio.window.activeTextEditor.document.fileName;
}

function testerFolder(File) {
	let looking = '/' + SystemFolder;
	let path = File;
	path = path.replace(/\\/g, '/');
	while (true) {
		let i = path.lastIndexOf('/');
		if (i === -1) break;
		path = path.slice(0, i);
		let folder = path + looking;
		if (FileSystem.existsSync(folder)) return folder;
	}
	let s = sformat(MessagesList.TesterFolderUndefined, File);
	Studio.window.showErrorMessage(s);
}

function sformat(Str) {
	var args = Array.prototype.slice.call(arguments, 1);
	return Str.replace(/{(\d+)}/g, function (match, number) {
		return typeof args[number] !== 'undefined' ?
			args[number] :
			match;
	});
}

function RunSelected(TextEditor) {
	if (!testerReady()) return;
	if (workspaceDirty()) saveAndRunSelected();
	else runSelectedScript(TextEditor);
}

function saveAndRunSelected() {
	let request = prepareRequest();
	request.File = getDocument().fileName;
	request.Request = Requests.SaveBeforeRunSelected;
	sendRequest(request);
}

function runSelectedScript(TextEditor) {
	Output.clear();
	let request = prepareRequest();
	request.Request = Requests.RunSelected;
	request.File = getDocument().fileName;
	request.Data = {
		"Start": 1 + TextEditor.selection.start.line,
		"Selection": TextEditor.document.getText(TextEditor.selection)
	};
	sendRequest(request);
}

function SetMain() {
	if (!testerReady()) return;
	if (workspaceDirty()) saveAndAssign();
	else assignMain();
}

function saveAndAssign() {
	let request = prepareRequest();
	request.File = getDocument().fileName;
	request.Request = Requests.SaveBeforeAssigning;
	sendRequest(request);
}

function assignMain() {
	let request = prepareRequest();
	request.File = getDocument().fileName;
	request.Request = Requests.SetMain;
	sendRequest(request);
}

function getResponse(File) {
	let data = FileSystem.readFileSync(File, 'utf8');
	if (data.charCodeAt(0) === 0xFEFF) {
		data = data.slice(1);
	}
	try {
		return JSON.parse(data);
	} catch (error) {}
}

function prepareRequest() {
	let request = {
		ID: new Date().getTime(),
		Request: '',
		File: '',
		Data: {}
	};
	return request;
}

function sendRequest(request) {
	let file = testerFile('request');
	if (!file) return;
	RequestID.set(request.ID);
	FileSystem.writeFileSync(file, JSON.stringify(request));
}

function CheckModule() {
	if (!testerReady()) return;
	Output.clear();
	if (getDocument().isDirty) saveAndCheck();
	else checkSyntax();
}

function getDocument() {
	return Studio.window.activeTextEditor.document;
}

function saveAndCheck() {
	let request = prepareRequest();
	request.File = getDocument().fileName;
	request.Request = Requests.SaveBeforeCheckSyntax;
	sendRequest(request);
}

function checkSyntax() {
	let request = prepareRequest();
	request.File = getDocument().fileName;
	request.Request = Requests.CheckSyntax;
	sendRequest(request);
}

function ProceedResponse(Event) {
	let file = testerFile('response', Event.fsPath);
	let response = getResponse(file);
	if (!response) return;
	switch (response.Request.Request) {
		case Requests.CheckSyntax: {
			Problems.clear();
			showMessages(response);
			break;
		}
		case Requests.SaveBeforeCheckSyntax: {
			proceedCheckSyntax(response);
			break;
		}
		case Requests.SaveBeforeRun: {
			proceedRun(response);
			break;
		}
		case Requests.SaveBeforeRunSelected: {
			proceedRunSelected(response);
			break;
		}
		case Requests.SaveBeforeAssigning: {
			proceedAssigning(response)
			break;
		}
		case Requests.PickField: {
			proceedFields(response);
			break;
		}
		case Requests.PickScenario: {
			proceedScenarios(response);
			break;
		}
		case Requests.GenerateID: {
			insertID(response);
			break;
		}
		default: {
			Problems.clear();
			showMessages(response);
		}
	}
	Studio.window.setStatusBarMessage(sformat(MessagesList.RequestCompleted, response.Request.Request));
}

function showMessages(response) {
	let set = response.Messages;
	if (!set) return;
	let messages = [];
	for (const message of set) {
		let type = message.Type;
		let text = message.Text;
		switch (type) {
			case Messages.Popup:
			case Messages.Hint: {
				Output.appendLine(text);
				break;
			}
			case Messages.PopupWarning: {
				Studio.window.showWarningMessage(text);
				break;
			}
			default: {
				let line = message.Line - 1;
				let column = message.Column - 1;
				let range = new Studio.Range(line, column, line, column);
				let msg = [new Studio.Diagnostic(range, text, messageSeverity(type))];
				let file = message.File;
				let url = Studio.Uri.file(!file ? currentFile() : file);
				messages.push([url, msg]);
			}
		}
	}
	Problems.set(messages);

	function messageSeverity(Type) {
		switch (Type) {
			case Messages.Error:
				return 0;
			case Messages.Warning:
				return 1;
			default:
				return 2;
		}
	}
}

function proceedCheckSyntax(response) {
	let fileSaved = response.TransactionComplete;
	if (fileSaved) checkSyntax();
	else getDocument().save();
}

function proceedRun(response) {
	let fileSaved = response.TransactionComplete;
	if (fileSaved) Run();
	else saveUnsaved();
}

function saveUnsaved() {
	for (let document of Studio.workspace.textDocuments) {
		if (document.isDirty) {
			document.save();
			break;
		}
	}
}

function proceedRunSelected(response) {
	let fileSaved = response.TransactionComplete;
	if (fileSaved) Studio.commands.executeCommand('extension.runSelected');
	else saveUnsaved();
}

function proceedAssigning(response) {
	let fileSaved = response.TransactionComplete;
	if (fileSaved) SetMain();
	else getDocument().save();
}

function proceedFields(response) {
	if (!response.Fields) showMessages(response);
	TestedControls = response.Fields;
	Studio.commands.executeCommand('editor.action.triggerSuggest');
}

function proceedScenarios(response) {
	if (!response.Scenarios) showMessages(response);
	Scenarios = response.Scenarios;
	Studio.commands.executeCommand('editor.action.triggerSuggest');
}

function insertID(response) {
	Studio.commands.executeCommand('extension.generateID', response.GeneratedID);
}

function RetrieveFields() {
	let request = prepareRequest();
	request.Request = Requests.PickField;
	sendRequest(request);
}

function RetrieveScenarios(Method) {
	let request = prepareRequest();
	request.Request = Requests.PickScenario;
	request.File = getDocument().fileName;
	request.Method = Method.Name;
	sendRequest(request);
}

function GenerateID(TextEditor, Edit, ID) {
	if (typeof ID === 'string') {
		let selection = TextEditor.selection;
		if (!selection.isEmpty) Edit.delete(selection);
		Edit.insert(selection.active, ID);
	} else {
		let request = prepareRequest();
		request.Request = Requests.GenerateID;
		sendRequest(request);
	}
}

function GetControls() {
	return TestedControls;
}

function ResetControls() {
	TestedControls.Set = [];
}

function GetScenarios() {
	return Scenarios;
}

function ResetScenarios() {
	Scenarios = [];
}

const Messages = {
	Info: 'I',
	Error: 'E',
	Warning: 'W',
	Hint: 'H',
	Popup: 'P',
	PopupWarning: 'PW'
}

const Requests = {
	SaveFile: 'SaveFile',
	SaveBeforeRun: 'SaveBeforeRun',
	Run: 'Run',
	SaveBeforeCheckSyntax: 'SaveBeforeCheckSyntax',
	CheckSyntax: 'CheckSyntax',
	PickField: 'PickField',
	PickScenario: 'PickScenario',
	GenerateID: 'GenerateID',
	SaveBeforeAssigning: 'SaveBeforeAssigning',
	SetMain: 'SetMain',
	SaveBeforeRunSelected: 'SaveBeforeRunSelected',
	RunSelected: 'RunSelected'
}

const Statuses = {
	Completed: 'Completed'
}

exports.Init = Init;
exports.Run = Run;
exports.RunSelected = RunSelected;
exports.SetMain = SetMain;
exports.CheckModule = CheckModule;
exports.RetrieveFields = RetrieveFields;
exports.RetrieveScenarios = RetrieveScenarios;
exports.GenerateID = GenerateID;
exports.ProceedResponse = ProceedResponse;
exports.GetControls = GetControls;
exports.ResetControls = ResetControls;
exports.GetScenarios = GetScenarios;
exports.ResetScenarios = ResetScenarios;