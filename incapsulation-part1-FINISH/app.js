// const User = {
//     name: 'Denis',
//     getName() {
//         return this.name;
//     },
//     setName(name) {
//         this.name = name;
//     }
// };

// function User(name) {
//     let userName = name;

//     return {
//         getName() {
//             return userName;
//         },
//         setName(name) {
//             userName = name;
//         }
//     }
// }

// const denis = new User('Denis');

// function User(name) {
//     let userName = name;

/* freeze запрещает переопределение внутри объекта, т.е.
ничего нельзя в нём поменять */
//     return Object.freeze({
//         getName() {
//             return userName;
//         },
//         setName(name) {
//             userName = name;
//         }
//     });
// }

// const denis = new User('Denis');


function User(name) {
    /* Symbol()  генерирует уникальное имя, которое нельзя посмотреть
    т.е. оно скрыто */
    const symbol = Symbol();
    // const symbol2 = Symbol();
    // console.log('symbol=', symbol);
    // console.log('symbol2=', symbol2);

    return {
        [symbol]: name,
        getName() {
            return this[symbol];
        },
        setName(name) {
            this[symbol] = name;
        }
    }
}

const denis = new User('Denis');
