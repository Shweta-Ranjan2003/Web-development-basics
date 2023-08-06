//expressjs.com
//pre requisite - js callbacks and high order function 
//nodemon is a utility if we use it then monitor for any change in our code and automatically restart our server. just install it then type nodemon server.js
const express = require("express");
const app = express();

 //first parameter is route 
app.get("/",function(req,res){ //or type request and response
    res.send("<h1>Hello Everybody!</h1>");
    //see this on google by typing localhost:3000
});

app.get("/contact",function(req,res){
    res.send("contact me at shwetaranjan303@gmail.com");
    //localhost:3000/contact
}); 
app.get("/about",function(req,res){
    res.send("My name is Shweta Ranjan");
    //localhost:3000/contact
}); 

app.listen(3000,function(){
    console.log("Hello World");
    console.log("Server has started on port 3000");
});

