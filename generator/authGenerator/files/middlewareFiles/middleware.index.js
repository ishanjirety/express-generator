const fs = require('fs')
const { logger } = require('../../../../utils')


const middlewareIndex = async (path) => {

    const DATA = `const banner = require('./banner.middleware.js')
    const verifyJwt = require('./verifyJwt.middleware.js')
    const {encryptPassword,decryptPassword} = require('./encryption.middleware.js')
    module.exports = {banner,verifyJwt,encryptPassword,decryptPassword}`

fs.appendFile(`${path}/index.js`, DATA, (err, data) => {
        if (err) {
            return logger('danger', "Could not generate middleware/index.js")
        } return
    })
}
module.exports = middlewareIndex