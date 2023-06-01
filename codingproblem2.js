// What is happening in the following code snippet?  Assume the following:

// first.txt exists in the content folder and contains: “Hello, I am the first file”.

// second.txt exists in the content folder and contains: “Hello, I am the second file”.

// Code: 
const {readFile, writeFile} = require('fs');
// importing the readFile and writeFile functions from the fs module using destructuring assignment.
console.log('start');
// code then logs 'start' to the console
readFile('./content/first.txt','utf8', (err, result)=> { //readFile function is called to read the contents of the file
    //'./content/first.txt'. It takes three arguments: the file path, the encoding (in this case, 'utf8'), and a callback function that will be executed when the operation is complete
    //In the callback function for readFile, an error is checked. If an error occurred during the file read operation, it is logged to the console, and the execution is stopped using the return statement
   if (err) {
       console.log(err);
       return 
   }//If no error occurred, the result contains the content of the file, and it is assigned to the first variable. The content is then logged to the console
   //The code proceeds to read the contents of the file './content/second.txt' using another readFile operation, similar to the previous step
   const first = result;
   console.log(result);
   //Inside the callback function for the second readFile operation, an error is checked. If there is an error, it is logged to the console, and the execution is stopped
   readFile('./content/second.txt','utf8', (err, result)=> {
    //If no error occurred, the result contains the content of the second file, and it is assigned to the second variable. The content is then logged to the console
       if (err) {
           console.log(err);
           return 
       }
       const second = result;
       console.log(result);
       //After that, the writeFile function is called to write the result to a new file named './content/result-async.txt'. It takes four arguments: the file path, the data to be written, the encoding, and a callback function that will be executed when the operation is complete
       //In the callback function for writeFile, an error is checked. If there is an error, it is logged to the console, and the execution is stopped.
       writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,(err, result) => {
        //If no error occurred, the code logs 'done with the task' to the console, indicating that the file write operation is completed
           if (err) {
               console.log(err);
               return 
           }
           console.log('done with the task');
       }
       );
   })
});
//Finally, 'starting next task' is logged to the console
console.log('starting next task');



