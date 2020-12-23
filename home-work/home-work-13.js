
/*-- 1 --
Создайте функцию которая бы умела делать:

minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0
Подсказка, функция minus должна возвращать другую функцию.
*/
function minus(val = 0) {
  let res = val;
  return function (value = 0) {
    return res -= value;
  };
};
console.log('1--', minus(10)(6));
console.log('1--', minus(5)(6));
console.log('1--', minus(10)());
console.log('1--', minus()(6));
console.log('1--', minus()());

// вариант препода
function minusP(num1 = 0) {
  return function (num2 = 0) {
    return num1 - num2;
  };
};

/*-- 2 --
Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:

function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)
*/
function multiplyMaker(val = 1) {
  let result = val;
  return function (value) {
    return result *= value;
  };
};
const multiply = multiplyMaker(2);
console.log('2--', multiply(2));
console.log('2--', multiply(1));
console.log('2--', multiply(3));
console.log('2--', multiply(10));

// вариант препода
function multiplyMakerP(num1 = 2) {
  return function (num2 = 1) {
    return num1 *= num2;
  };
};

/*-- 3 --
Реализовать модуль, который работает со строкой и имеет методы:

a. установить строку
i. если передано пустое значение, то установить пустую строку
ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш
Пример:

модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5

*/
const stringMethods = {
  str: '',
  setString: function (string = '') {
    if (string.length === 0) {
      return this.str = '';
    };
    if (typeof string === 'number' || !isNaN(string)) {
      return this.str = String(string);
    };
    this.str = string;
  },
  getString: function () { return this.str },
  getStringLength: function () { return this.str.length; },
  getStringReverse: function () { return this.str.split('').reverse().join(''); }
};

console.log('3--setString(abcde)', stringMethods.setString('abcde'));
console.log('3--getString()', stringMethods.getString());
console.log('3--getStringLength()', stringMethods.getStringLength());
console.log('3--getStringReverse()', stringMethods.getStringReverse());

// вариант препода
const strModule = (function () {
  let str = '';
  function setStr(val = '') {
    str = String(val);
  }
  function getStr() {
    return str;
  }
  function getStrLength() {
    return str.length;
  }
  function getReverseStr() {
    return str.split('').reverse().join('');
  }
  return {
    setStr,
    getStr,
    getStrLength,
    getReverseStr
  }
}());
/*-- 4 --
Создайте модуль “калькулятор”, который умеет складывать,
умножать, вычитать, делить и возводить в степень. Конечное значение округлить
до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

модуль.установитьЗначение(10); // значение = 10
модуль.прибавить(5); // значение += 5
модуль.умножить(2); // значение *= 2
модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

Также можно вызывать методы цепочкой:

модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
*/
const calc = {
  calcResult: 0,
  setValue: function (val) {
    if (typeof val === 'number') {
      this.calcResult = val;
    } else {
      console.error('please, enter number');
    }
  },
  addition: function (val) { this.calcResult += val },
  subtraction: function (val) { this.calcResult -= val },
  multiplication: function (val) { this.calcResult *= val },
  division: function (val) { this.calcResult /= val },
  exponentiation: function (val) { this.calcResult = Math.pow(this.calcResult, val); },
  getResult: function () { console.log('4-- result=', this.calcResult.toFixed(2)); },
};
calc.setValue(10);
calc.addition(5);
calc.multiplication(2);
calc.getResult();

// вариант препода
const numModule = (function () {
  let num = 0;
  function setNumber(val = 0) {
    num = Number(val);
    return this;
  }
  function plus(val) {
    num += Number(val);
    return this;
  }
  function minus(val) {
    num -= Number(val);
    return this;
  }
  function devide(val) {
    num /= Number(val);
    return this;
  }
  function pow(ex = 2) {
    num = Math.pow(num, ex);
    return this;
  }
  function getNumber() {
    return Number(num.toFixed(2)) || 0;
  }
  return {
    setNumber,
    plus,
    minus,
    devide,
    pow,
    getNumber
  }
}());

console.log(
  numModule
    .setNumber(3)
    .pow(2)
    .getNumber()
);
/*-- 5 --

*/



/*-- 6 --


/*-- 7 --

*/


/*-- 8 --

*/
