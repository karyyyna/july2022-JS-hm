// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function calculator (a, b) {
//     let res = a * b;
//     return res;
// }
// console.log(calculator(20,30));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function calc (a, b) {
//     let res = a * b;
//     return res;
// }
// console.log(calc(3.14, 5));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function calcul (a, b, c) {
//     let res = a * (b + c);
//     return res;
// }
// console.log(calcul(3.14, 10, 5));
// - створити функцію яка приймає масив та виводить кожен його елемент

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// function people(){
//     for ( const user of users){
//         console.log(user);
//     }
// }
// people()
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let text = 'Lorem ipsum dolor sit amet';
// function txt(text){
//     document.write(`<p>${text}</p>`)
// }
// txt (text);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let text = 'owu';
// function makeUl(txt){
//     document.write(`<ul><li>${text}
// // </li></ul>`)
// }
// makeUl(text);
// makeUl(text);
// makeUl(text);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим
// let text = 'owu';
// function makeUl(txt){
//     for (let i = 0; i < 1; i++)
//     document.write(`<ul><li>${text} ${i} </li></ul>`)
// }
// makeUl(text);
// makeUl(text);
// makeUl(text);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13