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

const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgYellow(' Weather ')} Weather in city ${res.name}
        ${icon} ${res.weather[0].description}
        Temperature: ${res.main.temp} (Feels like: ${res.main.feels_like})
        Humidity: ${res.main.humidity}%
        Wind speed: ${res.wind.speed}
        `
    );
}

export {printSuccess, printError, printHelp, printWeather};