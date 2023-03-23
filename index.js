const express = require("express");
const app = express();

app.get('/',(req,res) => {
    res.send("Hello World :D ")
})

app.listen(3000, ()=>{
    console.log("Port is running now, Congrats! http://localhost:3000/")
})