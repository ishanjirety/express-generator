const fs = require('fs')
const { logger } = require('../../../utils')
const crypto = require('crypto')




const envFile = async (path) => {

const randomBytes = crypto.randomBytes(256).toString('base64')
    const DATA = `
PORT = 3000

# This Secret is randomly generated for JWT signature
SECRET= ${randomBytes}

API_KEY = *****
DB_CONNECTION_URI = mongodb+srv://<username>:<password>@<host>/<database_name>`

    fs.appendFile(`${path}/.env`, DATA, (err, data) => {
        if (err) {
            return logger('danger', "Could not generate package.json")
        } return
    })
}
module.exports = envFile