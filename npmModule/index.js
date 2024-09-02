// var validator = require('validator');
import validator from 'validator';
import chalk from 'chalk';        // to decorate the result 

const result = validator.isEmail('anuraggmail@gmail.in');

// console.log(result);

console.log(result?chalk.green.inverse(result):chalk.red.inverse(result));
