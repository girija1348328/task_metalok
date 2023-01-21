const mongoose = require("mongoose")

const templateSchema = new mongoose.Schema({
    template_name:{type:String,required:true,trim:true},
    subject:{type:String,required:true,trim:true},
    body:{type:String,required:true,trim:true}
},{timestamps:true})

module.exports = mongoose.model("templates",templateSchema)