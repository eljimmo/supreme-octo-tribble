const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));

app.use(express.static("public"));

const PORT = process.env.PORT || 5000;



app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});