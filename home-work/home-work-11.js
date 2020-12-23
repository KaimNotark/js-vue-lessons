
/*-- 1 --
Переделать функцию с использованием функции-стрелки
(в методе reduce тоже использовать arrow function):

function sum() {
const params = Array.prototype.slice.call(arguments);

if (!params.length) return 0;

return params.reduce(function (prev, next) { return prev + next; });
}

sum(1, 2, 3, 4); // 10
sum(); // 0

что такое метод reduce можно прочитать
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/
const sum = (...rest) => {
  const params = rest;
  if (!params.length) return 0;
  return params.reduce((prev, next) => prev + next);
};

// препод сделал так:
// const sum = (...params) => {
//   if (!params.length) return 0;
//   return params.reduce((prev, next) => prev + next);
// };

console.log(sum(1, 2, 3, 4)); // 10
console.log(sum()); // 0

/*-- 2 --
Переделать функцию с использованием функции-стрелки

function convertToObject(num) {
  const obj = {
      value: num,
      isOdd: Boolean(num % 2)
  }
  return obj;
}
*/
const convertToObject = (num) => ({
  value: num,
  isOdd: Boolean(num % 2)
});

console.log('convert', convertToObject(4));

/*-- 3 --

*/

/*-- 4 --

*/


/*-- 5 --

*/



/*-- 6 --


/*-- 7 --

*/


/*-- 8 --

*/
