'use strict';


const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';

const login = prompt('Введите логин!');

const message_cancelled = 'Отменено пользователем!';
const message_access_denied = 'Доступ запрещен!';
const message_welcome = 'Добро пожаловать!';

let message;

if (login === ADMIN_LOGIN) {
  const password = prompt('Введите пароль!');

  if (password === ADMIN_PASSWORD) {
    message = message_welcome;
  } else if (password === null) {
    message = message_cancelled;
  } else {
    message = message_access_denied;
  } 
}
    else if(login === null){
    message = message_cancelled;
  } else{
    message = message_access_denied;
  }

alert(message);


