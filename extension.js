const Studio = require('vscode');
const FileSystem = require('fs');
const Path = require('path');
const Tester = require('./tester');
const Lexer = require('./lexer');
const Transponder = require('./transponder');
const MessagesList = require('./messages').MessagesList;
const Types = Tester.Types;
const Methods = Tester.Methods;
const FluentMethods = Tester.FluentMethods;
const FileExtensions = Tester.FileExtensions;
const Languages = Tester.Languages;
const Commands = Tester.Commands;
const SourceCode = Lexer.SourceCode;
const GetControls = Transponder.GetControls;
const ResetControls = Transponder.ResetControls;
const GetScenarios = Transponder.GetScenarios;
const ResetScenarios = Transponder.ResetScenarios;
let WorkspaceFolders;

function activate(Context) {
	if (!init()) return;
	registerProviders(Context);
	registerCommands(Context);
	registerWatcher(Context);
}

function init() {
	WorkspaceFolders = Studio.workspace.workspaceFolders;
	if (!WorkspaceFolders) {
		console.log(MessagesList.ProjectFolderUndefined);
		return false;
	}
	Transponder.Init();
	return true;
}

function registerProviders(Context) {
	let subscriptions = Context.subscriptions;
	let langs = Studio.languages;
	subscriptions.push(langs.registerCompletionItemProvider("bsl", new MethodsList()));
	subscriptions.push(langs.registerCompletionItemProvider("bsl", new FluentList(), "."));
	subscriptions.push(langs.registerCompletionItemProvider("bsl", new FieldsList('#'), "#"));
	subscriptions.push(langs.registerCompletionItemProvider("bsl", new FieldsList('!'), "!"));
	subscriptions.push(langs.registerCompletionItemProvider("bsl", new FieldsList('\"'), "\""));
	subscriptions.push(langs.registerSignatureHelpProvider("bsl", new Help(), '('));
	subscriptions.push(langs.registerDefinitionProvider("bsl", new ScenarioDefinition(), '('));
}

function registerCommands(Context) {
	let commands = Studio.commands;
	let subscriptions = Context.subscriptions;
	subscriptions.push(commands.registerCommand('extension.run', Transponder.Run));
	subscriptions.push(commands.registerCommand('extension.setMain', Transponder.SetMain));
	subscriptions.push(commands.registerCommand('extension.checkModule', Transponder.CheckModule));
	subscriptions.push(commands.registerCommand('extension.pickField', Transponder.RetrieveFields));
	subscriptions.push(commands.registerTextEditorCommand('extension.generateID', Transponder.GenerateID));
	subscriptions.push(commands.registerTextEditorCommand('extension.runSelected', Transponder.RunSelected));
}

function registerWatcher(context) {
	let watcher = Studio.workspace.createFileSystemWatcher('**/response', false, false, true);
	watcher.onDidChange(Transponder.ProceedResponse);
	watcher.onDidCreate(Transponder.ProceedResponse);
	context.subscriptions.push(watcher);
}

class MethodsList {
	provideCompletionItems(Document, Position) {
		let lang = SourceCode.MethodLanguage(Document, Position);
		if (lang === undefined) return;
		let name;
		let help;
		if (lang === Languages.Russian) {
			name = 'NameRu';
			help = 'HelpRu';
		} else {
			name = 'Name';
			help = 'Help';
		}
		let list = [];
		for (const method in Methods) {
			let entry = Methods[method];
			let item = new Studio.CompletionItem(entry[name], Studio.CompletionItemKind.Field);
			item.documentation = new Studio.MarkdownString(entry[help]);
			list.push(item);
		}
		return list;
	}
}

class FluentList {
	provideCompletionItems(Document, Position) {
		let data = SourceCode.Fluent(Document, Position);
		if (!data) return;
		let list = [];
		for (const method in FluentMethods) {
			let entry = FluentMethods[method];
			let item = new Studio.CompletionItem(entry[data.Name], Studio.CompletionItemKind.Field);
			item.documentation = new Studio.MarkdownString(entry[data.Help]);
			list.push(item);
		}
		return list;
	}
}

class FieldsList {
	constructor(Starter) {
		this.Starter = Starter;
	}

	provideCompletionItems(Document, Position) {
		let that = this;
		let controls, scenarios;
		let starter = this.findStarter(Document, Position);
		if (starter !== this.Starter) return;
		let info = SourceCode.Position(Document, Position);
		if (!info) return;
		let method = info.Method;
		let types = method.Params[info.Parameter].Type;
		if (types.includes(Types.Action)) return proposeActions();
		else if (method === Methods.call || method === Methods.run) {
			scenarios = GetScenarios();
			if (scenarios.length === 0) Transponder.RetrieveScenarios(method);
			else return proposeScenarios();
		} else if (controlRequired()) {
			controls = GetControls();
			if (controls.Set.length === 0) Transponder.RetrieveFields();
			else return proposeControls();
		}

		function proposeActions() {
			let list = [];
			let name;
			let help;
			if (info.Lang === Languages.Russian) {
				name = 'ActionRu';
				help = 'HelpRu';
			} else {
				name = 'Action';
				help = 'Help';
			}
			for (const action of Commands) {
				let item = new Studio.CompletionItem(action[name], Studio.CompletionItemKind.EnumMember);
				item.detail = action[help];
				list.push(item);
			}
			return list;
		}

		function proposeScenarios() {
			let list = [];
			for (const scenario of scenarios) {
				let path = scenario.Path;
				let item = new Studio.CompletionItem(path + ' | ' + scenario.Application, Studio.CompletionItemKind.Function);
				item.insertText = path;
				list.push(item);
			}
			ResetScenarios();
			return list;
		}

		function controlRequired() {
			return types.includes(Types.Window) ||
				types.includes(Types.CommandInterface) ||
				types.includes(Types.InterfaceGroup) ||
				types.includes(Types.InterfaceButton) ||
				types.includes(Types.Form) ||
				types.includes(Types.Field) ||
				types.includes(Types.ContextMenu) ||
				types.includes(Types.CommandBar) ||
				types.includes(Types.Group) ||
				types.includes(Types.Button) ||
				types.includes(Types.Table) ||
				types.includes(Types.Decoration);
		}

		function proposeControls() {
			let set = controls.Set;
			let filter = info.Method.Params[info.Parameter].Type;
			let list = [];
			let current = controls.Current;
			let suffix = that.Starter === '\"' ? controls.Language === 'ru' ? '!' : '#' : '';
			for (const field of set) {
				if (filter.length && !filter.includes(Types[field.Type])) continue;
				let name = field.Name;
				let title = field.TitleText;
				let presentation = (current === name ? '* ' : '') + (name === title ? name : `${name} | ${title}`);
				let item = new Studio.CompletionItem(presentation, Studio.CompletionItemKind.Field);
				item.detail = `${field.TypeDescription}: ${title}`;
				if (field.Type === Types.Form.Name) item.insertText = title;
				else item.insertText = suffix + name;
				list.push(item);
			}
			if (list.length > 0) ResetControls();
			return list;
		}
	}

