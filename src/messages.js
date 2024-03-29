const error = `
Unsupported syntax. Try:  
    node ~/path/to/project/src/index.js help
or: 
    node ~/path/to/project/src/index.js -h
to see the documentation

EXAMPLE:
            node ~/path/to/project/srcindex.js "green,white,blue" 
                RETURNS -> ['#00ff00', '#ffffff', '#0000ff']`;

const help = `Help for index.js

    Mandatory arguments 
        COLORS: Write the colors that you want to fecth the RGB or Hex codes for
            in a single string, using " " , separated by commas. See an example below.
            The result of execution will be in the same order as the input string. 

        EXAMPLE:
            node ~/project/src/index.js "green,white,blue" 
                RETURNS -> 
                    input:  [ 'green', 'white', 'blue' ]
                    hex colors: #00ff00,#ffffff,#0000ff
                    rgb colors: [{"R":0,"G":255,"B":0},....
        
        (NOTE: the available colors are white, blue,black, red and green.
            Spaces not allowed.)


    OPTIONS:
        hexRgbBoth:  2nd parameter. Valid values: 'hex','rgb','both'. 
            Default 'hex'

        bAsync: 3rd parameter. Valid values: true, false. 
            Defaults to true (async execution). Choose false for sync execution

        EXAMPLE:
            node ~/project/src/index.js "green,white,blue" rgb false
`;

module.exports = { error, help};