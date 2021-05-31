

const fs = require('fs')
const { logger } = require('../../../../utils')


const utilSignJwt = async (path) => {

    const DATA = `const jwt = require('jsonwebtoken');
const signJwt = (id) => {
    return jwt.sign({id:id},process.env.SECERET,{expiresIn:'24h'})
}
module.exports = signJwt
    `


    fs.appendFile(`${path}/signJwt.util.js`, DATA, (err, data) => {
        if (err) {
            return logger('danger', "Could not generate util/signJwt.util.js")
        } return
    })
}
module.exports = utilSignJwt