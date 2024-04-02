#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from"chalk";

let mybalance = 15000; // dollar

let mypincode = 1060;

console.log  (chalk.green.bold("\n\tWelcome to ATM Machine!\n\t") );

let pin_number = await inquirer.prompt([
  { message:chalk.magenta( "Enter your pincode"), name: "pincode", type: "number" },
])

if (pin_number.pincode === mypincode) 
  {console.log(chalk.yellow ("correct pin, login successfully"));



let account_type = await inquirer.prompt([

  {name:"account",
  message:chalk.magenta("Select your account type"),
  type:"list",
  choices:[ "current" , "saving"] ,
},
]);


let operation_reply = await inquirer.prompt([
  {
    name: "operations",
    message:chalk.magenta("Please select option :"),
    type: "list",
    choices: ["withdraw", "check balance"]
  },
]);



if (operation_reply.operations === "withdraw") {
  let withdraw_amount = await inquirer.prompt([
    {
      name: "amount",
      message: chalk.magenta("enter your amount : "),
      
      type: "list",
      choices: [1000, 3000, 5000, 10000,20000]
    },
  ]);
   
  if(withdraw_amount.amount>mybalance){
    
    console.log(chalk.blue (
      `Your current balance is insufficient to draw your desired amount`));
    }

  

 else {

   (mybalance -= withdraw_amount.amount)
   
   console.log(chalk.blue (`${withdraw_amount.amount} withdraw successfully`))

   console.log(chalk.blue (`Your remaining  balance is ${mybalance}`));
   

    }
    
  }
else if(operation_reply.operations === "check balance") 
  
  {console.log(chalk.blue (`Your balance is ${mybalance} `));
  
}
  }
  
else {

  console.log(chalk.yellow ("incorrect pincode, Try again!"));

};
  
  
