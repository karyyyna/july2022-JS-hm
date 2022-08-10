// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log(str.indexOf());
//
// let str1 = 'lorem ipsum';
// console.log(str1.indexOf());
//
// let str2 = 'javascript is cool';
// console.log(str2.indexOf());
//-
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// console.log(str.toUpperCase());
//
// let str1 = 'lorem ipsum';
// console.log(str1.toUpperCase());
//
// let str2 = 'javascript is cool';
// console.log(str2.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str = 'HELLO WORLD';
// console.log(str.toLowerCase());
//
// let str1 = 'LOREM IPSUM';
// console.log(str1.toLowerCase());
//
// let str2 = 'JAVASCRIPT IS COOL';
// console.log(str2.toLowerCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());
//
// {/*// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.*/}
//     let str = 'Ревуть воли як ясла повні';
//     let split = str.split(' ');
//     console.log(split);
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let numbers = ['10','8','-7','55','987','-1011','0','1050','0'];
// let map = numbers.map(value => value);
// console.log(map);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending')
// sortNums(nums,'descending')
// let numbers = [11,21,3];
// function sortNums(numss, direction){
//     if (direction==='ascending'){
//         numss.sort((num1, num2) => num1 - num2)
//     }
//     if (direction==='descending'){
//         numss.sort((num1, num2) => num2 - num1)
//     }
// }
// sortNums(numbers, 'ascending')
// console.log(numbers); // [3,11,21]
// sortNums(numbers, 'descending')
// console.log(numbers); // [21,11,3]

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// coursesAndDurationArray.sort((courses1, courses2) => courses2.monthDuration - courses1.monthDuration);
// console.log(coursesAndDurationArray)


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let filteredcourses = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(filteredcourses);














