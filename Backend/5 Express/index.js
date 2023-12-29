/*
Node js provides us a runtime environment to run js outside the browser
Express on the other hand is a backend framework . using both together to build a strong backend
Creating an express server
1. Create directory.
2. Create index.js file.
3. Initialise NPM.
4. Install the Express package.(expressjs.com) then write type module in package.json
5. Write Server application in index.js.
6. Start Server.
*/

import express from "express";
const app=express();
const port=3000;

//3000 is the location of the server where we will listen to request
// app.listen(3000,()=>{
//     console.log("Server running on port 3000."); //Callback
// });

app.listen(port,()=>{
    console.log(`Server running on port ${port}.`); //callback
})

//localhost is simply when we dont have a server on internet so we host our server locally
//port are like door of the server we use port 3000 so on our server it will find door 3000 and get into it and serve what we requested


//HyperText Transfer Protocol - a language that allows computer to talk to each other over internet
/*
GET = request a resource to server (maybe html css file)
POST = sending a resource to server (a piece of information)
PUT = update method - replace a resouce
PATCH = patch up a resource or updates parts of an existing resource
DELETE = deletes a resource
*/

//****************GET******************
// "/" means making a get request of home page , res means how we want to respond to request
app.get("/",(req,res)=>{
    res.send("<h1>Hello</h1>");
});

//nodemon - everytime we make a change in our code we have to stop our server and again restart it
//nodemon is a tool that helps develop Node.js based application by automatically restarting the node application
//to use it instead of writing node index.js write nodemon index.js

//Different endpoints
app.get("/about",(req,res)=>{
    res.send("<h3>About Me</h3>");
});
app.get("/contact",(req,res)=>{
    res.send("<h3>Contact Me</h3><em>7997529632</em>");
});

//HTTP response status codes
//404- client error responses which means client has requested for something wrong
/* 
1** - Hold on
2** - Here you go
3** - Go away  (redirected)
4** - You fucked up
5** - I fucked up
*/

//********POSTMAN**********
//If you dont have time to write different end put post create delete then use postman
//After downloading we can target the specific url like https://localhost:3000


app.post("/register",(req,res)=>{
    //a registration route where we can post data from maybe html form then do something with it
    //here we are sending success status
    res.sendStatus(201);
})
app.put("/user/shweta",(req,res)=>{
    res.sendStatus(200);
})
app.patch("/user/shweta",(req,res)=>{
    res.sendStatus(200);
})
app.delete("/user/shweta",(req,res)=>{
    res.sendStatus(200);
})