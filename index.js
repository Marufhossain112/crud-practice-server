const express = require("express");
const cors = require("cors");
const port = 5000;
const app = express();
// middleware
app.use(cors());
app.use(express());

app.get("/", (req, res) => {
  console.log("I am running on the Home...");
});
// send data to database

app.listen(port, () => {
  console.log(`I am running on ${port}`);
});
