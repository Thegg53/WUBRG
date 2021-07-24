const { getColor } = require('./apiMock');

const { error, help } = require('./messages');

const { White, Blue, Black, Red, Green } = require('./classes');

/*
// The way overkill solution, using classes and a "factory" function to create named classes from strings.
// On this simple case, we could just call the API with the input string, and then use the output results
// and save those in an object. 
// I dont like a gigantic if else (a switch would be preferred), but still, bazooka to kill a fly dynamic class names xD
*/
const colorClasses = { White, Blue, Black, Red, Green };

function dynamicColorClass (name) {
	return colorClasses[name];
}

async function getColors(colors, callback) {
	let aApiColorPromises = [];
	for (color of colors){
		let pAPIfetch = getColor(color.name);
		aApiColorPromises.push(pAPIfetch)
	}
	callback(aApiColorPromises);
}

function colors() {
	if (process.argv.length <= 2 || process.argv.length > 5){
		console.log(error);
		return
	}
	if (process.argv[2] == 'help' || process.argv[2] == '-h'){
		console.log(help);
		return;
	}


	let hexRgbBoth = 'both';
	if(process.argv[3] != undefined){
		if(process.argv[3] == 'hex'){
			hexRgbBoth = 'hex'
		} else if(process.argv[3] == 'rgb'){
			hexRgbBoth = 'rgb'
		} else if(process.argv[3] == 'both'){
			hexRgbBoth = 'both'
		} else {
			console.log(error);
			return;
		}
	}

	let bAsync = true;
	if(process.argv[4] != undefined){
		if(process.argv[4] == 'true'){
			bAsync = true;
		} else if(process.argv[4] == 'false'){
			bAsync = false;
		} else {
			console.log(error);
			return;
		}
	}

	const regExColors = /"?(white,|blue,|black,|red,|green,)*?(white|blue|black|red|green)"?/g;
	
	let sanitized = process.argv[2].replace(/\s+/g, '');
	let invalidInput = !regExColors.test(sanitized);
	if (invalidInput == true){
		console.log(error);
		return ;
	}
	const inputStringColors = sanitized.split(','); //should be an array of strings, regex should ensure it
	let aColorObj = [];
	for (color of inputStringColors){
		try { //just in case my regExp needs some tweaking
			let capitalized = color.charAt(0).toUpperCase() + color.slice(1);
			let colorClass = dynamicColorClass(capitalized);
			let colorObj = new colorClass();
			aColorObj.push(colorObj);
		}
		catch { // if it isnt a supported color, send the error message and exit
			console.log(error);
			return;
		}
		
	}
	

	getColors(aColorObj, async function (colors) {
		if(bAsync == true){ //default mode is async
			colors = await Promise.all(colors); 
			//we can use the return of the promises to set the properties of aColorObj if needed here
			var names = [];
			var hexColors = [];
			let rgbColors = [];
			colors.forEach(color => {
				color ? names.push(color.name) : null;
				color ? hexColors.push(color.HEX) : null;
				color ? rgbColors.push(color.RGB) : null
			})
			console.log('input: ', names)
			if (hexRgbBoth == "hex" || hexRgbBoth == "both" ){
				console.log(`hex colors: ${hexColors}`);
			}
			if (hexRgbBoth == "rgb" || hexRgbBoth == "both" ){
				console.log(`rgb colors: ${JSON.stringify(rgbColors)}`);
			} 
		} else {
			for (color of colors){
				await color.then(c => {  
					//we can use the return of the promises (1 by 1) to set the properties of fill aColorObj if needed here
					console.log(c.name)
					if (hexRgbBoth == "hex" || hexRgbBoth == "both" ){
						console.log(`hex color: ${c.HEX}`);
					}
					if (hexRgbBoth == "rgb" || hexRgbBoth == "both" ){
						console.log(`rgb colors: ${JSON.stringify(c.RGB)}`);
					} 
				})
			}
		}
	});
}

colors()