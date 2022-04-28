//index.js
// console.log(average([3,4]))
// const average = require("./mod");
const mod = require("./mod");
console.log(mod.name) 
// console.log(mod.avg([3,4]))
console.log("This is index.js");


//mod.js
console.log("This is module");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
//const mod = require("./mod"); //to import this module
//console.log(mod.name)
//After executing this, one thing to notice is, the code gets executed but we still do not get the function back. 
//To get back the function, we have to make the function to behave explicitly in mod.js file.

//module.exports = average;
//const average = require("./mod");
//console.log(average([3,4]) //To get the average of any two numbers

// create an object and make it as a module
 module.exports = {
     avg: average,
     name: "Harry",
     repo: "GitHub"
 }
//We can call this module here like this
// const mod = require("./mod");
// console.log(mod.avg([3,4]))
module.exports.name = "Harry"; //another method to call the above object. If we write as follows in mod.js file-
//And call the object in the following way in index.js as follows-
//console.log(mod.name)
