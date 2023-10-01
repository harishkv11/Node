const fs = require('fs')
// fs.writeFile('message.txt', 'Hello world', (err) => {
//     if(err) throw err;
//     console.log('File has been saved');
// });

fs.readFile('./file-system/message.txt', "utf-8", (err, data) => {
    if(err) throw err;
    console.log(data);
})