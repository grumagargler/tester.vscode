function parameterInfo(Name, NameRu, Types, Help, HelpRu, Default, DefaultRu) {
	return {
		Name: Name,
		NameRu: NameRu,
		Type: Types,
		Help: Help,
		HelpRu: HelpRu,
		Default: Default,
		DefaultRu: DefaultRu
	}
}

const Types = {
	Window: {
		Name: 'Window',
		En: 'TestedClientApplicationWindow',
		Ru: 'ТестируемоеОкноКлиентскогоПриложения'
	},
	CommandInterface: {
		Name: 'CommandInterface',
		En: 'TestedWindowCommandInterface',
		Ru: 'ТестируемыйКомандныйИнтерфейсОкна'
	},
	InterfaceGroup: {
		Name: 'InterfaceGroup',
		En: 'TestedCommandInterfaceGroup',
		Ru: 'ТестируемаяГруппаКомандногоИнтерфейса'
	},
	InterfaceButton: {
		Name: 'InterfaceButton',
		En: 'TestedCommandInterfaceButton',
		Ru: 'ТестируемаяКнопкаКомандногоИнтерфейса'
	},
	Form: {
		Name: 'Form',
		En: 'TestedForm',
		Ru: 'ТестируемаяФорма'
	},
	Field: {
		Name: 'Field',
		En: 'Tested form field',
		Ru: 'Тестируемое поле формы'
	},
	ContextMenu: {
		Name: 'ContextMenu',
		En: 'ContextMenu',
		Ru: 'КонтекстноеМеню'
	},
	CommandBar: {
		Name: 'CommandBar',
		En: 'CommandBar',
		Ru: 'КоманднаяПанель'
	},
	Group: {
		Name: 'Group',
		En: 'TestedFormGroup',
		Ru: 'ТестируемаяГруппаФормы'
	},
	Button: {
		Name: 'Button',
		En: 'TestedFormButton',
		Ru: 'ТестируемаяКнопкаФормы'
	},
	Table: {
		Name: 'Table',
		En: 'TestedFormTable',
		Ru: 'ТестируемаяТаблицаФормы'
	},
	Decoration: {
		Name: 'Decoration',
		En: 'TestedFormDecoration',
		Ru: 'ТестируемаяДекорацияФормы'
	},
	String: {
		Name: 'String',
		En: 'String',
		Ru: 'Строка'
	},
	Number: {
		Name: 'Number',
		En: 'Number',
		Ru: 'Число'
	},
	Date: {
		Name: 'Date',
		En: 'Date',
		Ru: 'Дата'
	},
	Boolean: {
		Name: 'Boolean',
		En: 'Boolean',
		Ru: 'Булево'
	},
	TestedObject: {
		Name: 'TestedObject',
		En: 'TestedObject',
		Ru: 'ТестируемыйОбъект'
	},
	Type: {
		Name: 'Type',
		En: 'Type',
		Ru: 'Тип'
	},
	Any: {
		Name: 'Any',
		En: 'Any',
		Ru: 'Любой'
	},
	Array: {
		Name: 'Array',
		En: 'Array',
		Ru: 'Массив'
	},
	Structure: {
		Name: 'Structure',
		En: 'Structure',
		Ru: 'Структура'
	},
	Action: {
		Name: 'Action',
		En: 'URL',
		Ru: 'НавигационнаяСсылка'
	},
	BinaryData: {
		Name: 'BinaryData',
		En: 'BinaryData',
		Ru: 'ДвоичныеДанные'
	},
	ScenariosRef: {
		Name: 'CatalogRef.Scenarios',
		En: 'CatalogRef.Scenarios',
		Ru: 'СправочникСсылка.Scenarios'
	},
	VersionsRef: {
		Name: 'CatalogRef.Versions',
		En: 'CatalogRef.Versions',
		Ru: 'СправочникСсылка.Versions'
	},
	SessionsRef: {
		Name: 'CatalogRef.Sessions',
		En: 'CatalogRef.Sessions',
		Ru: 'СправочникСсылка.Sessions'
	}
}

const StandardParameters = {
	Field: parameterInfo('Field', 'Поле', [Types.Field]),
	Source: parameterInfo('Source', 'Источник', [Types.Form, Types.Table], '', '', 'undefined', 'неопределено'),
	Value: parameterInfo('Value', 'Значение', [Types.String, Types.Number, Types.Date]),
	Form: parameterInfo('Form', 'Форма', [Types.Form]),
	Table: parameterInfo('Table', 'Таблица', [Types.Table]),
	Type: parameterInfo('Type', 'Тип', [Types.Type], '', '', 'undefined', 'неопределено'),
	Any: parameterInfo('Value', 'Значение', [Types.Any]),
	Scenario: parameterInfo('Scenario', 'Сценарий', [Types.ScenariosRef, Types.VersionsRef], '', '', 'undefined', 'неопределено'),
	Session: parameterInfo('Session', 'Сессия', [Types.SessionsRef], '', '', 'undefined', 'неопределено')
}

