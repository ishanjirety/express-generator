const fs = require('fs')
const { logger } = require('../../../../utils')


const routerIndex = async (path) => {

    const DATA = `const Auth = require('./auth.router.js')
    module.exports = { Auth }
    `

    fs.appendFile(`${path}/index.js`, DATA, (err, data) => {
        if (err) {
            return logger('danger', "Could not generate router/index.js")
        } return
    })
}
module.exports = routerIndex