const fs = require('fs');
const chai = require('chai');
global.expect = chai.expect;

let rps = fs.readFileSync('./src/js/roshambo.js');
eval( rps + `\nexports.Roshambo = Roshambo;`)