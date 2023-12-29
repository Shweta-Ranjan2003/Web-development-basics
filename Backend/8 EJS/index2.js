import express from "express";

const app=express();
const port=3000;
app.listen(port,()=>{
    console.log("Serving");
});
app.get("/",(req,res)=>{
    const data={
        title: "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple","banana","orange"],
        htmlContent: "<em>This is some em text</em>",
    };
    res.render("index2.ejs",data);
});