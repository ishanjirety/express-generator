const fs = require('fs')
const { logger } = require('../../../../utils')


const middlewareEncryptDecrypt = (path) => {

    const DATA = `const bcrypt = require('bcryptjs')

// @desc Use this function as middleware to encrypt signup password
// @desc Takes password in request body 

const encryptPassword = (req, res, next)=>{
    const {password} = req.body
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    req.body = {...req.body,password: hash}
    next()
}

// @desc This function takes supplied password as first parameter
// @desc And encrypted password as second parameter
const decryptPassword = (userPassword,DBPassword) =>{
    return bcrypt.compareSync(userPassword, DBPassword);
}
module.exports = {encryptPassword,decryptPassword}
    `

  fs.appendFile(`${path}/encryption.middleware.js`, DATA, (err, data) => {
            if (err) {
                return logger('danger', "Could not generate middleware/encryption.middleware.js",err.message)
            }
            return
        })
}
module.exports = middlewareEncryptDecrypt