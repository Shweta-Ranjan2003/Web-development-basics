import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;
app.use(morgan("tiny"));
//it logs the request to our console which includes the window type all information of the user to our console
//choose what you want to log from docs

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
