
/*-- 1 --

*/
function firstFunc(arr, fn) {
  let newValue = 'New value: ';

  for (let i = 0; i < arr.length; i++) {
    newValue += fn(arr[i]);
  }

  return newValue.trim();
}

function handler1(el) {
  return el[0].toUpperCase() + el.slice(1);

}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));
/*-- 2 --

*/
function handler2(el) {
  return Number(el) * 10 + ', ';
}

console.log(firstFunc([10, 20, 30], handler2))

/*-- 3 --

*/
function handler3(el) {
  let result = '';
  result = el.name + ' is ' + el.age.toString() + ', ';

  return result
  // препод сделал так:
  // return `${el.name} is ${el.age}, `
}

console.log(firstFunc([{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }], handler3));

/*-- 4 --

*/
function handler4(el) {
  let result = '';
  let arrItem = el.toString();

  let originalText = arrItem;
  let invertedText = '';
  let textLength = originalText.length;

  while (textLength--) invertedText += originalText[textLength];

  result = invertedText + ', ';

  return result
  // препод сделал так (слово-перевертыш):
  // return el.split('').reverse().join('') + ', ';
}

console.log(firstFunc(['abs', '123'], handler4));

/*-- 5 --

*/
const arrOfNumbers = [45, 15, 41, 8, 23];

// мой вариант:
// function moreThen(val) {
//   let result;
//   result = val > 5;
//   return result;
// };

// препод сделал так:
function prepodFunction(el) {
  return typeof el === 'number';
};

function every(arr, fn) {
  let array = arr;
  const isFnIsFunction = typeof fn === 'function';

  if (Array.isArray(arr) && isFnIsFunction) {

    for (let i = 0; i < array.length; i++) {
      let result = fn(array[i], i, arr);
      if (!result) {
        return false;
      }
    }
    return true;
  }
};

console.log('every', every(arrOfNumbers, prepodFunction));

/*-- 6 --

*/
console.log('slovo'.split('').reverse().join(''));
/*-- 7 --
*/
