'use strict';

let userInput;
const numbers = [];
let total = 0;

const message_sum = `Общая сумма чисел равна ${total}`;
const message_fatal = `Было введено не число, попробуйте еще раз`;

do {
  userInput = Number ( prompt('Введите число', '') ); 

if (userInput === Number) {
  message = message_sum;
  numbers.push(total);
  } else if (userInput !== null) {
  message = message_fatal;
}


} while (userInput <= numbers.length)
;

for (const value of numbers) {
  console.log(value); 
}


alert(message);


