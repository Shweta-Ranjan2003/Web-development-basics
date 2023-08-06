import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
.prompt([
    {"message":"Type in you URL: ",
      name:"URL",
    },
])
.then((answers)=>{
    // console.log(answers);
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("qr_img.png"));

})
.catch((error)=>{
    if(error.isTtyError){

    } else{

    }
});

