
// Получить число pi из Math и округлить его до 2-х знаков после точки
let roundedPiNumber;
roundedPiNumber = +Math.PI.toFixed(2);
console.log("Округлённое число ПИ = ", roundedPiNumber);

// Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
const arrayOfIntegerNumbers = [15, 11, 16, 12, 51, 12, 13, 51];
let minNumberOfArray;
let maxNumberOfArray;

minNumberOfArray = Math.min(...arrayOfIntegerNumbers);
maxNumberOfArray = Math.max(...arrayOfIntegerNumbers);

console.log("массив чисел: ", arrayOfIntegerNumbers);
console.log("максимальное число массива = ", maxNumberOfArray);
console.log("минимальное число массива = ", minNumberOfArray);

/*
Работа с Math.random:
  a. Получить случайное число и округлить его до двух цифр после запятой
  b. Получить случайное целое число от 0 до X. X - любое произвольное число.
*/
let randomRoundedNumber;
let randomIntegerNumber;

randomRoundedNumber = +Math.random().toFixed(2);
randomIntegerNumber = Math.floor(Math.random() * 100);

console.log("случайное округлённое число: ", randomRoundedNumber);
console.log("случайное целое число: ", randomIntegerNumber);

// Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let summa = 0.6 + 0.7;

console.log("0.6 + 0.7 = ", summa);
console.log("0.6 + 0.7 = ", +summa.toFixed(1));

// Получить число из строки ‘100$’
const line = "100$";

console.log("строка: ", line);
console.log("число из строки " + line + ": ", parseInt(line));