const express = require('express')
const path = require('path')
const app = express();

const publicPath = path.join(__dirname,"..","public")
const port = process.env.PORT || 3000;

app.use(express.static(publicPath))

app.get("*",function(req,res){
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, function(){
    console.log("Server is up!")
})