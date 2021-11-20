import chalk from 'chalk'
import dedent from 'dedent';

const printError = (error) => {
    console.log(chalk.bgRed('ERROR') + ' ' + error)
}

const printSuccess = (message) =>{
    console.log(chalk.bgGreen('SUCCESS') + ' ' + message);
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' Help ')}
        Without weather args
        -s [CITY] for set weather
        -h for print help
        -t [API_KEY] for save token
        `
    );
};

export {printSuccess, printError, printHelp}