	findStarter(Document, Position) {
		let char = Document.lineAt(Position).text.charAt(Position.character - 1);
		if ('#!\"'.includes(char)) return char;
	}
}

class ScenarioDefinition {
	provideDefinition(Document, Position) {
		let data = methodData();
		if (!data) return;
		let list = getFiles();
		let locations = [];
		let location;
		for (const file of list) {
			location = new Studio.Location(Studio.Uri.file(file), new Studio.Position(0, 0));
			locations.push(location);
		}
		return locations;

		function methodData() {
			let info = SourceCode.Method(Document, Position);
			if (!info) return;
			let method = info.Method.Method;
			if (info.Method.Parameter === 0 &&
				(method === Methods.call ||
					method === Methods.run)) {
				let scenario = extractScenario(info);
				if (!scenario) return;
				return {
					Method: method,
					Scenario: scenario
				}
			}
		}

		function extractScenario(Info) {
			let start = Info.MethodTokens.Tokens[0].Start + 1;
			for (const token of Info.Tokens) {
				if (token.Start > start || start < token.End) {
					if (token.Element !== Lexer.Lexicon.String) return;
					let string = Info.Row.slice(start, token.End + 1);
					let result = /\"(.+)\"/.exec(string);
					if (!result) return;
					return result[1];
				}
			}
		}

		function getFiles() {
			let list = [];
			let path = data.Scenario.replace(/\./g, '\\' + Path.sep);
			let folder;
			if (data.Method === Methods.call) folder = WorkspaceFolders[0].uri._fsPath;
			else folder = Path.dirname(Studio.window.activeTextEditor.document.fileName);
			findFiles(list, folder, path);
			return list;
		}

		function findFiles(List, Folder, Scenario) {
			let sep = Path.sep;
			let files = FileSystem.readdirSync(Folder);
			for (let i = 0; i < files.length; i++) {
				let name = files[i];
				let file = Path.join(Folder, name);
				let data = FileSystem.lstatSync(file);
				if (data.isDirectory()) {
					let rex = new RegExp(`\\${sep}${Scenario}$`, 'i');
					let scenarioIsTree = rex.test(file);
					findFiles(List, file, scenarioIsTree ? Scenario + '\\' + sep + name : Scenario);
				} else {
					let ext = FileExtensions.Scenario;
					let rex = new RegExp(`\\${sep}${Scenario}.+\.${ext}$`, 'i');
					if (rex.test(file)) List.push(file)
				}
			}
		}
	}
}

class Help {
	provideSignatureHelp(Document, Position) {
		this.Info = SourceCode.Position(Document, Position);
		if (this.Info) return this.build();
	}

	build() {
		let signature = new Studio.SignatureInformation();
		let info = this.getDescription();
		signature.label = info.Description;
		signature.documentation = info.Help;
		signature.parameters = info.Parameters;
		let help = new Studio.SignatureHelp();
		help.activeParameter = this.Info.Parameter;
		help.activeSignature = 0;
		help.signatures = [signature];
		return help;
	}

	getDescription() {
		let description = [];
		let params = [];
		let nameField;
		let typeField;
		let helpField;
		let defaultField;
		if (this.Info.Lang === Languages.Russian) {
			nameField = 'NameRu';
			typeField = 'Ru';
			helpField = 'HelpRu';
			defaultField = 'DefaultRu';

		} else {
			nameField = 'Name';
			typeField = 'En';
			helpField = 'Help';
			defaultField = 'Default';
		}
		let method = this.Info.Method;
		description.push(method[nameField]);
		let paramsPart = [];
		for (const param of method.Params) {
			let name = param[nameField];
			let defaultValue = param[defaultField];
			let types = [];
			for (const type of param.Type) {
				types.push(type[typeField]);
			}
			paramsPart.push(`${name}${!defaultValue ? '' : ' = ' + defaultValue}: ${types.join(' | ')}`);
			params.push(new Studio.ParameterInformation(name, param[helpField]));
		}
		description.push('(');
		description.push(paramsPart.join(', '));
		description.push(')');
		return {
			Description: description.join(''),
			Parameters: params,
			Help: new Studio.MarkdownString(method[helpField])
		};
	}
}

function deactivate() {}

exports.activate = activate;
exports.deactivate = deactivate;