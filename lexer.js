const Tester = require('./tester');
const Languages = Tester.Languages;
const Methods = Tester.Methods;
const MethodsRu = Tester.MethodsRu;

exports.SourceCode = class SourceCode {
	static Position(Document, Position) {
		let column = Position.character;
		let row = Document.lineAt(Position).text.slice(0, column);
		let chars = this.classify(row);
		let tokens = this.tokenize(chars);
		let info = this.methodInfo(tokens, column);
		return extractMethod();

		function extractMethod() {
			if (!info) return;
			let name = row.slice(info.Method.Start, info.Method.End + 1).toLowerCase();
			let method = MethodsRu[name];
			let lang = Languages.Russian;
			if (!method) {
				method = Methods[name];
				lang = Languages.English;
			}
			if (method) return {
				Method: method,
				Parameter: info.Parameter,
				Lang: lang
			}
		}
	}

	static classify(Row) {
		let line = [];
		for (const char of Row) {
			let value = undefined;
			for (const type of Classifier) {
				if (type.Pattern.test(char)) {
					value = type.Value;
					break;
				}
			}
			if (!value) value = Lexicon.Text;
			line.push(value);
		}
		return line;
	}

	static tokenize(Chars) {
		let tokens = [];
		let lastElement;
		let currentToken;
		let stringEnds = -1;
		let i = 0;
		for (const char of Chars) {
			switch (char) {
				case Lexicon.Name:
					{
						if (lastElement === Lexicon.String ||
							lastElement === char) currentToken.End = i;
						else currentToken = newToken(char, i);
						break;
					}
				case Lexicon.Number:
					{
						if (lastElement === Lexicon.String ||
							lastElement === Lexicon.Name ||
							lastElement === char) currentToken.End = i;
						else currentToken = newToken(char, i);
						break;
					}
				case Lexicon.String:
					{
						if (lastElement === char) {
							currentToken.End = i;
							stringEnds = i;
						} else currentToken = newToken(char, i);
						break;
					}
				case Lexicon.Slash:
					{
						if (lastElement === Lexicon.String) currentToken.End = i;
						else if (lastElement === char) {
							currentToken.Element = Lexicon.Comment;
							currentToken.End = Chars.length - 1;
						} else currentToken = newToken(char, i);
						break;
					}
				default:
					{
						if (lastElement === Lexicon.String) currentToken.End = i;
						else currentToken = newToken(char, i);
						break;
					}
			}
			if (currentToken) {
				if (currentToken.Element === Lexicon.Comment) break;
				lastElement = stringEnds === i ? undefined : currentToken.Element;
			}
			i++;
		}
		return tokens;

		function newToken(Type, Index) {
			let token = {
				Element: Type,
				Start: Index,
				End: Index
			}
			tokens.push(token);
			return token;
		}
	}

	static methodInfo(Tokens, Column) {
		let candidate;
		let methods = [];
		for (const token of Tokens) {
			if (token.Start >= Column) break;
			switch (token.Element) {
				case Lexicon.Name:
					{
						candidate = token;
						break;
					}
				case Lexicon.Space:
					{
						break;
					}
				case Lexicon.BracketStart:
					{
						if (candidate) methods.push({
							Method: candidate,
							Parameter: 0,
							Tokens: [token]
						});
						break;
					}
				case Lexicon.BracketEnd:
					{
						methods.pop();
						break;
					}
				case Lexicon.Comma:
					{
						if (methods.length > 0) {
							let entry = methods[methods.length - 1];
							entry.Parameter++;
							entry.Tokens.push(token);
						}
						break;
					}
				default:
					candidate = undefined;
			}
		}
		return methods.length === 0 ? undefined : methods[methods.length - 1];
	}

	static MethodLanguage(Document, Position) {
		let line = Document.lineAt(Position).text.slice(0, Position.character);
		let result = /(^|\s|\(|\+|\-|\/|\%|\*|\,|\;)([_a-zA-Zа-яА-Я]+)$/.exec(line);
		if (!result) return;
		let method = result[2];
		if (/[а-яА-Я]/.test(method)) return Languages.Russian;
		else return Languages.English;
	}

	static Method(Document, Position) {
		let row = Document.lineAt(Position).text;
		let column = Position.character;
		let chars = this.classify(row);
		let tokens = this.tokenize(chars);
		let info = this.methodInfo(tokens, column);
		if (!info) return;
		return {
			MethodTokens: info,
			Tokens: tokens,
			Row: row,
			Method: extractMethod()
		};

		function extractMethod() {
			let name = row.slice(info.Method.Start, info.Method.End + 1).toLowerCase();
			let method = MethodsRu[name];
			let lang = Languages.Russian;
			if (!method) {
				method = Methods[name];
				lang = Languages.English;
			}
			if (method) return {
				Method: method,
				Parameter: info.Parameter,
				Lang: lang
			}
		}
	}
}

const Lexicon = {
	Name: 1,
	Text: 2,
	Comma: 3,
	BracketStart: 4,
	BracketEnd: 5,
	Number: 6,
	Space: 7,
	String: 8,
	Operator: 9,
	Slash: 10,
	Comment: 11
}

const Classifier = [{
		Pattern: /[_a-zA-Zа-яА-Я]/,
		Value: Lexicon.Name
	},
	{
		Pattern: /[0-9]/,
		Value: Lexicon.Number
	},
	{
		Pattern: /\s/,
		Value: Lexicon.Space
	},
	{
		Pattern: /,/,
		Value: Lexicon.Comma
	},
	{
		Pattern: /\"/,
		Value: Lexicon.String
	},
	{
		Pattern: /\(/,
		Value: Lexicon.BracketStart
	},
	{
		Pattern: /\)/,
		Value: Lexicon.BracketEnd
	},
	{
		Pattern: /[\+\-=<>%]/,
		Value: Lexicon.Operator
	},
	{
		Pattern: /\//,
		Value: Lexicon.Slash
	}
]

exports.Lexicon = Lexicon;