/*
Все поля добавлять по очереди, не создавать сразу готовый объект со всеми полями.

*/
// Создать объект с полем product, равным ‘iphone’
const myObject = {
  product: 'iphone'
};

// Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
myObject.price = 1000;
myObject['currency'] = 'dollar';

// Добавить поле details, которое будет содержать объект с полями model и color
myObject.details = {};
myObject.details.model = '';
myObject.details.color = '';

console.log(myObject);