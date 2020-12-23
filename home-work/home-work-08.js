
/*-- 1 --

*/
function getArray(num) {
  let number = Number(num);
  let array = [];
  for (let i = 1; i <= number; i++) array.push(i);
  return array;
}

console.log(getArray(10));
/*-- 2 --

*/
function doubleArray(arr) {
  let newArr = [];
  newArr = newArr.concat(arr, arr);
  return newArr;
}

console.log(doubleArray([1, 2, 3])); // [1,2,3,1,2,3]

/*-- 3 --

*/
function changeCollection(arr) {
  const newArr = [];

  for (let i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      const shortArray = arguments[i];

    }
  }

  return newArr;
}

// console.log(changeCollection([1, 2, 3], [a, b, c]));

/*-- 4 --

*/
const users = [
  {
    "_id": "5e36b779dc76fe3db02adc32",
    "balance": "$1,955.65",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "name": "Berg Zimmerman",
    "gender": "male"
  },
  {
    "_id": "5e36b779d117774176f90e0b",
    "balance": "$3,776.14",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "name": "Deann Winters",
    "gender": "female"
  },
  {
    "_id": "5e36b779daf6e455ec54cf45",
    "balance": "$3,424.84",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "name": "Kari Waters",
    "gender": "female"
  }
]


function filterUsers(arr, key, value) {

  if (!Array.isArray(arr)) return new Error("Первый аргумент должен быть массивом.");
  if (typeof key !== 'string' || key === '') return new Error("Не валидный второй аргумент");
  if (value === undefined || value === null) return new Error("Не валидный третий аргумент");

  const newArr = [];

  arr.forEach(item => {
    if (item[key] === value) newArr.push(item)
  });

  return newArr;
}

console.log(filterUsers(users, "age", 33))


/*-- 5 --

*/



/*-- 6 --

*/

/*-- 7 --
*/
