const fs = require('fs');

var data ="NewFileContents";


const data=fs.readFileSync('./assets/index.html',
{encoding:'utf8',flag:'r'});

console.log(data);