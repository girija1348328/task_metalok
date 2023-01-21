const templateModel = require("../models/templateModel")

//create template
const createTemplate = async function(req,res){

    try{
        let data = req.body

        let result = await templateModel.create(data)
        return res.status(201).send({status:true,message:"template create successfully"})
    }
    catch(error){
        return res.status(500).send({status:false,message:error.message})
    }
}

//get all templates
const getTemplate = async function(req,res){

    try{
        
        let result = await templateModel.find()
        return res.status(201).send({status:true,message:"templates",data:result})
    }
    catch(error){
        return res.status(500).send({status:false,message:error.message})
    }
}

//get templates by id
const getTemplateById = async function(req,res){

    try{
        let templateId = req.params.templateId
        let result = await templateModel.findOne({_id:templateId})
        return res.status(201).send({status:true,message:"templates",data:result})
    }
    catch(error){
        return res.status(500).send({status:false,message:error.message})
    }
}



//update templates
const updateTemplate = async function(req,res){

    try{
        let templateId = req.params.templateId
        let data = req.body
        const {template_name,subject,body} = data
        let result = await templateModel.findOneAndUpdate({_id:templateId},
          {$set: {
            template_name : template_name,
                subject : subject,
                body :body
            }},
            {new:true})
        return res.status(200).send({status:true,message:"templates updated successfully",data:result})
    }
    catch(error){
        return res.status(500).send({status:false,message:error.message})
    }
}


//delete template
const deleteTemplate = async function(req,res){

    try{
        let data = req.params.templateId
        let result = await templateModel.findOneAndDelete({_id:data})
        return res.status(201).send({status:true,message:"templates deleted successfully",data:result})
    }
    catch(error){
        return res.status(500).send({status:false,message:error.message})
    }
}


module.exports = {createTemplate,getTemplate,updateTemplate,deleteTemplate,getTemplateById}