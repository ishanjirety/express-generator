const fs = require('fs')
const { logger } = require('../../../../utils')


const routerAuth = async (path) => {

    const DATA = `
    const express = require('express')
    const router = express.Router()

    const { verifyJwt,encryptPassword,decryptPassword } = require('../middleware')
    const {signJwt}  = require('../util')

    router.post('/login',(req,res)=>{
        const ENCRYPTED_PASSWORD = "$2a$10$0DPE1aYq3W24mvk8gCO1tOMQnj9b392Kc3NuW4PJlLUzLwepLDDzK"
        const PASSWORD_PLAIN_TEXT = "password123"

        if(decryptPassword(PASSWORD_PLAIN_TEXT,ENCRYPTED_PASSWORD)){
            res.status(200).json({
                success:true,
            })
        }else{
            res.status(401).json({
                success:false,
            })
        }
    })
    router.post('/signup',encryptPassword,(req,res)=>{
        res.json({
            encryptedPassword: req.body.password,
        })
    })
    module.exports = router
    `

    fs.appendFile(`${path}/auth.router.js`, DATA, (err, data) => {
        if (err) {
            return logger('danger', "Could not generate router/auth.router.js")

        } return
    })
}
module.exports = routerAuth