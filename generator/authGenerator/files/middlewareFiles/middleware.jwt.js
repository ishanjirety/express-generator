const fs = require('fs')
const { logger } = require('../../../../utils')
const banner = require('./banner')
const middlewareEncryptDecrypt = require('./middleware.encrypt')


const middlewareJwt = async (path) => {

    const DATA = `const jwt = require('jsonwebtoken');
    
    const verifyJwt = (req,res,next) => {
    const {authorization} = req.headers
   
      // @desc Checking every route
      try{
        const {id} = jwt.verify(authorization,process.env.SECRET)
        req.body = {...req.body,userId:id}
        next()
      }catch(e){
        res.status(401).json({
            success:false,
            error:e.message
        })
      }
    }
    module.exports = verifyJwt`


        fs.appendFile(`${path}/verifyJwt.middleware.js`, DATA, (err, data) => {
            if (err) {
                return logger('danger', "Could not generate middleware/verifyJwt.middleware.js");
            }
            return;
        })
    }
module.exports = middlewareJwt