
/*-- 1 --
На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
будут в верхнем регистре. Использовать for или while.
*/
let originalString = 'i am in the easycode';
let capitalLettersString = '';
let i = 0;

capitalLettersString += originalString[0].toUpperCase();

while (i < (originalString.length - 1)) {

  originalString[i] === ' '
    ? capitalLettersString += originalString[i + 1].toUpperCase()
    : capitalLettersString += originalString[i + 1];

  i++;
}

console.log(capitalLettersString);

/*-- 2 --
Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
*/
let originalText = 'tseb eht ma i';
let invertedText = '';
let textLength = originalText.length;

while (textLength--) invertedText += originalText[textLength];

console.log(invertedText);

/*-- 3 --
Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1.
С помощью циклов вычислить факториал числа 10.
Использовать for.
*/
let factorialOfNumber = 1;

for (let i = 2; i <= 10; i++) factorialOfNumber *= i;

console.log('Факториал числа 10= ', factorialOfNumber);

/*-- 4 --
На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены.
Использовать for.
*/
let oldString = 'JavaScript is a pretty good language';
let newString = '';

for (let i = 0; i < oldString.length; i++) {
  if (oldString[i] === ' ') {
    newString += oldString[i + 1].toUpperCase();
    i++;
  } else {
    newString += oldString[i];
  };
};
console.log(oldString);
console.log(newString);


/*-- 5 --
Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
Использовать for of.
*/

let massOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let massOfOddNumbers = [];

for (let number of massOfNumbers) if (number % 2) massOfOddNumbers.push(number);

console.log('Дан массив чисел: ', massOfNumbers);
console.log('Нечетные числа в массиве: ', massOfOddNumbers);

/*-- 6 --
Дан объект:

let list = {
name: ‘denis’,
work: ‘easycode’,
age: 29
}

Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре.
Использовать for in.
*/
let list = {
  name: 'denis',
  work: 'easycode',
  age: 29
};

for (let item in list) if (isNaN(list[item])) list[item] = list[item].toUpperCase();

console.log(list);
/*-- 7 --
*/
