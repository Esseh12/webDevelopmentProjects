// how to manipulate files using js

const fs = require('fs');

// reading files
fs.readFile('./docs/blog.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});

// writting files
//fs.writeFile('./docs/blog.txt', 'hello, world', () => {
    //console.log('file was written');
//});

// directories
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created');
});