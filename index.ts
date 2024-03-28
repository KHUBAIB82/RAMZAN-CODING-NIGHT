#! /usr/bin/env node
import inquirer from "inquirer"

// 1) Coputer will generate a randam number 

// 2) User input for guessing number 

// 3) Cumpare user input with computer generated number and result

const randomNumber = Math.floor(Math.random() * 6 +1);

console.log("Welcome to number guessing game");
const answer = await inquirer.prompt([
    {
        name :"userGuessedNumber",
        type : "number",
        message: "Please guess a number 1 - 6: ",
    }
])
if(answer.userGuessedNumber === randomNumber) {
    console.log("Congtratulation! You guessed right number.");
}
else{
    console.log("You guessed wrong number");
}