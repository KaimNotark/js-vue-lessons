
/*-- 1 --
Создать объект, который описывает ширину и высоту
прямоугольника, а также может посчитать площадь фигуры:

*/
const rectangle = {
  width: 10,
  height: 20,
  getSquare: function () { return this.width * this.height }
  // препод написал так:
  // getSquare() { return this.width * this.height }
};

console.log("Площадь", rectangle.getSquare());

/*-- 2 --
Создать объект, у которого будет цена товара и его скидка, а также
два метода: для получения цены и для расчета цены с учетом скидки:
price.getPrice(); // 10
price.getPriceWithDiscount(); // 8.5
*/
const price = {
  price: 10,
  discount: '15%',
  getPrice: function () { return this.price },
  getPriceWithDiscount: function () {
    const discount = this.price / 100 * parseInt(this.discount);
    return this.price - discount
  }
};

console.log('цена', price.getPrice());
console.log('цена со скидкой', price.getPriceWithDiscount());

/*-- 3 --
Создать объект, у которого будет поле высота и метод “увеличить
высоту на один”. Метод должен возвращать новую высоту:

object.height = 10;
object.inc(); // придумать свое название для метода
object.height; // 11;
*/
const plusOneObj = {
  height: 1,
  getPlusOne: function () {
    this.height += 1;
    return this.height
  }
};

console.log('plusOneObj', plusOneObj.getPlusOne());
console.log('plusOneObj', plusOneObj.getPlusOne());
console.log('plusOneObj', plusOneObj.getPlusOne());
console.log('plusOneObj', plusOneObj.getPlusOne());
/*-- 4 --
Создать объект “вычислитель”, у которого есть числовое свойство
“значение” и методы “удвоить”, “прибавить один”, “отнять один”.
Методы можно вызывать через точку, образуя цепочку методов:

const numerator = {
value: 1,
double: function () {...},
plusOne: function () {...},
minusOne: function () {...},
}

numerator.double().plusOne().plusOne().minusOne();
numerator.value // 3
*/
const numerator = {
  value: 1,
  double: function () {
    this.value *= 2;
    return this
  },
  plusOne: function () {
    this.value += 1;
    return this
  },
  minusOne: function () {
    this.value -= 1;
    return this
  },
};
console.log('numerator value before', numerator.value);
numerator.double().plusOne().plusOne().minusOne();
console.log('numerator value after', numerator.value);

/*-- 5 --
Создать объект с розничной ценой и количеством продуктов.
Этот объект должен содержать метод для
получения общей стоимости всех товаров (цена * количество продуктов)
*/

const productObj = {
  price: '10 rub',
  quantity: 20,
  getSum: function () {
    const price = parseInt(this.price);
    const sum = price * this.quantity;
    return sum
  }
};

console.log('productObj getSum', productObj.getSum());

/*-- 6 --
Создать объект из предыдущей задачи. Создать второй объект,
который описывает количество деталей и цену за одну деталь.
Для второго объекта нужно узнать общую стоимость всех деталей,
но нельзя создавать новые функции и методы.
Для этого “позаимствуйте” метод из предыдущего объекта.
*/
const detaliObj = {
  price: '20 rub',
  quantity: 40
};

console.log('detaliObj', productObj.getSum.call(detaliObj));

/*-- 7 --
Даны объект и функция:

let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};

Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes
*/
let sizes = { width: 5, height: 10 };
const getSquare = function () { return this.width * this.height };

console.log('007', getSquare.call(sizes));

/*-- 8 --
let element = {
height: 25,
getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight;
getElementHeight(); // undefined

Измените функцию getElementHeight таким образом,
чтобы можно было вызвать getElementHeight() и получить 25.
*/
let element = {
  height: 25,
  getHeight: function () { return this.height; }
};

let getElementHeight = element.getHeight.bind(element);
console.log('008', getElementHeight);
console.log('008 ()', getElementHeight());
// getElementHeight(); // undefined