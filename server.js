//setting up the server and setting the port to 5000
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

//using urlencoded to clean up urls and static referenced to client/build
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./client/build"));

// let idMatch

//routing /check and sending the file for answers.json that is needed in app.js
// app.get("/restaurant-page/:id", (req, res) => {
//     idMatch = 
//   res.sendFile(__dirname + "/client/build/");
// });

//routing / to send back the index.html from inside the build directory
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

//routing * to handle any non-set routes to a 404 page
app.get("*", (req, res) => {
  res.send(`<h3>404: Whoops, something went wrong...</h3>`);
});

//listening on port 5000 and console logging a message to ensure it is listening
app.listen(port, () => console.log(`Yelpington app listening port ${port}!`));