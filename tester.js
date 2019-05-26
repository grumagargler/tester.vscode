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
	}
}

const StandardParameters = {
	Field: parameterInfo('Field', 'Поле', [Types.Field]),
	Source: parameterInfo('Source', 'Источник', [Types.Form, Types.Table], '', '', 'undefined', 'неопределено'),
	Value: parameterInfo('Value', 'Значение', [Types.String, Types.Number, Types.Date]),
	Form: parameterInfo('Form', 'Форма', [Types.Form]),
	Table: parameterInfo('Table', 'Таблица', [Types.Table]),
	Type: parameterInfo('Type', 'Тип', [Types.Type], '', '', 'undefined', 'неопределено')
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
		Params: [parameterInfo('ClearErrors', 'ОчищатьОшибки', [Types.Boolean], '', '', 'true', 'истина'), parameterInfo('Post', 'Порт', [Types.Number], '', '', '0', '0')],
		HelpRu: 'Производит подключение Тестера к тестируемому приложению. Настройки подключения указываются в справочнике Приложения. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Connect)',
		Returns: undefined
	},
	disconnect: {
		Name: 'Disconnect',
		NameRu: 'Отключить',
		Params: [parameterInfo('Close', 'Закрыть', [Types.Boolean], '', '', 'false', 'ложь'), parameterInfo('ShutdownProxy', 'ТушитьПрокси', [Types.Boolean], '', '', 'false', 'ложь')],
		Help: 'Производит отключение от тестируемого приложения. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Disconnect)',
		HelpRu: 'Производит отключение от тестируемого приложения. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Disconnect)',
		Returns: undefined
	},
	closeall: {
		Name: 'CloseAll',
		NameRu: 'ЗакрытьВсе',
		Params: [],
		Help: 'Закрывает все окна в тестируемом приложении. Если есть окна с несохраненными данными, Тестер будет пытаться ответить Нет на возникающие вопросы системы. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.CloseAll)',
		HelpRu: 'Закрывает все окна в тестируемом приложении. Если есть окна с несохраненными данными, Тестер будет пытаться ответить Нет на возникающие вопросы системы. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.CloseAll)',
		Returns: undefined
	},
	call: {
		Name: 'Call',
		NameRu: 'Вызвать',
		Params: [parameterInfo('Scenario', 'Сценарий', [Types.String]), parameterInfo('Params', 'Параметры', [Types.Any], '', '', 'undefined', 'неопределено'), parameterInfo('Application', 'Приложение', [Types.String], '', '', 'undefined', 'неопределено')],
		Help: 'Выполняет запуск сценария по переданным пути и параметрам. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Run)',
		HelpRu: 'Выполняет запуск сценария по переданным пути и параметрам. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Run)',
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
		Help: 'Выполняет запуск сценария в текущей папке сценариев. Метод аналогичен методу Вызвать, с той разницей, что поиск сценария будет производиться начиная с папки, где находится вызывающий сценарий. Таким образом, метод Позвать является краткой записью метода Вызвать. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Run)',
		HelpRu: 'Выполняет запуск сценария в текущей папке сценариев. Метод аналогичен методу Вызвать, с той разницей, что поиск сценария будет производиться начиная с папки, где находится вызывающий сценарий. Таким образом, метод Позвать является краткой записью метода Вызвать. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Run)',
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
		Help: 'Открывает ссылку на объект в глобальном командном интерфейсе. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.OpenMenu)',
		HelpRu: 'Открывает ссылку на объект в глобальном командном интерфейсе. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.OpenMenu)',
		Returns: undefined
	},
	commando: {
		Name: 'Commando',
		NameRu: 'Коммандос',
		Params: [parameterInfo('Action', 'Команда', [Types.Action], '')],
		Help: 'Выполняет навигационную команду системы по переданному строковому параметру. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Commando)',
		HelpRu: 'Выполняет навигационную команду системы по переданному строковому параметру. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Commando)',
		Returns: undefined
	},
	with: {
		Name: 'With',
		NameRu: 'Здесь',
		Params: [StandardParameters.Form, parameterInfo('Activate', 'Активировать', [Types.Boolean], '', '', 'false', 'ложь')],
		Help: 'Определяет значение глобальной переменной ТекущийОбъект согласно найденного визуального объекта. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.With)',
		HelpRu: 'Определяет значение глобальной переменной ТекущийОбъект согласно найденного визуального объекта. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.With)',
		Returns: Types.TestedObject
	},
	get: {
		Name: 'Get',
		NameRu: 'Получить',
		Params: [parameterInfo('Name', 'Имя', [Types.Window, Types.Button, Types.CommandBar, Types.ContextMenu, Types.Decoration, Types.Field, Types.Group, Types.InterfaceButton, Types.InterfaceGroup, Types.Table]), StandardParameters.Source, StandardParameters.Type],
		Help: 'Возвращает тестируемый объект. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Get)',
		HelpRu: 'Возвращает тестируемый объект. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Get)',
		Returns: Types.TestedObject
	},
	clear: {
		Name: 'Clear',
		NameRu: 'Очистить',
		Params: [StandardParameters.Field, StandardParameters.Source, StandardParameters.Type],
		Help: 'Очищает поле. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Clear)',
		HelpRu: 'Очищает поле. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Clear)',
		Returns: Types.TestedObject
	},
	fetch: {
		Name: 'Fetch',
		NameRu: 'Взять',
		Params: [StandardParameters.Field, StandardParameters.Source, StandardParameters.Type],
		Help: 'Возвращает строковое представление значения объекта. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Fetch)',
		HelpRu: 'Возвращает строковое представление значения объекта. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Fetch)',
		Returns: Types.Value
	},
	set: {
		Name: 'Set',
		NameRu: 'Установить',
		Params: [StandardParameters.Field, StandardParameters.Value, StandardParameters.Source, StandardParameters.Type],
		Help: 'Активирует и устанавливает значение в поле. Если тип поля Переключатель тогда метод ВыбратьВариант будет использован. В остальных случаях ВвестиТекст (речь идет о методах платформы 1С по работе с тестовым приложением). [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Set)',
		HelpRu: 'Активирует и устанавливает значение в поле. Если тип поля Переключатель тогда метод ВыбратьВариант будет использован. В остальных случаях ВвестиТекст (речь идет о методах платформы 1С по работе с тестовым приложением). [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Set)',
		Returns: Types.TestedObject
	},
	put: {
		Name: 'Put',
		NameRu: 'Ввести',
		Params: [StandardParameters.Field, StandardParameters.Value, StandardParameters.Source, StandardParameters.Type, parameterInfo('TestValue', 'ПроверитьЗначение', [Types.Boolean], '', '', 'false', 'ложь')],
		Help: 'Метод работает аналогично методу Установить (см. выше) с той разницей, что для ссылочных значений, этот метод будет ждать выпадающего списка предлагаемых платформой значений и выбирать первое значение из этого списка. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Put)',
		HelpRu: 'Метод работает аналогично методу Установить (см. выше) с той разницей, что для ссылочных значений, этот метод будет ждать выпадающего списка предлагаемых платформой значений и выбирать первое значение из этого списка. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Put)',
		Returns: Types.TestedObject
	},
	pick: {
		Name: 'Pick',
		NameRu: 'Подобрать',
		Params: [StandardParameters.Field, StandardParameters.Value, StandardParameters.Source, StandardParameters.Type],
		Help: 'Производит выбор значения из списка выбора. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Pick)',
		HelpRu: 'Производит выбор значения из списка выбора. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Pick)',
		Returns: Types.TestedObject
	},
	activate: {
		Name: 'Activate',
		NameRu: 'Фокус',
		Params: [parameterInfo('Name', 'Имя', [Types.Button, Types.CommandBar, Types.Decoration, Types.Field, Types.Form, Types.Group, Types.Table, Types.Window]), StandardParameters.Source, StandardParameters.Type],
		Help: 'Активирует поле. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Activate)',
		HelpRu: 'Активирует поле. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Activate)',
		Returns: Types.TestedObject
	},
	click: {
		Name: 'Click',
		NameRu: 'Нажать',
		Params: [parameterInfo('Name', 'Имя', [Types.Button, Types.Decoration, Types.Field, Types.InterfaceButton]), StandardParameters.Source, StandardParameters.Type],
		Help: 'Активирует и нажимает на поле. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Click)',
		HelpRu: 'Активирует и нажимает на поле. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Click)',
		Returns: Types.TestedObject
	},
	choose: {
		Name: 'Choose',
		NameRu: 'Выбрать',
		Params: [StandardParameters.Field, StandardParameters.Source, StandardParameters.Type],
		Help: 'Начинает процесс выбора значения в поле ввода. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Choose)',
		HelpRu: 'Начинает процесс выбора значения в поле ввода. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Choose)',
		Returns: Types.TestedObject
	},
	check: {
		Name: 'Check',
		NameRu: 'Проверить',
		Params: [StandardParameters.Field, StandardParameters.Value, StandardParameters.Source, StandardParameters.Type],
		Help: 'Сравнивает значение поля с переданным значением. Если значения не совпадают, будет вызвано исключение. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Check)',
		HelpRu: 'Сравнивает значение поля с переданным значением. Если значения не совпадают, будет вызвано исключение. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Check)',
		Returns: undefined
	},
	checkstate: {
		Name: 'CheckState',
		NameRu: 'ПроверитьСтатус',
		Params: [parameterInfo('Name', 'Имя', [Types.Button, Types.CommandBar, Types.Decoration, Types.Field, Types.Group, Types.InterfaceButton, Types.InterfaceGroup, Types.Table]), parameterInfo('Value', 'Значение', [Types.String]), parameterInfo('Name', 'Имя', [Types.Boolean], '', '', 'true', 'истина'), StandardParameters.Source, StandardParameters.Type],
		Help: 'Проверяет оформление поля. Если оформление не совпадает с ожидаемым, будет вызвано исключение. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.CheckState)',
		HelpRu: 'Проверяет оформление поля. Если оформление не совпадает с ожидаемым, будет вызвано исключение. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.CheckState)',
		Returns: undefined
	},
	checktemplate: {
		Name: 'CheckTemplate',
		NameRu: 'ПроверитьШаблон',
		Params: [StandardParameters.Field, StandardParameters.Source, StandardParameters.Type, parameterInfo('Template', 'Шаблон', [Types.Field], '', '', 'undefined', 'неопределено')],
		Help: 'Проверяет табличный документ. Исходный табличный документ, с которым будет проводиться сверка, должен быть заранее сохранен в форме самого сценария, на вкладке Шаблон. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.CheckTemplate)',
		HelpRu: 'Проверяет табличный документ. Исходный табличный документ, с которым будет проводиться сверка, должен быть заранее сохранен в форме самого сценария, на вкладке Шаблон. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.CheckTemplate)',
		Returns: undefined
	},
	checkerrors: {
		Name: 'CheckErrors',
		NameRu: 'ПроверитьОшибки',
		Params: [],
		Help: 'Проверяет наличие сообщений. Если сообщения есть, Тестер выкинет исключение. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.CheckErrors)',
		HelpRu: 'Проверяет наличие сообщений. Если сообщения есть, Тестер выкинет исключение. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.CheckErrors)',
		Returns: undefined
	},
	getmessages: {
		Name: 'GetMessages',
		NameRu: 'ПолучитьСообщения',
		Params: [],
		Help: 'Возвращает фиксированный массив сообщений активного окна. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.GetMessages)',
		HelpRu: 'Возвращает фиксированный массив сообщений активного окна. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.GetMessages)',
		Returns: Types.Array
	},
	findmessages: {
		Name: 'FindMessages',
		NameRu: 'НайтиСообщения',
		Params: [parameterInfo('Template', 'Шаблон', [Types.String])],
		Help: 'Возвращает массив найденных сообщений. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.FindMessages)',
		HelpRu: 'Возвращает массив найденных сообщений. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.FindMessages)',
		Returns: Types.Array
	},
	stop: {
		Name: 'Stop',
		NameRu: 'Стоп',
		Params: [parameterInfo('Reason', 'Причина', [Types.String], '', '', 'undefined', 'неопределено')],
		Help: 'Завершает выполнение сценария. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Stop)',
		HelpRu: 'Завершает выполнение сценария. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Stop)',
		Returns: undefined
	},
	pinapplication: {
		Name: 'PinApplication',
		NameRu: 'УстановитьПриложение',
		Params: [parameterInfo('Name', 'Имя', [Types.String])],
		Help: 'Устанавливает в тестируемом окружении текущее приложение. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.PinApplication)',
		HelpRu: 'Устанавливает в тестируемом окружении текущее приложение. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.PinApplication)',
		Returns: undefined
	},
	setversion: {
		Name: 'SetVersion',
		NameRu: 'УстановитьВерсию',
		Params: [parameterInfo('Application', 'Приложение', [Types.String]), parameterInfo('Version', 'Версия', [Types.String])],
		Help: 'Устанавливает текущую версию приложения. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.SetVersion)',
		HelpRu: 'Устанавливает текущую версию приложения. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.SetVersion)',
		Returns: undefined
	},
	waiting: {
		Name: 'Waiting',
		NameRu: 'Дождаться',
		Params: [StandardParameters.Form, parameterInfo('Timeout', 'Таймаут', [Types.Number], '', '', '3', '3'), StandardParameters.Type],
		Help: 'Приостанавливает выполнение сценария до появления запрошенного объекта, например - окна. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Waiting)',
		HelpRu: 'Приостанавливает выполнение сценария до появления запрошенного объекта, например - окна. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Waiting)',
		Returns: Types.Boolean
	},
	pause: {
		Name: 'Pause',
		NameRu: 'Пауза',
		Params: [parameterInfo('Seconds', 'Секунд', [Types.Number])],
		Help: 'Останавливает процесс выполнения сценария на заданное число секунд. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Pause)',
		HelpRu: 'Останавливает процесс выполнения сценария на заданное число секунд. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Pause)',
		Returns: undefined
	},
	next: {
		Name: 'Next',
		NameRu: 'Далее',
		Params: [],
		Help: 'Выполняет переход к следующему, согласно расположения элементов, полю. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Next)',
		HelpRu: 'Выполняет переход к следующему, согласно расположения элементов, полю. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Next)',
		Returns: undefined
	},
	close: {
		Name: 'Close',
		NameRu: 'Закрыть',
		Params: [StandardParameters.Form],
		Help: 'Закрывает форму. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Close)',
		HelpRu: 'Закрывает форму. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Close)',
		Returns: undefined
	},
	getwindow: {
		Name: 'GetWindow',
		NameRu: 'ПолучитьОкно',
		Params: [StandardParameters.Form],
		Help: 'Возвращает объект типа ТестируемоеОкноКлиентскогоПриложения (TestedClientApplicationWindow) для переданной формы или текущий формы. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.GetWindow)',
		HelpRu: 'Возвращает объект типа ТестируемоеОкноКлиентскогоПриложения (TestedClientApplicationWindow) для переданной формы или текущий формы. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.GetWindow)',
		Returns: Types.Window
	},
	findform: {
		Name: 'FindForm',
		NameRu: 'НайтиФорму',
		Params: [parameterInfo('Name', 'Имя', [Types.String])],
		Help: 'Находит и возвращает форму по переданному заголовку. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.FindForm)',
		HelpRu: 'Находит и возвращает форму по переданному заголовку. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.FindForm)',
		Returns: Types.Form
	},
	getlinks: {
		Name: 'GetLinks',
		NameRu: 'ПолучитьСсылки',
		Params: [StandardParameters.Form],
		Help: 'Возвращает командный интерфейс формы. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.GetLinks)',
		HelpRu: 'Возвращает командный интерфейс формы. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.GetLinks)',
		Returns: Types.CommandInterface
	},
	currenttab: {
		Name: 'CurrentTab',
		NameRu: 'ТекущаяВкладка',
		Params: [parameterInfo('Name', 'Имя', [Types.Group]), StandardParameters.Source, StandardParameters.Type],
		Help: 'Возвращает текущую вкладку панели с вкладками. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.CurrentTab)',
		HelpRu: 'Возвращает текущую вкладку панели с вкладками. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.CurrentTab)',
		Returns: Types.Group
	},
	gotorow: {
		Name: 'GotoRow',
		NameRu: 'КСтроке',
		Params: [StandardParameters.Table, parameterInfo('Column', 'Колонка', [Types.String]), StandardParameters.Value, parameterInfo('FromStart', 'ИзНачала', [Types.Boolean]), StandardParameters.Source],
		Help: 'Производит переход к строке таблицы. Метод не предназначен для поиска строк, метод предназначен для навигации к нужной строке. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.GotoRow)',
		HelpRu: 'Производит переход к строке таблицы. Метод не предназначен для поиска строк, метод предназначен для навигации к нужной строке. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.GotoRow)',
		Returns: Types.Boolean
	},
	logerror: {
		Name: 'LogError',
		NameRu: 'ЗаписатьОшибку',
		Params: [parameterInfo('Text', 'Текст', [Types.String])],
		Help: 'Выполняет добавление сообщения в журнал ошибок из кода сценария без остановки выполнения сценария. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.LogError)',
		HelpRu: 'Выполняет добавление сообщения в журнал ошибок из кода сценария без остановки выполнения сценария. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.LogError)',
		Returns: undefined
	},
	myversion: {
		Name: 'MyVersion',
		NameRu: 'МояВерсия',
		Params: [parameterInfo('Expression', 'Выражение', [Types.String])],
		Help: 'Определяет текущую версию приложения, сравнивает с переданной в выражении и возвращает результат сравнения. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.MyVersion)',
		HelpRu: 'Определяет текущую версию приложения, сравнивает с переданной в выражении и возвращает результат сравнения. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.MyVersion)',
		Returns: Types.Boolean
	},
	debugstart: {
		Name: 'DebugStart',
		NameRu: 'ОтладкаСтарт',
		Params: [],
		Help: 'После выполнения данного метода, Тестер начнет пошаговое выполнение кода сценария. Фактически, данный метод является условным включением режима отладки сценария. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.DebugStart)',
		HelpRu: 'После выполнения данного метода, Тестер начнет пошаговое выполнение кода сценария. Фактически, данный метод является условным включением режима отладки сценария. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.DebugStart)',
		Returns: undefined
	},
	environmentexists: {
		Name: 'EnvironmentExists',
		NameRu: 'СозданоОкружение',
		Params: [parameterInfo('ID', 'ИД', [Types.String])],
		Help: 'Проверяет наличие ранее созданного тестового окружения по переданному идентификатору. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.EnvironmentExists)',
		HelpRu: 'Проверяет наличие ранее созданного тестового окружения по переданному идентификатору. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.EnvironmentExists)',
		Returns: Types.Boolean
	},
	registerenvironment: {
		Name: 'RegisterEnvironment',
		NameRu: 'СохранитьОкружение',
		Params: [parameterInfo('ID', 'ИД', [Types.String])],
		Help: 'Сохраняет идентификатор тестового окружения во внутренней базе Тестера. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.RegisterEnvironment)',
		HelpRu: 'Сохраняет идентификатор тестового окружения во внутренней базе Тестера. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.RegisterEnvironment)',
		Returns: undefined
	},
	vstudio: {
		Name: 'VStudio',
		NameRu: 'ВСтудию',
		Params: [parameterInfo('Text', 'Текст', [Types.String])],
		Help: 'Выводит сообщение в список сообщений Тестера, а также в панель Output текстового редактора Visual Studio Code. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.VStudio)',
		HelpRu: 'Выводит сообщение в список сообщений Тестера, а также в панель Output текстового редактора Visual Studio Code. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.VStudio)',
		Returns: undefined
	},
	screenshot: {
		Name: 'Screenshot',
		NameRu: 'Снимок',
		Params: [parameterInfo('Pattern', 'Заголовок', [Types.String]), parameterInfo('Compressed', 'Сжато', [Types.Boolean], '', '', 'undefined', 'неопределено')],
		Help: 'Возвращает скриншот тестируемого приложения. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Screenshot)',
		HelpRu: 'Возвращает скриншот тестируемого приложения. [Справка](https://apps.rdbcode.com/tester.help.ru/hs/Document?Link=ru.Functions.Screenshot)',
		Returns: Types.BinaryData
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
	cнимок: Methods.screenshot
}

const Languages = {
	English: 0,
	Russian: 1
}

const FileExtensions = {
	Scenario: 'bsl',
	Template: 'mxl'
}

exports.Types = Types;
exports.Languages = Languages;
exports.Commands = Commands;
exports.Methods = Methods;
exports.MethodsRu = MethodsRu;
exports.FileExtensions = FileExtensions;