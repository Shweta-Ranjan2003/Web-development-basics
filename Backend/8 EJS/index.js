/**
 * Embedded Javascript
 * Templating - Lets say we took input from user of their name now we want to send back an html file to him as a response but 
 *              in html file we want to write or use user's name so we can do it using templating
 * So in order to do it we use templating engine here we are using EJS
 * eg:-
 * app.post("/submit",(req,res)=>{
 * res.render("index.ejs",{name: req.body["name"]});
 * });
 * 
 * Creating a website where it will render todays day and then send it to html file and also an advice with it
 */


import express from "express";

const app=express();
const port=3000;

const date = new Date();
// const date = new Date("June 24, 2023 11:13:00"); //It was a saturday so to check if code is working properly you can give your on date as well
const day = date.getDay();
const dayname = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//console.log(dayname[day]);

app.listen(port,()=>{
    console.log(`Server is running on port no. ${port}`);
});

app.get("/",(req,res)=>{
    if(day<6 && day>0){
    res.render("index.ejs",{
        day: `It's ${dayname[day]}`, advice: "It's time to work hard"}
        //or just day: dayname[day].
        );
    }
    else{
        res.render("index.ejs",{
            day: `It's ${dayname[day]}`, advice: "It's time Party!"}
            ); 
    }
});