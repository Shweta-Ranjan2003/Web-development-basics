const express = require('express');
const path = require('path');
const app = express();
const port = 80;

//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static')) //for serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine','pug') //set the template engine as pug
app.set('views',path.join(__dirname,'views'))//Set the views directory

//ENDPOINT
app.get('/',(req,res)=>{
    // const con = "This is the best dance academy website"
    const params ={}
    res.status(200).render('Home.pug',params);
})
app.get('/contact',(req,res)=>{
    const params ={}
    res.status(200).render('Contact.pug',params);
})


//SERVING THE SERVER
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
})