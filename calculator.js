const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({ extended: true}))

app.get("/",  function(req, res) {
    res.sendFile(__dirname+"/index.html");
})
app.post("/", function(req, res) {
    var numOne = Number(req.body.Number_1);
    var numTwo = Number(req.body.Number_2);

    var result = numOne + numTwo;
    // console.log(result);

    res.send("The answer to your calculation is " + result);
})
app.listen(3000, function(){
    console.log("listening")
})