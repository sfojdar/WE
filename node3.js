const fs = require('fs');
fs.readFile('file.txt', 'utf-8', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data.toString());
});
const data = "This is the new content of the file.";
fs.writeFile('file.txt', data, (err) => {
    if(err) {
        throw err;
    }
    console.log("Data has been written to file successfully.");
});