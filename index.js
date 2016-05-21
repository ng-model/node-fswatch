var fs = require('fs');
var filePath = 'C:/Users/Slave/Documents/calc/testing.txt';
var file = fs.readFileSync(filePath);
console.log('Initial File content : ' + file);

fs.watch(filePath, function() {
    console.log('File Changed ...');
    file = fs.readFileSync(filePath);
    console.log('File content at : ' + new Date() + ' is \n' + file);
});