var fs = require('fs');

fs.rename('mynewfile1.docx', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});