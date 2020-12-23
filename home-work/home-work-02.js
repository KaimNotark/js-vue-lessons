
let string = "some test string";

// Получить первую и последнюю буквы строки
console.log("Первая буква: ", string[0]);
console.log("Последняя буква: ", string[string.length - 1]);

// Сделать первую и последнюю буквы в верхнем регистре
console.log("Первая буква заглавная: ", string[0].toUpperCase());
console.log("Последняя буква заглавная: ", string[string.length - 1].toUpperCase());

// Найти положение слова ‘string’ в строке
console.log("положение слова ‘string’ в строке: ", string.indexOf('string'));

// Найти положение второго пробела(“вручную” ничего не считать)
let target = ' ';
let targetPosition = -1;
let targetCounter = 0;
while (targetCounter < 2) {
  targetPosition = string.indexOf(target, targetPosition + 1);
  if (targetPosition === -1) break;
  targetCounter++;
}
console.log("положение второго пробела: ", targetPosition);

// Получить строку с 5 - го символа длиной 4 буквы
console.log("Строка с 5-го символа длиной 4 буквы: ", string.substr(5, 4));

// Получить строку с 5 - го по 9 - й символы
console.log("Строка с 5-го по 9-й символы: ", string.slice(5, 9));

// Получить новую строку из исходной путем удаления последних 6-и символов(то есть исходная строка без последних 6-и символов)
console.log("Строка без 6-ти символов: ", string.slice(0, -6));

// Из двух переменных a = 20 и b = 16 получить переменную string, в которой будет содержаться текст “2016”
let a = 20;
let b = 16;
let str = `${a}${b}`;
console.log("2016 - ", str);
