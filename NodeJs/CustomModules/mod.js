console.log("This is module");

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
//After executing this, one thing to notice is, the code gets executed but we still do not get the function back. 
//To get back the function, we have to make the function to behave explicitly in mod.js file.
// module.exports = average;



// create an object and make it as a module
  module.exports = {
      avg: average,
      name: "Harry",
      repo: "GitHub"
  }

 module.exports.name = "Harry"; //another method to call the above object. If we write as follows in mod.js file-
//And call the object in the following way in index.js as follows-
//console.log(mod.name)