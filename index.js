#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessdNumber",
        type: "number",
        message: "Please guess a number between 1-6:",
    },
]);
if (answers.userGuessdNumber === randomNumber) {
    console.log("congratulation! you guessed right number");
}
else {
    console.log("you guess wrong number");
}
