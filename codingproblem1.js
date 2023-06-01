// What is happening in the following code snippet?  Assume the following:

// first.txt exists in the content folder and contains: “Hello, I am the first file”.

// second.txt exists in the content folder and contains: “Hello, I am the second file”.

// Code: 

const {readFileSync, writeFileSync} = require('fs');
// made variable that is calling readFileSync, writefileSync 
// then use require function used to include external module or files in node app
//in parenthesis its calling the file system functionality



const fs = require('fs');
// make the fs into a variable then call the variable with require functionality

const first = readFileSync('./content/first.txt','utf8')
// make a variable 
// readfilesync- to read content of file sync with node app
//in () you are trying to call first file
const second = readFileSync('./content/second.txt','utf8')
//make a variable to call your first file
// readfilesync- to read content of file sync with node app
//in () you are trying to call second file

console.log(first, second);
// console your variables

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`);
// function to write data into the file
// call the result sync file and show result of whats in first and second file
// temperal literal to call first and second files
writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`,{flag: 'a'});
// flag "a" used to specify the file open mode as "append"- meaning any data you write to the file will be appended to exisiting content, instead of overwriting
