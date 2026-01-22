const fs = require('fs');
const path = require('path');

// const inputPath = path.resolve(__dirname, 'input.txt');
// const outputPath = path.resolve(__dirname, 'output.txt');

// const readStream = fs.createReadStream(inputPath);
// const writeStream = fs.createWriteStream(outputPath);

// readStream.pipe(writeStream);

// console.log('File copied successfully using streams');

const inputfilepath=path.join(__dirname,'input.txt');
const outputfilepath=path.join(__dirname,'output.txt');
const inputstream=fs.createReadStream(inputfilepath);
inputstream.on('data',(chunk)=>{
    console.log("Data is reading chunks",chunk);
});