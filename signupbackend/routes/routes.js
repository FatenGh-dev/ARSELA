const express=require('express')
const router=express.Router()

const signUpTemplateCopy=require('../models/SignUpModels')

const bcrypt = require('bcrypt')
router.post('/signup/', async(request,response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword=await 
    bcrypt.hashSync(request.body.password,saltPassword)
    const SignedupUser =  new signUpTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:securePassword
    })
    
    SignedupUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
            response.json(error)
    }) })
  
      
module.exports = router