//setting up the server and setting the port to 5000
const express = require("express");
const path = require("path")
const app = express();
const port = process.env.PORT || 5000;

const restDir = path.resolve("./api")

//using urlencoded to clean up urls and static referenced to client/build
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./client/build"));

//routing / to send back the index.html from inside the build directory
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

//routing /api to api endpoint of the directory with all restaurants in json format
app.get("/api", (req, res) => {
    res.sendFile(__dirname + "/api/directory.json")
})

//routing to api endpoint for single restaurant matching the id provided in url
app.get("/api/:id", (req, res) => {
    let filePath = path.join(restDir, req.params.id + ".json")
    res.sendFile(filePath)
})

//routing * to handle any non-set routes to a 404 page
app.get("*", (req, res) => {
  res.send(`<h3>404: Whoops, something went wrong...</h3>`);
});

//listening on port 5000 and console logging a message to ensure it is listening
app.listen(port, () => console.log(`Yelpington app listening port ${port}!`));

//use context and reducer
//framework loopback, nest.js
//material design (UI) - chakra UI
