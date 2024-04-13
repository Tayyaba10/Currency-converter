#! /usr/bin/env node 
import inquirer from "inquirer";
const currencies = {
    USD: 1,
    EURO: 0.92,
    PKR: 277.94,
    YEN: 151.81,
    SAR: 3.75,
    POUND: 0.79,
    INR: 83.32,
    AFG: 71.33
};
console.log("This is a currency converter");
let userAns = await inquirer.prompt([
    {
        name: "from",
        message: "Select your currency",
        type: "list",
        choices: ["USD", "EURO", "YEN", "INR", "PKR", "SAR", "POUND"]
    },
    {
        name: "to",
        message: "Select your currency",
        type: "list",
        choices: ["USD", "EURO", "YEN", "INR", "PKR", "SAR", "POUND"]
    },
    {
        name: "amount",
        message: "Enter your amount to converted",
        type: "number"
    }
]);
let fromAmount = currencies[userAns.from];
let toAmount = currencies[userAns.to];
let amount = userAns.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
