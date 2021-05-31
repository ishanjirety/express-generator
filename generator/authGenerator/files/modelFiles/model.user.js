const fs = require('fs')
const { logger } = require('../../../../utils')


const modelUser = async (path) => {

  const DATA = `const mongoose = require('mongoose')

    const UserSchema = new mongoose.Schema({
      username:{
        type:String,
        required:[true,"Username could not be empty"],
        unique:[true,"Username already exists"]
        },
      password:String,
      securityQuestion:{type:String,required:true},
      answer:{type:String,required:true},
    })
    
    const User = mongoose.model("User",UserSchema)
    
    module.exports = User`

  fs.appendFile(`${path}/user.model.js`, DATA, (err, data) => {
    if (err) {
      return logger('danger', "Could not generate models/user.model.js")
    } return
  })
}
module.exports = modelUser