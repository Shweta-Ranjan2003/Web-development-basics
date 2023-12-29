// The modules in Node.Js are the same as JavaScript libraries.
// These are the set of functions that we want to include in our application.
//eg of two modules is given below:-

const fs = require("fs");
let text = fs.readFileSync("text.txt","utf-8"); //The function readFileSync synchronously reads the entire contents of a file.
console.log(text);
text = text.replace("making" , "shweta");
console.log("writing new content in new file.....");
fs.writeFileSync("theory1.txt",text); //The writeFileSync() function is used to write the file.