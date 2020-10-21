var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.docx', 'Hello dari Petanikode!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});