const express = require("express");
const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.send("My Phone Information");
});

app.listen(port, () => {
  console.log(`My phone server is running on port: ${port}`);
});
