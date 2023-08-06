const express = require("express");
const bodyParser=require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000);

app.get("/",function(req,res){
    // res.send("<h1>Hello World</h1>");
    // res.sendFile("index.html");
    //  console.log(__dirname);
     res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req,res){
console.log(req.body);
var num1=Number(req.body.num1); //typecasting the char in number
var num2=Number(req.body.num2); //num1 and num2 are name in form
var result = num1+num2;
res.send("The result of the calculator is "+result);
});

app.get("/bmicalculator",function(req,res){
    // res.send("<h1>Hello World</h1>");
    // res.sendFile("index.html");
    //  console.log(__dirname);
     res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator",function(req,res){
// console.log(req.body);
var weight=parseFloat(req.body.weight); //typecasting the char in number
var height=parseFloat(req.body.height); 
var bmi = weight / (height*height);
res.send("Your bmi is "+bmi);
});