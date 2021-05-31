
const fs = require('fs')
const { logger } = require('../../../../utils')


const banner = (path) => {

  const DATA = `
    const Banner = (req,res,next) =>{
        res.send(
          \`<small><strong><u>API created using express-generator</u></strong></small>\`
        )
      }
      module.exports = Banner`

  fs.appendFile(`${path}/banner.middleware.js`, DATA, (err, data) => {
      if (err) {
        return logger('danger', "Could not generate middleware/banner.middleware.js",err.message)
      } return
    })
}
module.exports = banner