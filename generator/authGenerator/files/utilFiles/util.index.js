const fs = require('fs')
const { logger } = require('../../../../utils')


const utilsIndex = async (path) => {

    const DATA = `const initializeConnection = require('./initializer.util') 
const signJwt = require('./signJwt.util.js')
module.exports = {initializeConnection,signJwt}`



    fs.appendFile(`${path}/index.js`, DATA, (err, data) => {
        if (err) {
            return logger('danger', "Could not generate utils/index.js")

        } return
    })
}
module.exports = utilsIndex