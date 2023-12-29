import inquirer from "inquirer";
//To get user input
import qr from "qr-image";
//to turn the user entered url into a qr code image
import fs from "fs";
//to save user input using the native fd node modules
inquirer
.prompt([
    //Pass your questions in here
    {"message":"Type in you URL: ",
      name:"URL",
    },
])
.then((answers)=>{
    //use user feedback/answer for whatever!
    // console.log(answers); //format like js object url:www.google.com
    const url = answers.URL;  //to get url from object use .URL
    var qr_png = qr.image(url);
    //var qr_svg = qr.image("Lets create svg", {type: 'svg});
    qr_png.pipe(fs.createWriteStream("./qr_img.png"));

    fs.writeFile("./URL.txt",url,(err)=>{
        if(err) throw err;
        console.log("The file has been saved");
    })
})
.catch((error)=>{
    if(error.isTtyError){

    } else{

    }
});

