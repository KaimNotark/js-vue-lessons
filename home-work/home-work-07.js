
/*-- 1 --
Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
Если нет ни одного аргумента, вернуть ноль: multiply() // 0
*/
function multiply(firstArg) {
  if (!firstArg) return 0;
  for (let i = 0; i < arguments.length - 1; i++) {
    firstArg *= arguments[i + 1];
  };
  return firstArg;
}

console.log('произведение всех чисел = ', multiply(2, 4, 5, 6));
console.log('произведение всех чисел = ', multiply());


/*-- 2 --
Создать функцию, которая принимает строку и возвращает строку-перевертыш: 
reverseString(‘test’) // “tset”.
*/
function reverseString(str) {
  // if (!str) return 'Не корректная строка.';

  let originalText = String(str);
  let invertedText = '';
  let textLength = originalText.length;

  while (textLength--) invertedText += originalText[textLength];

  return invertedText;
}
console.log(reverseString('test'));
console.log(reverseString(''));
console.log(reverseString(null));
console.log(reverseString(undefined));
console.log(reverseString());

/*-- 3 --
Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
где каждый символ разделен пробелом и заменен на юникод-значение символа:
getCodeStringFromText(‘hello’) // “104 101 108 108 111”
подсказка: для получения кода используйте методы charCodeAt и trim
*/
function getCodeStringFromText(str) {
  let codeString = '';
  let string = String(str);
  for (let i = 0; i < string.length; i++) {
    codeString += string.charCodeAt(i) + ' ';
  }
  return codeString.trim();
}

console.log(getCodeStringFromText("hello"));
console.log(getCodeStringFromText(''));
console.log(getCodeStringFromText(null));
console.log(getCodeStringFromText(undefined));
console.log(getCodeStringFromText(1234));

/*-- 4 --
Создать функцию угадай число. Она принимает число от 1-10 
(обязательно проверить что число не больше 10 и не меньше 0). 
Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали 
то возвращает “Вы выиграли” если нет,
 то “Вы не угадали ваше число 8 а выпало число 5”. 
Числа в строке указаны как пример вы подставляете реальные числа.
*/
function getRandomNumber() {
  let randomNumber = null;
  randomNumber = +Math.random().toFixed(1) * 10;
  return randomNumber;
}

function compareTwoNumbers(firstNumber, secondNumber) {
  return firstNumber === secondNumber
}

function checkNumberRange(minValue, maxValue, checkingValue) {
  return minValue <= checkingValue && checkingValue <= maxValue
}

function checkValidation(number) {
  return typeof number !== 'number' || isNaN(number)
}


function guessTheNumber(num) {
  const number = Number(num);

  if (checkValidation(number)) {
    return new Error('Пожалуйста введите валидное число.')
  } else {

    if (checkNumberRange(0, 10, num)) {
      let randomNumber = getRandomNumber();
      if (compareTwoNumbers(randomNumber, num)) {
        return "Вы угадали!"
      } else
        return `Вы не угадали. Ваше число ${num}, а выпало число ${randomNumber}`
    } else
      return new Error("Ошибка! Введённое число должно быть в диапазоне от 0 до 10")
  }
}

console.log(guessTheNumber(21));


/*-- 5 --

*/



/*-- 6 --

*/

/*-- 7 --
*/
