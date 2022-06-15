const fs = require('fs');
fs.readFile('file.txt', 'utf-8', (err, data) => {
    if(err) {
        throw err;
    }
    console.log(data.toString());
});
fs.unlink(__dirname+"/file.txt",(error)=>{
    if (error) throw error
    console.log("File deleted")
});