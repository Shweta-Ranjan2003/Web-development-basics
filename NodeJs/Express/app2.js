const express = require("express");
const path = require("path");
const app2 = express();
const fs = require("fs");
const port = 80;

//EXPRESS SPECIFIC CODE
app2.use('/static', express.static('/static')); //for serving static files
app2.use(express.urlencoded()) //Helps to bring form data to express

//PUG SPECIFIC CODE
app2.set('view engine','pug'); //set the template engine as pug
app2.set('views', path.join(__dirname , 'views')); //set the views directory

//ENDPOINTS
app2.get('/' ,(req , res)=>{
    const params = {'title': 'Gym web using pug' , 'content': 'Using express and pug for gym web'}
    res.status(200).render('index2.pug' , params);
});

app2.post('/', (req, res)=>{
    console.log(req.body);
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('./Express/output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index2.pug', params);

})

//START THE SERVER
app2.listen(port , ()=>{
    console.log(`the application was successfully run on port ${port}`);
})