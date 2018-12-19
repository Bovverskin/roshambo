const fs = require('fs');
const chai = require('chai');
global.expect = chai.expect;

let roshambo = fs.readFileSync('./src/js/roshambo.js');
eval( roshambo + `\nexports.Roshambo = Roshambo;`)