// Instead of using http we are using axios which is use to reach out from our server to another resource on internet
// and it makes these responses very easy , eg

import axios from "axios";

app.get("/", async (req,res)=>{
    try{
        const response = await axios.get("https://bored-api.appbrewery.com/random");
        res.render("index.ejs",{activity: response.data});
    }
    catch(error){
        console.error("Failed to make request:",error.message);
        res.status(500).send("Failed to fetch activity. Please try again.");
    }
})