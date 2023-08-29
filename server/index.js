const path = require("path");
const express = require("express");
const app = express();

// Serve static files from the "build" directory
app.use(express.static(path.join(__dirname, "..", "build")));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

// Handle all other routes by sending the "index.html" file
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});


// const path = require("path");
// const express = require("express");
// const app = express(); // create express app

// // add middlewares
// app.use(express.static(path.join(__dirname, "..", "build")));

// app.use(express.static("public"));

// const PORT = process.env.PORT || 5000;



// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });


// app.listen(PORT, () => {
//   console.log(`Our app is running on port ${ PORT }`);
// });