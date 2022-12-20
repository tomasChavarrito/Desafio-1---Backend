const express = require("express");
const path = require("path");


const app = express();

app.get("/", (req, res)=>{
    //res.send("Hello World!!")
    res.sendFile(path.join(_dirname + "/index.html"))
});

app.listen(8080, ()=> console.log("The server it's working on port", 8080))