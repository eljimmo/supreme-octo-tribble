const path = require("path");
const express = require("express");
const app = express(); // create express app

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));

app.use(express.static("public"));

const PORT = process.env.PORT || 5000;
// const PORT = process.env.PORT || 5001
const host = '0.0.0.0';


app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(PORT, host, () => {
  console.log('Server is running on port: ' + PORT);
});
