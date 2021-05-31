const path = require('path')
const fs = require('fs')
const { logger } = require('../../utils')
var cmd = require('node-cmd');
const util = require('util')
const {
    generatePackageJson,
    indexFile,
    envFile,
    utilsInitilizer,
    utilsIndex,
    utilSignJwt,
    modelIndex,
    modelUser,
    middlewareIndex,
    middlewareJwt,
    banner,
    middlewareEncryptDecrypt,
    routerIndex,
    routerAuth,
} = require('./files')

const tree = require('tree-node-cli');

const auth = async (dir, projectName) => {
    const folders = ['util', 'middleware', 'models', 'router']
    try {
        if (!fs.existsSync(`${dir}/${projectName}`)) {

            fs.mkdirSync(`${dir}/${projectName}`) // Create project directory
            const projectPath = `${dir}/${projectName}`

            logger('warn', `Generating directories for '${projectName}'...`)

            folders.forEach(folderName => {       // Generating utility directories
                fs.mkdirSync(`${projectPath}/${folderName}`)
                if (folderName === "util") {
                    utilsInitilizer(`${projectPath}/${folderName}`)
                    utilsIndex(`${projectPath}/${folderName}`)
                    utilSignJwt(`${projectPath}/${folderName}`)
                    return;
                }
                if (folderName === "models") {
                    modelIndex(`${projectPath}/${folderName}`)
                    modelUser(`${projectPath}/${folderName}`)
                    return;
                }
                if (folderName === "middleware") {
                    middlewareIndex(`${projectPath}/${folderName}`)
                    middlewareJwt(`${projectPath}/${folderName}`)
                    banner(`${projectPath}/${folderName}`)
                    middlewareEncryptDecrypt(`${projectPath}/${folderName}`)
                    return;
                }
                if (folderName === "router") {
                    routerIndex(`${projectPath}/${folderName}`)
                    routerAuth(`${projectPath}/${folderName}`)
                }
            }, 0)

            generatePackageJson(`${dir}/${projectName}`, projectName) // Generate package.json
            indexFile(`${dir}/${projectName}`) // Generate index.js
            envFile(`${dir}/${projectName}`) // Generating .env
        }
        else {
            logger('danger', 'Could not generate code, project with same name already exists')
        }
    } catch (e) {
        logger('danger', 'Could not generate code', e.message)
    }
    setTimeout(() => logger('success', tree(`${dir}/${projectName}`, { allFiles: true })), 1000)
}


module.exports = auth