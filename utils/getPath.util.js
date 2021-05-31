const path = require('path')
const fs = require("fs");
const logger = require('./logger.util')
const getPath = (dir) => {
    if (path.extname(dir) === "") {
        if (dir === ".") {
            const disk = __dirname.split(/[ .;?!~,`"&|()<>{}\[\]\r\n/\\]+/)[0]
            logger('warn', `Extracting code in base directory '${disk}'`)
            return disk
        } else {
            if (fs.existsSync(dir)) {
                logger('warn', `Generating code in ${dir}`)
                return dir
            } else {
                logger('danger', "Given path does not exists")
            }
        }
    } else {
        logger('warn', "Invalid file path provided. Please provide valid path!")
        return undefined
    }
}
module.exports = getPath