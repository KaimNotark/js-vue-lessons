// этот файл запускать не нужно, он не будет работать
// в нём просто примеры кода для лекций

// leture 1

function Product(brand, price, discount) {
  // 1. создается новый объект
  // 2. на этот объект устанавливается ссылка this
  // 3. возвращает этот объект
  this.brand = brand;
  this.price = price;
  this.discount = discount;

  // переносим метод в prototype, поэтому закоммитил
  // this.getPriceWithDiscount = function () {
  //   return (this.price * (100 - this.discount)) / 100;
  // };
}

// lecture 2 prototype

Product.prototype.getPriceWithDiscount = function () {
  return (this.price * (100 - this.discount)) / 100;
};

Product.prototype.setPrice = function (newPrice) {
  this.price = newPrice;
};

const apple = new Product('Apple', 100, 15);
const samsung = new Product('samsung', 200, 25);

// lecture 3 наследования in ES5
// Object.create

const protoforObj = {
  sayHello() {
    return 'Hello !';
  }
};

const obj = Object.create(protoforObj, {
  firsName: {
    value: 'Denis',
  },
});

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

User.prototype.getFillName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype.sayHelloToPeople = function () {
  return `Hello ${this.firstName} ${this.lastName} !`;
};

const user = new User('Denis', 'Ivanov');

// Customer 
function Customer(firstName, lastName, membership) {
  User.apply(this, arguments); // функциональное наследование
  // не наследует методы, которые в прототипе у объекта родителя
  this.membership = membership;
}
//  поэтому добавляют прототипное наследование
Customer.prototype = Object.create(User.prototype);
// при этом теряется конструктор, и его возвращают
Customer.prototype.constructor = Customer;
//  добавляем собственные методы в прототип, но обязательно после строки 69
//  иначе прототип будет перезаписан, т.е. наши методы стерты
Customer.prototype.getMembership = function () {
  return this.membership.toUpperCase();
}

const customer = new Customer('Ivan', 'Sidorov', 'basic');

// lecture 4 классы в ES6

const methodName = 'setNewPrice';

class ProductES {
  // объявляем аргументы
  constructor(brand, price, discount) {
    this._brand = brand;
    this.price = price;
    this.discount = discount;
  }
  // добавляем методы, они автоматически попадают в прототип
  getPriceWithDiscount = function () {
    return (this.price * (100 - this.discount)) / 100;
  };
  //  статические методы (не могут быть вызваны в дочернем экземпляре класса)
  // помещаются в конструктор и могут быть вызваны без инициации класса
  // строкой вида ProductES.plus(1, 2);
  static plus(x, y) {
    return x + y;
  }
  // вычисляемые свойства
  ['setPrice'](newPrice) {
    this.price = newPrice;
  }
  // или так, имя метода в качестве переменной объявляемой вне сласса
  [methodName](newPrice) {
    this.price = newPrice;
  }

  // use Setters and Getters
  get brand() { return this._brand; }
  set brand(name) { this._brand = name; }
}

const newProduct = new ProductES('Samsung', 200, 10);

// lecture 5 наследование в ES6

class UserES {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFillName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

class CustomerES extends UserES {
  constructor(firstName, lastName, membership) {
    super(firstName, lastName);
    this.membership = membership;
  }

  getFillName() {
    const parentRes = super.getFillName(); //обращаемся к методу родителя
    return `${parentRes}, membership: ${this.membership}`;
  }
}

const customerEs = new CustomerES('Denis', 'Ivanov', 'basic');
