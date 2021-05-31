const chalk = require('chalk')
const logger = async (intent, ...rest) => {
    switch (intent) {
        case 'warn':
            for (let i = 0; i <= rest.length - 1; i++) {
                console.log(chalk.yellow(`> ${rest[i]}`))
            }
            break;
        case 'danger':
            for (let i = 0; i <= rest.length - 1; i++) {
                console.log(chalk.red(`> ${rest[i]}`))
            }
            break;
        case 'success':
            for (let i = 0; i <= rest.length - 1; i++) {
                console.log(chalk.green(`> ${rest[i]}`))
            }
            break;
        default:
            for (let i = 0; i <= rest.length - 1; i++) {
                console.log(`> ${rest[i]}`)
            }
            break;
    }
}
module.exports = logger