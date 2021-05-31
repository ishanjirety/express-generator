const logger = require('./logger.util')
const checkArgs = (process) => {
    if (process.argv.length <= 2) {
        logger('danger', "No arguments were provided", "plain\t\t:\tCommand will generate plain express boiler plate code", "auth\t\t:\tCommand will generate boiler plate code for authentication")
        return false
    }
    else if (process.argv.slice(2)[0] !== "auth" && process.argv.slice(2)[0] !== "plain") {
        logger("warn", "Invalid arguments", "plain\t\t:\tCommand will generate plain express boiler plate code", "auth\t\t:\tCommand will generate boiler plate code for authentication")
        return false
    }
    else if (process.argv.slice(2).length < 2) {
        logger("Provide location to setup build")
        return false
    }
    else {
        return true
    }
}
module.exports = checkArgs