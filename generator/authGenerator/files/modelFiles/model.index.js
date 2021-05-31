const fs = require('fs')
const { logger } = require('../../../../utils')


const modelIndex = async (path) => {

    const DATA = `const User = require('./user.model.js') 
    module.exports = {User}`


    fs.appendFile(`${path}/index.js`, DATA, (err, data) => {
        if (err) {
            return logger('danger', "Could not generate models/index.js")
        } return
    })
}
module.exports = modelIndex