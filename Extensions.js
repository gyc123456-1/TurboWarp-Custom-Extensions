class StrictEqualityExtension {
	getInfo() {
		return {
			color1: '#11ccff',
			color2: '#0fb7e5',
			id: 'gycExtension',
			// change this if you make an actual extension!
			name: 'gyc的扩展',
			blocks: [{
				opcode: 'strictlyEquals',
				blockType: Scratch.BlockType.BOOLEAN,
				text: '[ONE] == [TWO]',
				arguments: {
					ONE: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: 'A'
					},
					TWO: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: 'a'
					}
				}
			},
			{
				opcode: 'tr',
				blockType: Scratch.BlockType.BOOLEAN,
				text: '真'
			},
			{
				opcode: 'fa',
				blockType: Scratch.BlockType.BOOLEAN,
				text: '假'
			},
			{
				opcode: 'n',
				blockType: Scratch.BlockType.REPORTER,
				text: '换行'
			},
			{
				opcode: 'sanyuyunshuan',
				blockType: Scratch.BlockType.REPORTER,
				text: '如果 [b] 返回 [ONE] 否则返回 [TWO]',
				arguments: {
					b: {
						type: Scratch.ArgumentType.BOOLEAN
					},
					ONE: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: 'true'
					},
					TWO: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: 'false'
					}
				}
			},
			{
				opcode: 'fromtoof',
				blockType: Scratch.BlockType.REPORTER,
				text: '截取 [str] 的 [a] 到 [b]的字符',
				arguments: {
					a: {
						type: Scratch.ArgumentType.NUMBER,
						defaultValue: 1
					},
					b: {
						type: Scratch.ArgumentType.NUMBER,
						defaultValue: 5
					},
					str: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: 'hello world!'
					}
				}
			},
			{
				opcode: 'upper',
				blockType: Scratch.BlockType.REPORTER,
				text: '大写 [str]',
				arguments: {
					str: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: 'hello world!'
					}
				}
			},
			{
				opcode: 'lower',
				blockType: Scratch.BlockType.REPORTER,
				text: '小写 [str]',
				arguments: {
					str: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: 'HELLO WORLD!'
					}
				}
			},
			{
				opcode: 'endtostart',
				blockType: Scratch.BlockType.REPORTER,
				text: '颠倒 [str]',
				arguments: {
					str: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: 'hello world!'
					}
				}
			},
			{
				opcode: 'texttocode',
				blockType: Scratch.BlockType.REPORTER,
				text: '[str] 的第 [i] 个字符转Unicode',
				arguments: {
					i: {
						type: Scratch.ArgumentType.NUMBER,
						defaultValue: 1
					},
					str: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: 'hello world!'
					}
				}
			},
			{
				opcode: 'codetotext',
				blockType: Scratch.BlockType.REPORTER,
				text: 'Unicode [code] 转字符',
				arguments: {
					code: {
						type: Scratch.ArgumentType.NUMBER,
						defaultValue: 65
					}
				}
			},
			{
				opcode: 'runcode',
				blockType: Scratch.BlockType.REPORTER,
				text: '运行JavaScript代码 [code]',
				arguments: {
					code: {
						type: Scratch.ArgumentType.STRING,
						defaultValue: "'abc'.split('')"
					}
				}
			},
			]
		};
	}
	strictlyEquals(args) {
		// Note strict equality: Inputs must match exactly: in type, case, etc.
		return args.ONE === args.TWO;
	}

	tr() {
		return true
	}

	fa() {
		return false
	}

	n() {
		return '\n'
	}
	
	sanyuyunshuan(args) {
		if (args.b) {
			return args.ONE
		} else {
			return args.TWO
		}
	}

	fromtoof(args) {
		return args.str.slice(args.a - 1, args.b)
	}

	upper(args) {
		return args.str.toUpperCase();
	}

	lower(args) {
		return args.str.toLowerCase();
	}

	endtostart(args) {
		return args.str.split('').reverse().join('');
	}

	texttocode(args) {
		return args.str.charCodeAt(args.i - 1);
	}

	codetotext(args) {
		return String.fromCharCode(args.code);
	}
	
	runcode(args) {
		return eval(args.code);
	}
}

class Fetch {
  getInfo () {
    return {
      id: 'fetch',
      name: 'Fetch',
      blocks: [
        {
          opcode: 'get',
          blockType: Scratch.BlockType.REPORTER,
          text: 'GET [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://extensions.turbowarp.org/hello.txt'
            }
          }
        }
      ]
    };
  }

  get (args) {
    return fetch(args.URL)
      .then(r => r.text())
      .catch(() => '');
  }
}

class Bitwise {
  getInfo() {
    return {
      id: "Bitwise",
      color1: '#2dc4c4',
      color2: '#2dc4b3',
      color3: '#29a395',
      blocks: [
        {
          opcode: 'bitwiseLeftShift',
          blockType: Scratch.BlockType.REPORTER,
          text: '[LEFT] << [RIGHT]',
          arguments: {
            LEFT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '2'
            },
            RIGHT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            }
          }
        },
        {
          opcode: 'bitwiseRightShift',
          blockType: Scratch.BlockType.REPORTER,
          text: '[LEFT] >> [RIGHT]',
          arguments: {
            LEFT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '2'
            },
            RIGHT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            }
          }
        },
        {
          opcode: 'bitwiseAnd',
          blockType: Scratch.BlockType.REPORTER,
          text: '[LEFT] & [RIGHT]',
          arguments: {
            LEFT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '3'
            },
            RIGHT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            }
          }
        },
        {
          opcode: 'bitwiseOr',
          blockType: Scratch.BlockType.REPORTER,
          text: '[LEFT] | [RIGHT]',
          arguments: {
            LEFT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            },
            RIGHT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0'
            }
          }
        },
        {
          opcode: 'bitwiseXor',
          blockType: Scratch.BlockType.REPORTER,
          text: '[LEFT] ^ [RIGHT]',
          arguments: {
            LEFT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            },
            RIGHT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            }
          }
        }
      ]
    };
  }

  bitwiseLeftShift({ LEFT, RIGHT }) {
    return LEFT << RIGHT;
  }

  bitwiseRightShift({ LEFT, RIGHT }) {
    return LEFT >> RIGHT;
  }

  bitwiseAnd({ LEFT, RIGHT }) {
    return LEFT & RIGHT;
  }

  bitwiseOr({ LEFT, RIGHT }) {
    return LEFT | RIGHT;
  }

  bitwiseXor({ LEFT, RIGHT }) {
    return LEFT ^ RIGHT;
  }
}


Scratch.extensions.register(new StrictEqualityExtension());
Scratch.extensions.register(new Fetch());
Scratch.extensions.register(new Bitwise());