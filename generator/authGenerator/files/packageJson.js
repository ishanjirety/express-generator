const fs = require('fs')
const {logger} = require('../../../utils')
const generatePackageJson = async (path, projectName) => {

    const DATA = `{
        "name": "${projectName}",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
          "test": "echo \\"Error: no test specified\\" && exit 1",
          "start": "node index.js"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "dependencies": {
          "bcryptjs": "^2.4.3",
          "cors": "^2.8.5",
          "express": "^4.17.1",
          "jsonwebtoken": "^8.5.1",
          "dotenv": "^10.0.0",
          "mongoose": "^5.12.5"
        }
      }`

    fs.appendFile(`${path}/package.json`, DATA, (err, data) => {
        if(err){
            return logger('danger',"Could not generate package.json")
            
        }return
    })
}
module.exports = generatePackageJson