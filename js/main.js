// Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище. Підключіть створений файл до HTML-документу.

console.log("My surname is Droha");

// оголосіть дві змінні + запишіть у змінні будь-які значення

let number = 9;
let dayOfWeek = 'tuesday';

// виведіть на екран значення змінних 

console.log(number);
console.log(dayOfWeek);

alert('Variable 1: ' + number);
alert('Variable 2: ' + dayOfWeek);
//  d) скопіюйте значення однієї змінної в іншу;

number = dayOfWeek;

//  e) виведіть на екран значення змінних.

console.log('Variable 1 changed to: ' + number);
alert(`Variable number changed to: ${number}`)

// Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.

const newObj = {
    monthName:'June',
    numberOfDays: 30,
    isSummer: true,
    importantDates: null,
    nextMonth: undefined
};

// Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.

let isAdult = confirm('Are you 18 y.o?');
console.log(isAdult);

// В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних: ваше ім’я, ваше прізвище, навчальна група, ваш рік народження.
// Присвойте змінним відповідні значення. Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. Визначте тип кожної змінної. Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String. Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.

let myName = 'Yurii';
    mySurname = 'Droha';
    edGroup = 0906,
    birthYear = 1997,
    isMarried = false;

console.log(typeof myName);
console.log(typeof mySurname);
console.log(typeof edGroup);
console.log(typeof birthYear);
console.log(typeof isMarried);

// За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.

let userData = prompt('Your login')
                

// Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.
