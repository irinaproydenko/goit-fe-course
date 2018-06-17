'use strict';


const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';

const USER_LOGIN = prompt('Введите логин!');

const message_cancelled = 'Отменено пользователем!';
const message_access_denied = 'Доступ запрещен!';
const message_welcome = 'Добро пожаловать!';

let message;
let USER_PASSWORD;

if (USER_LOGIN === ADMIN_LOGIN) {
  USER_PASSWORD = prompt('Введите пароль!');

  if (USER_PASSWORD === ADMIN_PASSWORD) {
    message = message_welcome;
  } else if (USER_PASSWORD === null) {
    message = message_cancelled;
  } else {
    message = message_access_denied;
  } 
}
    else if(USER_LOGIN === null){
    message = message_cancelled;
  } else{
    message = message_access_denied;
  }

alert(message);


