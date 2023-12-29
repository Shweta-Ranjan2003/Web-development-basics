import express from "express";

const app = express();
const port = 3000;

//custom middleware 
function logger(req, res, next) {
  console.log("Request Method: ", req.method); // GET
  console.log("Request URL: ", req.url); // /
  next(); //proceed to next function
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