const Commands = [{
		Action: 'e1cib/list/Catalog.<Name>',
		ActionRu: 'e1cib/list/Справочник.<Имя>',
		Help: 'Открывает стандартную форму списка',
		HelpRu: 'Открывает стандартную форму списка'
	},
	{
		Action: 'e1cib/list/Document.<Name>',
		ActionRu: 'e1cib/list/Документ.<Имя>',
		Help: 'Открывает стандартную форму списка',
		HelpRu: 'Открывает стандартную форму списка'
	},
	{
		Action: 'e1cib/list/DocumentJournal.<Name>',
		ActionRu: 'e1cib/list/ЖурналДокументов.<Имя>',
		Help: 'Открывает стандартную форму списка',
		HelpRu: 'Открывает стандартную форму списка'
	},
	{
		Action: 'e1cib/list/ChartOfCharacteristicTypes.<Name>',
		ActionRu: 'e1cib/list/ПланВидовХарактеристик.<Имя>',
		Help: 'Открывает стандартную форму списка',
		HelpRu: 'Открывает стандартную форму списка'
	},
	{
		Action: 'e1cib/list/ChartOfAccounts.<Name>',
		ActionRu: 'e1cib/list/ПланСчетов.<Имя>',
		Help: 'Открывает стандартную форму списка',
		HelpRu: 'Открывает стандартную форму списка'
	},
	{
		Action: 'e1cib/list/ChartOfCalculationTypes.<Name>',
		ActionRu: 'e1cib/list/ПланВидовРасчета.<Имя>',
		Help: 'Открывает стандартную форму списка',
		HelpRu: 'Открывает стандартную форму списка'
	},
	{
		Action: 'e1cib/list/InformationRegister.<Name>',
		ActionRu: 'e1cib/list/РегистрСведений.<Имя>',
		Help: 'Открывает стандартную форму списка',
		HelpRu: 'Открывает стандартную форму списка'
	},
	{
		Action: 'e1cib/list/AccumulationRegister.<Name>',
		ActionRu: 'e1cib/list/РегистрНакопления.<Имя>',
		Help: 'Открывает стандартную форму списка',
		HelpRu: 'Открывает стандартную форму списка'
	},
	{
		Action: 'e1cib/list/AccountingRegister.<Name>',
		ActionRu: 'e1cib/list/РегистрБухгалтерии.<Имя>',
		Help: 'Открывает стандартную форму списка',
		HelpRu: 'Открывает стандартную форму списка'
	},
	{
		Action: 'e1cib/list/CalculationRegister.<Name>',
		ActionRu: 'e1cib/list/РегистрРасчета.<Имя>',
		Help: 'Открывает стандартную форму списка',
		HelpRu: 'Открывает стандартную форму списка'
	},
	{
		Action: 'e1cib/list/BusinessProcess.<Name>',
		ActionRu: 'e1cib/list/БизнесПроцесс.<Имя>',
		Help: 'Открывает стандартную форму списка',
		HelpRu: 'Открывает стандартную форму списка'
	},
	{
		Action: 'e1cib/list/Task.<Name>',
		ActionRu: 'e1cib/list/Задача.<Имя>',
		Help: 'Открывает стандартную форму списка',
		HelpRu: 'Открывает стандартную форму списка'
	},
	{
		Action: 'e1cib/command/Catalog.<Name>.Create',
		ActionRu: 'e1cib/command/Справочник.<Имя>.Создать',
		Help: 'Открывает стандартную форму нового объекта',
		HelpRu: 'Открывает стандартную форму нового объекта'
	},
	{
		Action: 'e1cib/command/Document.<Name>.Create',
		ActionRu: 'e1cib/command/Документ.<Имя>.Создать',
		Help: 'Открывает стандартную форму нового объекта',
		HelpRu: 'Открывает стандартную форму нового объекта'
	},
	{
		Action: 'e1cib/command/ChartOfCharacteristicTypes.<Name>.Create',
		ActionRu: 'e1cib/command/ПланВидовХарактеристик.<Имя>.Создать',
		Help: 'Открывает стандартную форму нового объекта',
		HelpRu: 'Открывает стандартную форму нового объекта'
	},
	{
		Action: 'e1cib/command/ChartOfAccounts.<Name>.Create',
		ActionRu: 'e1cib/command/ПланСчетов.<Имя>.Создать',
		Help: 'Открывает стандартную форму нового объекта',
		HelpRu: 'Открывает стандартную форму нового объекта'
	},
	{
		Action: 'e1cib/command/ChartOfCalculationTypes.<Name>.Create',
		ActionRu: 'e1cib/command/ПланВидовРасчета.<Имя>.Создать',
		Help: 'Открывает стандартную форму нового объекта',
		HelpRu: 'Открывает стандартную форму нового объекта'
	},
	{
		Action: 'e1cib/command/InformationRegister.<Name>.Create',
		ActionRu: 'e1cib/command/РегистрСведений.<Имя>.Создать',
		Help: 'Открывает стандартную форму новой записи',
		HelpRu: 'Открывает стандартную форму новой записи'
	},
	{
		Action: 'e1cib/command/BusinessProcess.<Name>.Create',
		ActionRu: 'e1cib/command/БизнесПроцесс.<Имя>.Создать',
		Help: 'Открывает стандартную форму нового объекта',
		HelpRu: 'Открывает стандартную форму нового объекта'
	},
	{
		Action: 'e1cib/command/Task.<Name>.Create',
		ActionRu: 'e1cib/command/Задача.<Имя>.Создать',
		Help: 'Открывает стандартную форму нового объекта',
		HelpRu: 'Открывает стандартную форму нового объекта'
	},
	{
		Action: 'e1cib/command/Catalog.<Name>.Command.<Name>',
		ActionRu: 'e1cib/command/Справочник.<Имя>.Команда.<Имя>',
		Help: 'Открывает не параметризированную команду',
		HelpRu: 'Открывает не параметризированную команду'
	},
	{
		Action: 'e1cib/command/Document.<Name>.Command.<Name>',
		ActionRu: 'e1cib/command/Документ.<Имя>.Команда.<Имя>',
		Help: 'Открывает не параметризированную команду',
		HelpRu: 'Открывает не параметризированную команду'
	},
	{
		Action: 'e1cib/command/DocumentJournal.<Name>.Command.<Name>',
		ActionRu: 'e1cib/command/ЖурналДокументов.<Имя>.Команда.<Имя>',
		Help: 'Открывает не параметризированную команду',
		HelpRu: 'Открывает не параметризированную команду'
	},
	{
		Action: 'e1cib/command/ChartOfCharacteristicTypes.<Name>.Command.<Name>',
		ActionRu: 'e1cib/command/ПланВидовХарактеристик.<Имя>.Команда.<Имя>',
		Help: 'Открывает не параметризированную команду',
		HelpRu: 'Открывает не параметризированную команду'
	},
	{
		Action: 'e1cib/command/ChartOfAccounts.<Name>.Command.<Name>',
		ActionRu: 'e1cib/command/ПланСчетов.<Имя>.Команда.<Имя>',
		Help: 'Открывает не параметризированную команду',
		HelpRu: 'Открывает не параметризированную команду'
	},
	{
		Action: 'e1cib/command/ChartOfCalculationTypes.<Name>.Command.<Name>',
		ActionRu: 'e1cib/command/ПланВидовРасчета.<Имя>.Команда.<Имя>',
		Help: 'Открывает не параметризированную команду',
		HelpRu: 'Открывает не параметризированную команду'
	},
	{
		Action: 'e1cib/command/InformationRegister.<Name>.Command.<Name>',
		ActionRu: 'e1cib/command/РегистрСведений.<Имя>.Команда.<Имя>',
		Help: 'Открывает не параметризированную команду',
		HelpRu: 'Открывает не параметризированную команду'
	},
	{
		Action: 'e1cib/command/AccumulationRegister.<Name>.Command.<Name>',
		ActionRu: 'e1cib/command/РегистрНакопления.<Имя>.Команда.<Имя>',
		Help: 'Открывает не параметризированную команду',
		HelpRu: 'Открывает не параметризированную команду'
	},
	{
		Action: 'e1cib/command/AccountingRegister.<Name>.Command.<Name>',
		ActionRu: 'e1cib/command/РегистрБухгалтерии.<Имя>.Команда.<Имя>',
		Help: 'Открывает не параметризированную команду',
		HelpRu: 'Открывает не параметризированную команду'
	},
	{
		Action: 'e1cib/command/CalculationRegister.<Name>.Command.<Name>',
		ActionRu: 'e1cib/command/РегистрРасчета.<Имя>.Команда.<Имя>',
		Help: 'Открывает не параметризированную команду',
		HelpRu: 'Открывает не параметризированную команду'
	},
	{
		Action: 'e1cib/command/BusinessProcess.<Name>.Command.<Name>',
		ActionRu: 'e1cib/command/БизнесПроцесс.<Имя>.Команда.<Имя>',
		Help: 'Открывает не параметризированную команду',
		HelpRu: 'Открывает не параметризированную команду'
	},
	{
		Action: 'e1cib/command/Task.<Name>.Command.<Name>',
		ActionRu: 'e1cib/command/Задача.<Имя>.Команда.<Имя>',
		Help: 'Открывает не параметризированную команду',
		HelpRu: 'Открывает не параметризированную команду'
	},
	{
		Action: 'e1cib/app/Report.<Name>',
		ActionRu: 'e1cib/app/Отчет.<Имя>',
		Help: 'Открывает отчет',
		HelpRu: 'Открывает отчет'
	},
	{
		Action: 'e1cib/app/DataProcessor.<Name>',
		ActionRu: 'e1cib/app/Обработка.<Имя>',
		Help: 'Открывает обработку',
		HelpRu: 'Открывает обработку'
	},
	{
		Action: 'e1cib/command/CommonCommand.<Name>',
		ActionRu: 'e1cib/command/ОбщаяКоманда.<Имя>',
		Help: 'Открывает общую команду',
		HelpRu: 'Открывает общую команду'
	},
	{
		Action: 'e1cib/data/CommonForm.<Name>',
		ActionRu: 'e1cib/data/ОбщаяФорма.<Имя>',
		Help: 'Открывает общую форму',
		HelpRu: 'Открывает общую форму'
	}
]

