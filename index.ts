#! /usr/bin/env node

import inquirer from "inquirer";

const answers = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]
  },
]);

// conditional statement
if (answers.operator === "Addition"){
  console.log(answers.firstNumber + answers.secondNumber);
} else if (answers.operator === "Subtraction"){
  console.log(answers.firstNumber - answers.secondNumber);
} else if (answers.operator === "Multiplication"){
  console.log(answers.firstNumber * answers.secondNumber);
} else if (answers.operator === "Division"){
  console.log(answers.firstNumber / answers.secondNumber);
} else {
  console.log("Please select valid operator")
}

console.log("The END");


