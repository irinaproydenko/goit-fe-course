'use strict';

let userInput;
const numbers = [];
let total = 0;

const message_fatal = `Было введено не число, попробуйте еще раз`;
let message;

do {
  userInput = Number ( prompt('Введите число', '') ); 

if (Number.isInteger(userInput) && userInput) {
  numbers.push(userInput);
  console.log(numbers);
  } else if (userInput !== null) {
  message = message_fatal;
}


} while (userInput)


for (const value of numbers) {
  total = total + value;
}
const message_sum = `Общая сумма чисел равна ${total}`;

alert(message);