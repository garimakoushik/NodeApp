var express = require('express')
var app = express()


app.get("/", function(req, res) {
    res.send("Hello Docker!")
})

app.listen(3000, function(){
    console.log("app listening at 3000 port")
})