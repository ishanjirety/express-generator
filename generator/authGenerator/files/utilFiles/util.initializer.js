const fs = require('fs')
const { logger } = require('../../../../utils')
const utilSignJwt = require('./util.signJwt')
const utilsIndex = require('./util.index')
const utilsInitilizer = async (path) => {

  const DATA = `const mongoose = require('mongoose')

// DB Connection
const initializeConnection = async () => {
  const URI = process.env.DB_CONNECTION_URI
  try{
    const Client =await mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true })
    console.clear()
    console.log("<======== CONNECTED TO DB ========>")
  }
 catch(e){
   console.log("ERROR : Could not initiate connection")
   console.log(\`REASON : \${e.message}\`)
 }
}

module.exports = initializeConnection`


  fs.appendFile(`${path}/initializer.util.js`, DATA, (err, data) => {
    if (err) {
      return logger('danger', "Could not generate utils/initializer.util.js", err.message)
    }
    return
  })
}

module.exports = utilsInitilizer