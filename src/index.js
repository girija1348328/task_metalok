const express = require("express")
const mongoose = require("mongoose")
const Route = require("./routes/route")
const app = express()

app.use(express.json())

mongoose.connect("mongodb+srv://linagodbole99:dAix1EtU6C6yxJDR@cluster0.oip3eje.mongodb.net/metalokGirija")
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.error(err))

app.use("/",Route)


app.listen(3000 || process.env.PORT,function(){
    console.log("app is running on port 3000")
})