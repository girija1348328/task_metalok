const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const userTemplate = require("../controllers/templateController")
const auth = require("../middlewares/auth")

//user
router.post("/register",userController.userRegister)
router.post("/login",userController.userLogin)


//template
router.post("/createTemplate",auth.auth,userTemplate.createTemplate)
router.get("/getTemplate",auth.auth,userTemplate.getTemplate)
router.get("/getTemplateById/:templateId",auth.auth,userTemplate.getTemplateById)
router.put("/updateTemplate/:templateId",auth.auth,userTemplate.updateTemplate)
router.delete("/deleteTemplate/:templateId",auth.auth,userTemplate.deleteTemplate)

module.exports =  router