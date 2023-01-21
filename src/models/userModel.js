const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    first_name :{type : String,required:true,trim:true},
    last_name : {type:String,required:true,trim:true},
    email : {type:String,required:true,trim:true},
    password : {type:Number,required:true,trim:true}

})

module.exports = mongoose.model("users",userSchema)