const Methods = {
	connect: {
		Name: 'Connect',
		NameRu: 'Подключить',
		Params: [parameterInfo('ClearErrors', 'ОчищатьОшибки', [Types.Boolean], '', '', 'true', 'истина'), parameterInfo('Port', 'Порт', [Types.Number], '', '', '0', '0')],
		HelpRu: 'Производит подключение Тестера к тестируемому приложению. Настройки подключения указываются в справочнике Приложения. [Справка](http://test1c.com/api#connect)',
		Returns: undefined
	},
	disconnect: {
		Name: 'Disconnect',
		NameRu: 'Отключить',
		Params: [parameterInfo('Close', 'Закрыть', [Types.Boolean], '', '', 'false', 'ложь'), parameterInfo('ShutdownProxy', 'ТушитьПрокси', [Types.Boolean], '', '', 'false', 'ложь')],
		Help: 'Производит отключение от тестируемого приложения. [Справка](http://test1c.com/api#disconnect)',
		HelpRu: 'Производит отключение от тестируемого приложения. [Справка](http://test1c.com/api#disconnect)',
		Returns: undefined
	},
	closeall: {
		Name: 'CloseAll',
		NameRu: 'ЗакрытьВсе',
		Params: [],
		Help: 'Закрывает все окна в тестируемом приложении. Если есть окна с несохраненными данными, Тестер будет пытаться ответить Нет на возникающие вопросы системы. [Справка](http://test1c.com/api#closeall)',
		HelpRu: 'Закрывает все окна в тестируемом приложении. Если есть окна с несохраненными данными, Тестер будет пытаться ответить Нет на возникающие вопросы системы. [Справка](http://test1c.com/api#closeall)',
		Returns: undefined
	},
	call: {
		Name: 'Call',
		NameRu: 'Вызвать',
		Params: [parameterInfo('Scenario', 'Сценарий', [Types.String]), parameterInfo('Params', 'Параметры', [Types.Any], '', '', 'undefined', 'неопределено'), parameterInfo('Application', 'Приложение', [Types.String], '', '', 'undefined', 'неопределено')],
		Help: 'Выполняет запуск сценария по переданным пути и параметрам. [Справка](http://test1c.com/api#run)',
		HelpRu: 'Выполняет запуск сценария по переданным пути и параметрам. [Справка](http://test1c.com/api#run)',
		Returns: Types.Any
	},
	callserver: {
		Name: 'CallServer',
		NameRu: 'ВызватьСервер',
		Params: [parameterInfo('Debug', 'Debug', [Types.Structure]), parameterInfo('Scenario', 'Сценарий', [Types.String]), parameterInfo('Params', 'Параметры', [Types.Any], '', '', 'undefined', 'неопределено'), parameterInfo('Application', 'Приложение', [Types.String], '', '', 'undefined', 'неопределено')],
		Help: '',
		HelpRu: '',
		Returns: Types.Any
	},
	run: {
		Name: 'Run',
		NameRu: 'Позвать',
		Params: [parameterInfo('Scenario', 'Сценарий', [Types.String]), parameterInfo('Params', 'Параметры', [Types.Any], '', '', 'undefined', 'неопределено'), parameterInfo('Application', 'Приложение', [Types.String], '', '', 'undefined', 'неопределено')],
		Help: 'Выполняет запуск сценария в текущей папке сценариев. Метод аналогичен методу Вызвать, с той разницей, что поиск сценария будет производиться начиная с папки, где находится вызывающий сценарий. Таким образом, метод Позвать является краткой записью метода Вызвать. [Справка](http://test1c.com/api#run)',
		HelpRu: 'Выполняет запуск сценария в текущей папке сценариев. Метод аналогичен методу Вызвать, с той разницей, что поиск сценария будет производиться начиная с папки, где находится вызывающий сценарий. Таким образом, метод Позвать является краткой записью метода Вызвать. [Справка](http://test1c.com/api#run)',
		Returns: Types.Any
	},
	runserver: {
		Name: 'RunServer',
		NameRu: 'ЗапуститьСервер',
		Params: [parameterInfo('Debug', 'Debug', [Types.Structure]), parameterInfo('Scenario', 'Сценарий', [Types.String]), parameterInfo('Params', 'Параметры', [Types.Any], '', '', 'undefined', 'неопределено'), parameterInfo('Application', 'Приложение', [Types.String], '', '', 'undefined', 'неопределено')],
		Help: '',
		HelpRu: '',
		Returns: Types.Any
	},
	openmenu: {
		Name: 'OpenMenu',
		NameRu: 'Меню',
		Params: [parameterInfo('Path', 'Путь', [Types.String])],
		Help: 'Открывает ссылку на объект в глобальном командном интерфейсе. [Справка](http://test1c.com/api#openmenu)',
		HelpRu: 'Открывает ссылку на объект в глобальном командном интерфейсе. [Справка](http://test1c.com/api#openmenu)',
		Returns: undefined
	},
	commando: {
		Name: 'Commando',
		NameRu: 'Коммандос',
		Params: [parameterInfo('Action', 'Команда', [Types.Action], '')],
		Help: 'Выполняет навигационную команду системы по переданному строковому параметру. [Справка](http://test1c.com/api#commando)',
		HelpRu: 'Выполняет навигационную команду системы по переданному строковому параметру. [Справка](http://test1c.com/api#commando)',
		Returns: undefined
	},
	with: {
		Name: 'With',
		NameRu: 'Здесь',
		Params: [StandardParameters.Form, parameterInfo('Activate', 'Активировать', [Types.Boolean], '', '', 'false', 'ложь')],
		Help: 'Определяет значение глобальной переменной ТекущийОбъект согласно найденного визуального объекта. [Справка](http://test1c.com/api#with)',
		HelpRu: 'Определяет значение глобальной переменной ТекущийОбъект согласно найденного визуального объекта. [Справка](http://test1c.com/api#with)',
		Returns: Types.TestedObject
	},
	get: {
		Name: 'Get',
		NameRu: 'Получить',
		Params: [parameterInfo('Name', 'Имя', [Types.Window, Types.Button, Types.CommandBar, Types.ContextMenu, Types.Decoration, Types.Field, Types.Group, Types.InterfaceButton, Types.InterfaceGroup, Types.Table]), StandardParameters.Source, StandardParameters.Type],
		Help: 'Возвращает тестируемый объект. [Справка](http://test1c.com/api#get)',
		HelpRu: 'Возвращает тестируемый объект. [Справка](http://test1c.com/api#get)',
		Returns: Types.TestedObject
	},
	clear: {
		Name: 'Clear',
		NameRu: 'Очистить',
		Params: [StandardParameters.Field, StandardParameters.Source, StandardParameters.Type],
		Help: 'Очищает поле. [Справка](http://test1c.com/api#clear)',
		HelpRu: 'Очищает поле. [Справка](http://test1c.com/api#clear)',
		Returns: Types.TestedObject
	},
	fetch: {
		Name: 'Fetch',
		NameRu: 'Взять',
		Params: [StandardParameters.Field, StandardParameters.Source, StandardParameters.Type],
		Help: 'Возвращает строковое представление значения объекта. [Справка](http://test1c.com/api#fetch)',
		HelpRu: 'Возвращает строковое представление значения объекта. [Справка](http://test1c.com/api#fetch)',
		Returns: Types.Value
	},
	set: {
		Name: 'Set',
		NameRu: 'Установить',
		Params: [StandardParameters.Field, StandardParameters.Value, StandardParameters.Source, StandardParameters.Type],
		Help: 'Активирует и устанавливает значение в поле. Если тип поля Переключатель тогда метод ВыбратьВариант будет использован. В остальных случаях ВвестиТекст (речь идет о методах платформы 1С по работе с тестовым приложением). [Справка](http://test1c.com/api#set)',
		HelpRu: 'Активирует и устанавливает значение в поле. Если тип поля Переключатель тогда метод ВыбратьВариант будет использован. В остальных случаях ВвестиТекст (речь идет о методах платформы 1С по работе с тестовым приложением). [Справка](http://test1c.com/api#set)',
		Returns: Types.TestedObject
	},
	put: {
		Name: 'Put',
		NameRu: 'Ввести',
		Params: [StandardParameters.Field, StandardParameters.Value, StandardParameters.Source, StandardParameters.Type, parameterInfo('TestValue', 'ПроверитьЗначение', [Types.Boolean], '', '', 'false', 'ложь')],
		Help: 'Метод работает аналогично методу Установить (см. выше) с той разницей, что для ссылочных значений, этот метод будет ждать выпадающего списка предлагаемых платформой значений и выбирать первое значение из этого списка. [Справка](http://test1c.com/api#put)',
		HelpRu: 'Метод работает аналогично методу Установить (см. выше) с той разницей, что для ссылочных значений, этот метод будет ждать выпадающего списка предлагаемых платформой значений и выбирать первое значение из этого списка. [Справка](http://test1c.com/api#put)',
		Returns: Types.TestedObject
	},
	pick: {
		Name: 'Pick',
		NameRu: 'Подобрать',
		Params: [StandardParameters.Field, StandardParameters.Value, StandardParameters.Source, StandardParameters.Type],
		Help: 'Производит выбор значения из списка выбора. [Справка](http://test1c.com/api#pick)',
		HelpRu: 'Производит выбор значения из списка выбора. [Справка](http://test1c.com/api#pick)',
		Returns: Types.TestedObject
	},
	activate: {
		Name: 'Activate',
		NameRu: 'Фокус',
		Params: [parameterInfo('Name', 'Имя', [Types.Button, Types.CommandBar, Types.Decoration, Types.Field, Types.Form, Types.Group, Types.Table, Types.Window]), StandardParameters.Source, StandardParameters.Type],
		Help: 'Активирует поле. [Справка](http://test1c.com/api#activate)',
		HelpRu: 'Активирует поле. [Справка](http://test1c.com/api#activate)',
		Returns: Types.TestedObject
	},
	click: {
		Name: 'Click',
		NameRu: 'Нажать',
		Params: [parameterInfo('Name', 'Имя', [Types.Button, Types.Decoration, Types.Field, Types.InterfaceButton]), StandardParameters.Source, StandardParameters.Type],
		Help: 'Активирует и нажимает на поле. [Справка](http://test1c.com/api#click)',
		HelpRu: 'Активирует и нажимает на поле. [Справка](http://test1c.com/api#click)',
		Returns: Types.TestedObject
	},
	choose: {
		Name: 'Choose',
		NameRu: 'Выбрать',
		Params: [StandardParameters.Field, StandardParameters.Source, StandardParameters.Type],
		Help: 'Начинает процесс выбора значения в поле ввода. [Справка](http://test1c.com/api#choose)',
		HelpRu: 'Начинает процесс выбора значения в поле ввода. [Справка](http://test1c.com/api#choose)',
		Returns: Types.TestedObject
	},
	check: {
		Name: 'Check',
		NameRu: 'Проверить',
		Params: [StandardParameters.Field, StandardParameters.Value, StandardParameters.Source, StandardParameters.Type],
		Help: 'Сравнивает значение поля с переданным значением. Если значения не совпадают, будет вызвано исключение. [Справка](http://test1c.com/api#check)',
		HelpRu: 'Сравнивает значение поля с переданным значением. Если значения не совпадают, будет вызвано исключение. [Справка](http://test1c.com/api#check)',
		Returns: undefined
	},
	checktable: {
		Name: 'CheckTable',
		NameRu: 'ПроверитьТаблицу',
		Params: [parameterInfo('Table', 'Таблица', [Types.String]), parameterInfo('Parameters', 'Параметры', [Types.Structure]), parameterInfo('Options', 'Опции', [Types.Structure]), StandardParameters.Source],
		Help: 'Сравнивает таблицу или динамический список с эталоном. Если значения не совпадают, будет вызвано исключение. [Справка](http://test1c.com/api#checktable)',
		HelpRu: 'Сравнивает таблицу или динамический список с эталоном. Если значения не совпадают, будет вызвано исключение. [Справка](http://test1c.com/api#checktable)',
		Returns: undefined
	},
	checkstate: {
		Name: 'CheckState',
		NameRu: 'ПроверитьСтатус',
		Params: [parameterInfo('Name', 'Имя', [Types.Button, Types.CommandBar, Types.Decoration, Types.Field, Types.Group, Types.InterfaceButton, Types.InterfaceGroup, Types.Table]), parameterInfo('Value', 'Значение', [Types.String]), parameterInfo('Name', 'Имя', [Types.Boolean], '', '', 'true', 'истина'), StandardParameters.Source, StandardParameters.Type],
		Help: 'Проверяет оформление поля. Если оформление не совпадает с ожидаемым, будет вызвано исключение. [Справка](http://test1c.com/api#checkstate)',
		HelpRu: 'Проверяет оформление поля. Если оформление не совпадает с ожидаемым, будет вызвано исключение. [Справка](http://test1c.com/api#checkstate)',
		Returns: undefined
	},
	checktemplate: {
		Name: 'CheckTemplate',
		NameRu: 'ПроверитьШаблон',
		Params: [StandardParameters.Field, StandardParameters.Source, StandardParameters.Type, parameterInfo('Template', 'Шаблон', [Types.Field], '', '', 'undefined', 'неопределено')],
		Help: 'Проверяет табличный документ. Исходный табличный документ, с которым будет проводиться сверка, должен быть заранее сохранен в форме самого сценария, на вкладке Шаблон. [Справка](http://test1c.com/api#checktemplate)',
		HelpRu: 'Проверяет табличный документ. Исходный табличный документ, с которым будет проводиться сверка, должен быть заранее сохранен в форме самого сценария, на вкладке Шаблон. [Справка](http://test1c.com/api#checktemplate)',
		Returns: undefined
	},
	checkerrors: {
		Name: 'CheckErrors',
		NameRu: 'ПроверитьОшибки',
		Params: [],
		Help: 'Проверяет наличие сообщений. Если сообщения есть, Тестер выкинет исключение. [Справка](http://test1c.com/api#checkerrors)',
		HelpRu: 'Проверяет наличие сообщений. Если сообщения есть, Тестер выкинет исключение. [Справка](http://test1c.com/api#checkerrors)',
		Returns: undefined
	},
	getmessages: {
		Name: 'GetMessages',
		NameRu: 'ПолучитьСообщения',
		Params: [],
		Help: 'Возвращает фиксированный массив сообщений активного окна. [Справка](http://test1c.com/api#getmessages)',
		HelpRu: 'Возвращает фиксированный массив сообщений активного окна. [Справка](http://test1c.com/api#getmessages)',
		Returns: Types.Array
	},
	findmessages: {
		Name: 'FindMessages',
		NameRu: 'НайтиСообщения',
		Params: [parameterInfo('Template', 'Шаблон', [Types.String])],
		Help: 'Возвращает массив найденных сообщений. [Справка](http://test1c.com/api#findmessages)',
		HelpRu: 'Возвращает массив найденных сообщений. [Справка](http://test1c.com/api#findmessages)',
		Returns: Types.Array
	},
	stop: {
		Name: 'Stop',
		NameRu: 'Стоп',
		Params: [parameterInfo('Reason', 'Причина', [Types.String], '', '', 'undefined', 'неопределено')],
		Help: 'Завершает выполнение сценария. [Справка](http://test1c.com/api#stop)',
		HelpRu: 'Завершает выполнение сценария. [Справка](http://test1c.com/api#stop)',
		Returns: undefined
	},
	pinapplication: {
		Name: 'PinApplication',
		NameRu: 'УстановитьПриложение',
		Params: [parameterInfo('Name', 'Имя', [Types.String])],
		Help: 'Устанавливает в тестируемом окружении текущее приложение. [Справка](http://test1c.com/api#pinapplication)',
		HelpRu: 'Устанавливает в тестируемом окружении текущее приложение. [Справка](http://test1c.com/api#pinapplication)',
		Returns: undefined
	},
	setversion: {
		Name: 'SetVersion',
		NameRu: 'УстановитьВерсию',
		Params: [parameterInfo('Application', 'Приложение', [Types.String]), parameterInfo('Version', 'Версия', [Types.String])],
		Help: 'Устанавливает текущую версию приложения. [Справка](http://test1c.com/api#setversion)',
		HelpRu: 'Устанавливает текущую версию приложения. [Справка](http://test1c.com/api#setversion)',
		Returns: undefined
	},
	waiting: {
		Name: 'Waiting',
		NameRu: 'Дождаться',
		Params: [StandardParameters.Form, parameterInfo('Timeout', 'Таймаут', [Types.Number], '', '', '3', '3'), StandardParameters.Type],
		Help: 'Приостанавливает выполнение сценария до появления запрошенного объекта, например - окна. [Справка](http://test1c.com/api#waiting)',
		HelpRu: 'Приостанавливает выполнение сценария до появления запрошенного объекта, например - окна. [Справка](http://test1c.com/api#waiting)',
		Returns: Types.Boolean
	},
	pause: {
		Name: 'Pause',
		NameRu: 'Пауза',
		Params: [parameterInfo('Seconds', 'Секунд', [Types.Number])],
		Help: 'Останавливает процесс выполнения сценария на заданное число секунд. [Справка](http://test1c.com/api#pause)',
		HelpRu: 'Останавливает процесс выполнения сценария на заданное число секунд. [Справка](http://test1c.com/api#pause)',
		Returns: undefined
	},
	next: {
		Name: 'Next',
		NameRu: 'Далее',
		Params: [],
		Help: 'Выполняет переход к следующему, согласно расположения элементов, полю. [Справка](http://test1c.com/api#next)',
		HelpRu: 'Выполняет переход к следующему, согласно расположения элементов, полю. [Справка](http://test1c.com/api#next)',
		Returns: undefined
	},
	close: {
		Name: 'Close',
		NameRu: 'Закрыть',
		Params: [StandardParameters.Form],
		Help: 'Закрывает форму. [Справка](http://test1c.com/api#close)',
		HelpRu: 'Закрывает форму. [Справка](http://test1c.com/api#close)',
		Returns: undefined
	},
	getwindow: {
		Name: 'GetWindow',
		NameRu: 'ПолучитьОкно',
		Params: [StandardParameters.Form],
		Help: 'Возвращает объект типа ТестируемоеОкноКлиентскогоПриложения (TestedClientApplicationWindow) для переданной формы или текущий формы. [Справка](http://test1c.com/api#getwindow)',
		HelpRu: 'Возвращает объект типа ТестируемоеОкноКлиентскогоПриложения (TestedClientApplicationWindow) для переданной формы или текущий формы. [Справка](http://test1c.com/api#getwindow)',
		Returns: Types.Window
	},
	findform: {
		Name: 'FindForm',
		NameRu: 'НайтиФорму',
		Params: [parameterInfo('Name', 'Имя', [Types.String])],
		Help: 'Находит и возвращает форму по переданному заголовку. [Справка](http://test1c.com/api#findform)',
		HelpRu: 'Находит и возвращает форму по переданному заголовку. [Справка](http://test1c.com/api#findform)',
		Returns: Types.Form
	},
	getlinks: {
		Name: 'GetLinks',
		NameRu: 'ПолучитьСсылки',
		Params: [StandardParameters.Form],
		Help: 'Возвращает командный интерфейс формы. [Справка](http://test1c.com/api#getlinks)',
		HelpRu: 'Возвращает командный интерфейс формы. [Справка](http://test1c.com/api#getlinks)',
		Returns: Types.CommandInterface
	},
	currenttab: {
		Name: 'CurrentTab',
		NameRu: 'ТекущаяВкладка',
		Params: [parameterInfo('Name', 'Имя', [Types.Group]), StandardParameters.Source, StandardParameters.Type],
		Help: 'Возвращает текущую вкладку панели с вкладками. [Справка](http://test1c.com/api#currenttab)',
		HelpRu: 'Возвращает текущую вкладку панели с вкладками. [Справка](http://test1c.com/api#currenttab)',
		Returns: Types.Group
	},
	gotorow: {
		Name: 'GotoRow',
		NameRu: 'КСтроке',
		Params: [StandardParameters.Table, parameterInfo('Column', 'Колонка', [Types.String]), StandardParameters.Value, parameterInfo('FromStart', 'ИзНачала', [Types.Boolean]), StandardParameters.Source],
		Help: 'Производит переход к строке таблицы. Метод не предназначен для поиска строк, метод предназначен для навигации к нужной строке. [Справка](http://test1c.com/api#gotorow)',
		HelpRu: 'Производит переход к строке таблицы. Метод не предназначен для поиска строк, метод предназначен для навигации к нужной строке. [Справка](http://test1c.com/api#gotorow)',
		Returns: Types.Boolean
	},
	logerror: {
		Name: 'LogError',
		NameRu: 'ЗаписатьОшибку',
		Params: [parameterInfo('Text', 'Текст', [Types.String])],
		Help: 'Выполняет добавление сообщения в журнал ошибок из кода сценария без остановки выполнения сценария. [Справка](http://test1c.com/api#logerror)',
		HelpRu: 'Выполняет добавление сообщения в журнал ошибок из кода сценария без остановки выполнения сценария. [Справка](http://test1c.com/api#logerror)',
		Returns: undefined
	},
	myversion: {
		Name: 'MyVersion',
		NameRu: 'МояВерсия',
		Params: [parameterInfo('Expression', 'Выражение', [Types.String])],
		Help: 'Определяет текущую версию приложения, сравнивает с переданной в выражении и возвращает результат сравнения. [Справка](http://test1c.com/api#myversion)',
		HelpRu: 'Определяет текущую версию приложения, сравнивает с переданной в выражении и возвращает результат сравнения. [Справка](http://test1c.com/api#myversion)',
		Returns: Types.Boolean
	},
	debugstart: {
		Name: 'DebugStart',
		NameRu: 'ОтладкаСтарт',
		Params: [],
		Help: 'После выполнения данного метода, Тестер начнет пошаговое выполнение кода сценария. Фактически, данный метод является условным включением режима отладки сценария. [Справка](http://test1c.com/api#debugstart)',
		HelpRu: 'После выполнения данного метода, Тестер начнет пошаговое выполнение кода сценария. Фактически, данный метод является условным включением режима отладки сценария. [Справка](http://test1c.com/api#debugstart)',
		Returns: undefined
	},
	environmentexists: {
		Name: 'EnvironmentExists',
		NameRu: 'СозданоОкружение',
		Params: [parameterInfo('ID', 'ИД', [Types.String])],
		Help: 'Проверяет наличие ранее созданного тестового окружения по переданному идентификатору. [Справка](http://test1c.com/api#environmentexists)',
		HelpRu: 'Проверяет наличие ранее созданного тестового окружения по переданному идентификатору. [Справка](http://test1c.com/api#environmentexists)',
		Returns: Types.Boolean
	},
	registerenvironment: {
		Name: 'RegisterEnvironment',
		NameRu: 'СохранитьОкружение',
		Params: [parameterInfo('ID', 'ИД', [Types.String])],
		Help: 'Сохраняет идентификатор тестового окружения во внутренней базе Тестера. [Справка](http://test1c.com/api#registerenvironment)',
		HelpRu: 'Сохраняет идентификатор тестового окружения во внутренней базе Тестера. [Справка](http://test1c.com/api#registerenvironment)',
		Returns: undefined
	},
	vstudio: {
		Name: 'VStudio',
		NameRu: 'ВСтудию',
		Params: [parameterInfo('Text', 'Текст', [Types.String])],
		Help: 'Выводит сообщение в список сообщений Тестера, а также в панель Output текстового редактора Visual Studio Code. [Справка](http://test1c.com/api#vstudio)',
		HelpRu: 'Выводит сообщение в список сообщений Тестера, а также в панель Output текстового редактора Visual Studio Code. [Справка](http://test1c.com/api#vstudio)',
		Returns: undefined
	},
	screenshot: {
		Name: 'Screenshot',
		NameRu: 'Снимок',
		Params: [parameterInfo('Pattern', 'Заголовок', [Types.String]), parameterInfo('Compressed', 'Сжато', [Types.Boolean], '', '', 'undefined', 'неопределено')],
		Help: 'Возвращает скриншот тестируемого приложения. [Справка](http://test1c.com/api#screenshot)',
		HelpRu: 'Возвращает скриншот тестируемого приложения. [Справка](http://test1c.com/api#screenshot)',
		Returns: Types.BinaryData
	},
	gotoconsole: {
		Name: 'GotoConsole',
		NameRu: 'ПерейтиВКонсоль',
		Params: [],
		Help: 'Перенаправляет RDP-сессию в основную консоль сервера. [Справка](http://test1c.com/api#gotoconsole)',
		HelpRu: 'Перенаправляет RDP-сессию в основную консоль сервера. [Справка](http://test1c.com/api#gotoconsole)',
		Returns: undefined
	},
	assert: {
		Name: 'Assert',
		NameRu: 'Заявить',
		Params: [parameterInfo('What', 'Что', [Types.Any]), parameterInfo('Details', 'Детали', [Types.String], '', '', '""', '""')],
		Help: 'Метод для работы с библиотекой текучих выражений по тестированию значений. [Справка](http://test1c.com/api#assert)',
		HelpRu: 'Метод для работы с библиотекой текучих выражений по тестированию значений. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	},
	progressshow: {
		Name: 'ProgressShow',
		NameRu: 'ПрогрессПоказать',
		Params: [],
		Help: 'Отображает окно с индикатором прогресса выполнения сценария. [Справка](http://test1c.com/api#progressshow)',
		HelpRu: 'Отображает окно с индикатором прогресса выполнения сценария. [Справка](http://test1c.com/api#progressshow)',
		Returns: undefined
	},
	progresshide: {
		Name: 'ProgressHide',
		NameRu: 'ПрогрессСкрыть',
		Params: [],
		Help: 'Скрывает окно с индикатором прогресса выполнения сценария. [Справка](http://test1c.com/api#progresshide)',
		HelpRu: 'Скрывает окно с индикатором прогресса выполнения сценария. [Справка](http://test1c.com/api#progresshide)',
		Returns: undefined
	},
	recorderstart: {
		Name: 'RecorderStart',
		NameRu: 'ХронографСтарт',
		Params: [],
		Help: 'Включает запись хода выполнения сценария. [Справка](http://test1c.com/api#recorderstart)',
		HelpRu: 'Включает запись хода выполнения сценария. [Справка](http://test1c.com/api#recorderstart)',
		Returns: undefined
	},
	recorderstop: {
		Name: 'RecorderStop',
		NameRu: 'ХронографСтоп',
		Params: [],
		Help: 'Выключает запись хода выполнения сценария. [Справка](http://test1c.com/api#recorderstop)',
		HelpRu: 'Выключает запись хода выполнения сценария. [Справка](http://test1c.com/api#recorderstop)',
		Returns: undefined
	},
	recorderclean: {
		Name: 'RecorderClean',
		NameRu: 'ХронографОчистить',
		Params: [StandardParameters.Scenario, parameterInfo('DateTo', 'ПоДату', [Types.Date]), StandardParameters.Session],
		Help: 'Очищает хронограф системы. [Справка](http://test1c.com/api#recorderclean)',
		HelpRu: 'Очищает хронограф системы. [Справка](http://test1c.com/api#recorderclean)',
		Returns: undefined
	},
	systemvariable: {
		Name: 'SystemVariable',
		NameRu: 'ПеременнаяСреды',
		Params: [parameterInfo('Name', 'Имя', [Types.String])],
		Help: 'Функция возвращает значение параметра системного окружения. [Справка](http://test1c.com/api#systemvariable)',
		HelpRu: 'Функция возвращает значение параметра системного окружения. [Справка](http://test1c.com/api#systemvariable)',
		Returns: Types.String
	},
	maximizewindow: {
		Name: 'MaximizeWindow',
		NameRu: 'МаксимизироватьОкно',
		Params: [parameterInfo('Pattern', 'Заголовок', [Types.String])],
		Help: 'Разворачивает окно приложения по переданному заголовку. [Справка](http://test1c.com/api#maximizewindow)',
		HelpRu: 'Разворачивает окно приложения по переданному заголовку. [Справка](http://test1c.com/api#maximizewindow)',
		Returns: undefined
	},
	minimizewindow: {
		Name: 'MinimizeWindow',
		NameRu: 'МинимизироватьОкно',
		Params: [parameterInfo('Pattern', 'Заголовок', [Types.String])],
		Help: 'Сворачивает окно приложения по переданному заголовку. [Справка](http://test1c.com/api#minimizewindow)',
		HelpRu: 'Сворачивает окно приложения по переданному заголовку. [Справка](http://test1c.com/api#minimizewindow)',
		Returns: undefined
	},
	runtest: {
		Name: 'RunTest',
		NameRu: 'ЗапуститьТест',
		Params: [parameterInfo('Scenario', 'Сценарий', [Types.String]), parameterInfo('Application', 'Приложение', [Types.String], '', '', 'undefined', 'неопределено'), parameterInfo('IgnoreLocking', 'ИгнорироватьЗахваченные', [Types.Boolean], '', '', 'false', 'ложь')],
		Help: 'Запускает на выполнение сценарий, как если бы пользователь вручную запустил выбранный сценарий в дереве сценариев. [Справка](http://test1c.com/api#runtest)',
		HelpRu: 'Запускает на выполнение сценарий, как если бы пользователь вручную запустил выбранный сценарий в дереве сценариев. [Справка](http://test1c.com/api#runtest)',
		Returns: undefined
	},
	storescenarios: {
		Name: 'StoreScenarios',
		NameRu: 'ПоместитьСценарии',
		Params: [parameterInfo('Memo', 'Комментарий', [Types.String], '', '', '""', '""')],
		Help: 'Процедура производит помещение всех захваченных текущим пользователем сценариев. [Справка](http://test1c.com/api#storescenarios)',
		HelpRu: 'Процедура производит помещение всех захваченных текущим пользователем сценариев. [Справка](http://test1c.com/api#storescenarios)',
		Returns: undefined
	}
}

const MethodsRu = {
	подключить: Methods.connect,
	отключить: Methods.disconnect,
	закрытьвсе: Methods.closeall,
	получить: Methods.get,
	очистить: Methods.clear,
	взять: Methods.fetch,
	установить: Methods.set,
	ввести: Methods.put,
	подобрать: Methods.pick,
	фокус: Methods.activate,
	нажать: Methods.click,
	вызвать: Methods.call,
	позвать: Methods.run,
	меню: Methods.openmenu,
	коммандос: Methods.commando,
	здесь: Methods.with,
	выбрать: Methods.choose,
	проверить: Methods.check,
	проверитьтаблицу: Methods.checktable,
	проверитьстатус: Methods.checkstate,
	проверитьшаблон: Methods.checktemplate,
	проверитьошибки: Methods.checkerrors,
	получитьсообщения: Methods.getmessages,
	найтисообщения: Methods.findmessages,
	стоп: Methods.stop,
	закрыть: Methods.close,
	дождаться: Methods.waiting,
	получитьокно: Methods.getwindow,
	найтиформу: Methods.findform,
	получитьссылки: Methods.getlinks,
	пауза: Methods.pause,
	текущаявкладка: Methods.currenttab,
	далее: Methods.next,
	кстроке: Methods.gotorow,
	вызватьсервер: Methods.callserver,
	запуститьсервер: Methods.runserver,
	записатьошибку: Methods.logerror,
	мояверсия: Methods.myversion,
	отладкастарт: Methods.debugstart,
	созданоокружение: Methods.environmentexists,
	сохранитьокружение: Methods.registerenvironment,
	встудию: Methods.vstudio,
	установитьприложение: Methods.pinapplication,
	установитьверсию: Methods.setversion,
	cнимок: Methods.screenshot,
	перейтивконсоль: Methods.gotoconsole,
	заявить: Methods.assert,
	хронографстарт: Methods.recorderstart,
	хронографстоп: Methods.recorderstop,
	хронографочистить: Methods.recorderclean,
	прогресспоказать: Methods.progressshow,
	прогрессскрыть: Methods.progresshide,
	переменнаясреды: Methods.systemvariable,
	максимизироватьокно: Methods.maximizewindow,
	минимизироватьокно: Methods.minimizewindow,
	запуститьтест: Methods.runtest
}

const FluentMethods = {
	istrue: {
		Name: 'IsTrue',
		NameRu: 'ЭтоИстина',
		Params: [],
		HelpRu: 'Проверяет, что значение Истина. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	},
	isfalse: {
		Name: 'IsFalse',
		NameRu: 'ЭтоЛожь',
		Params: [],
		HelpRu: 'Проверяет, что значение Ложь. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	},
	equal: {
		Name: 'Equal',
		NameRu: 'Равно',
		Params: [StandardParameters.Any],
		HelpRu: 'Проверяет, что значение равно переданному параметру. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	},
	notequal: {
		Name: 'NotEqual',
		NameRu: 'НеРавно',
		Params: [StandardParameters.Any],
		HelpRu: 'Проверяет, что значение не равно переданному параметру. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	},
	greater: {
		Name: 'Greater',
		NameRu: 'Больше',
		Params: [StandardParameters.Any],
		HelpRu: 'Проверяет, что значение больше переданного параметра. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	},
	greaterorequal: {
		Name: 'GreaterOrEqual',
		NameRu: 'БольшеИлиРавно',
		Params: [StandardParameters.Any],
		HelpRu: 'Проверяет, что значение больше или равно переданного параметра. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	},
	less: {
		Name: 'Less',
		NameRu: 'Меньше',
		Params: [StandardParameters.Any],
		HelpRu: 'Проверяет, что значение меньше переданного параметра. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	},
	lessorequal: {
		Name: 'LessOrEqual',
		NameRu: 'МеньшеИлиРавно',
		Params: [StandardParameters.Any],
		HelpRu: 'Проверяет, что значение меньше или равно переданного параметра. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	},
	filled: {
		Name: 'Filled',
		NameRu: 'Заполнено',
		Params: [],
		HelpRu: 'Проверка заполненности значения. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	},
	empty: {
		Name: 'Empty',
		NameRu: 'Пусто',
		Params: [],
		HelpRu: 'Проверяет, что значение пустое. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	},
	exists: {
		Name: 'Exists',
		NameRu: 'Существует',
		Params: [],
		HelpRu: 'Проверяет, что значение не является Неопределено и не Null. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	},
	isnull: {
		Name: 'IsNull',
		NameRu: 'ЭтоNull',
		Params: [],
		HelpRu: 'Проверка на Null. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	},
	isundefined: {
		Name: 'IsUndefined',
		NameRu: 'ЭтоНеопределено',
		Params: [],
		HelpRu: 'Проверка на Неопределено. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	},
	between: {
		Name: 'Between',
		NameRu: 'Между',
		Params: [parameterInfo('Start', 'Старт', [Types.Number, Types.Date]), parameterInfo('Finish', 'Финиш', [Types.Number, Types.Date])],
		HelpRu: 'Проверка на вхождение значения в диапазон. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	},
	contains: {
		Name: 'Contains',
		NameRu: 'Содержит',
		Params: [StandardParameters.Any],
		HelpRu: 'Проверяет, что переданное значение находится в исходном объекте. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	},
	has: {
		Name: 'Has',
		NameRu: 'Вмещает',
		Params: [parameterInfo('Size', 'Размер', [Types.Number])],
		HelpRu: 'Проверяет переданное значение на длину или размер. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	},
	not_: {
		Name: 'Not_',
		NameRu: 'Не_',
		Params: [],
		HelpRu: 'Метод-префикс для реверса следующего за ним условия. [Справка](http://test1c.com/api#assert)',
		Returns: undefined
	}
}

const FluentMethodsRu = {
	этоистина: FluentMethods.istrue,
	этоложь: FluentMethods.isfalse,
	равно: FluentMethods.equal,
	неравно: FluentMethods.notequal,
	больше: FluentMethods.greater,
	большеилиравно: FluentMethods.greaterorequal,
	меньше: FluentMethods.less,
	меньшеилиравно: FluentMethods.lessorequal,
	заполнено: FluentMethods.filled,
	пусто: FluentMethods.empty,
	существует: FluentMethods.exists,
	этоnull: FluentMethods.isnull,
	этонеопределено: FluentMethods.isundefined,
	между: FluentMethods.between,
	содержит: FluentMethods.contains,
	вмещает: FluentMethods.has,
	не_: FluentMethods.not_
}

const Languages = {
	English: 0,
	Russian: 1
}

const FileExtensions = {
	Scenario: 'bsl',
	Template: 'mxl'
}

const FolderPrefix = ".dir";

exports.Types = Types;
exports.Languages = Languages;
exports.Commands = Commands;
exports.Methods = Methods;
exports.MethodsRu = MethodsRu;
exports.FluentMethods = FluentMethods;
exports.FluentMethodsRu = FluentMethodsRu;
exports.FileExtensions = FileExtensions;
exports.FolderPrefix = FolderPrefix;