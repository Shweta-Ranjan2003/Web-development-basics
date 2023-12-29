// The code which runs via line by line execution is known as synchronous or blocking code. 
//It means the line of code written first, will be executed first. On the other hand, 
//a block of code where line by line execution is not guaranteed is known as asynchronous or non-blocking code. 
//These types of codes accept a call-back function.

// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire
// - non-blocking because it does not allow the code to block the user. 

const fs = require("fs");
fs.readFile("dele.txt", "utf-8", (err, data)=>{ //a is null and b is the content of the file. 
                                                //Or a can be called error and b can be called as the data
    console.log(data);
});
//In Asynchronous function by the time the code is reading the file , next block of code is executed and when
//the reading is completed the call-back function is fired.
//It does not mean that the code is not executed line by line. 
//The code is executed synchronously but the output we get depends upon the time taken while reading the file
console.log("This is a message");
