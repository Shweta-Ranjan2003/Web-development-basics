const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//For serving static files
app.use('/static',express.static('static'))

//Set the template engine as pug
app.set('view engine','pug');

// Set the views directory
app.set('views', path.join(__dirname, 'views'))

//our pug demo endpoint
app.get("/demo",(req , res)=>{
    res.status(200).render('demo',{title:'hey using pug',message:'Come Join Me!'});
});

app.get("/" , (req , res)=>{
    res.send("this is the home page, Welcome");
});
app.get("/about",(req , res)=>{
    res.send("I am Shweta Ranjan and i am learning to use express");
});
app.post("/about",(req , res)=>{
    res.send("I am Shweta Ranjan and i am learning to use express and this is a post request");
});
app.get("/contact",(req , res)=>{
    res.status(404).send("This page is not found on my website");
});
app.listen(port , ()=>{
    console.log(`the application started on port ${port}`);
});