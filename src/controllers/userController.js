const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")

const userRegister = async function(req,res){
    
    try{
        let data = req.body

        let result = await userModel.create(data)
        return res.status(201).send({status:false,message:"user created successfully",data:result})
    }
    catch(error){
        return res.status(500).send({status:false,message:error,message})
    }
    

}


const userLogin = async function(req,res){
    try{
        let userName = req.body.email
        let password = req.body.password

        let user = await userModel.findOne({email:userName,password:password})
        if(!user) return res.status(404).send({status:false,message:"username or the password is incorrect"})

        //after successfully login 

        let token = jwt.sign({
            userId : user._id.toString(),
            
        },
        "template"
        ) 

        res.setHeader("x-api-key",token)
        res.status(201).send({message:"successfully login",token:token,userId:user._id})

    }
    catch(error){
        return res.status(500).send({status:false,message:error.message})
    }
}

module.exports = {userRegister,userLogin}