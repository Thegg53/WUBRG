class Color {
	constructor(name) {
		this.name = name
	}
	RGB = {};
	HEX = "";
}

class White extends Color {
	constructor() {
		super('white');
	}
}

class Blue extends Color {
	constructor() {
		super('blue');
	}
}

class Black extends Color {
	constructor() {
		super('black');
	}
}

class Red extends Color {
	constructor() {
		super('red');
	}
}

class Green extends Color {
	constructor() {
		super('green');
	}
}



module.exports = { White, Blue, Black, Red, Green };
