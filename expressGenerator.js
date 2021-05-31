
const { logger, checkArgs, getPath } = require('./utils')
const { auth } = require('./generator')
const chalk = require('chalk')
const readlineSync = require('readline-sync')

const args = process.argv.slice(2)

if (checkArgs(process)) {
    const path = getPath(args[1])
    if (path) {
        if (args[0] === "auth") {
            logger('success', 'Generating auth template')
            process.stdout.write(chalk.magenta("> Project name : "))
            const projectName = readlineSync.question("")
            if(projectName !==""){
                return auth(path, projectName)
            }return logger('danger','Invalid project name')
        }
        else if (args[0] === "plain") {
            logger('success', 'Generating plain express template')
            process.stdout.write(chalk.magenta("> Project name : "))
            const projectName = readlineSync.question("")
            auth(path, projectName)
        }
    }
}
