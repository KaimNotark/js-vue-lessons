
/*-- 1 --
Найти в коде список ul и добавить класс “list”
*/
let list = document.querySelector('ul');

list.classList.add("list");

/*-- 2 --
Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

 Два решения. Первое через селектор ~. Второе через цикл while.
    // 2.1
    // const link = document.querySelector('ul ~ a');
    // link.id = 'link';
    // console.log(link);

    // 2.2
    const list = document.querySelector('ul');
    // Будущая ссылка
    let link;
    // Следующий элемент после списка, стартовая точка.
    let nextElement = list.nextElementSibling;
    // Проверяем пока не найдена ссылка или больше не осталось следующих элементов 
    мы выполняем данный цикл.

    while(!link || !nextElement) {
      // Если больше нет следующего элемента мы останавливаем цикл
      if (!nextElement) break;
      // Если у следующего элемента тег ссылка то мы записываем ее в переменную
      if (nextElement.tagName === 'A') {
        link = nextElement;
      }
      // записываем следующий элемент
      nextElement = nextElement.nextElementSibling;
    }

    console.log(link);
*/
let list2 = document.querySelector('ul')
let link;
let elem = list2.nextElementSibling;

while (!link || !elem) {
  if (!elem) break;
  if (elem.tagName === 'A') link = elem;
  elem = elem.nextElementSibling;
};

link.id = "link";

console.log("2-- link", link.id);


/*-- 3 --
На li через один (начиная с самого первого) установить класс “item”

// Также два варианта решения.
    // 3.1
    const [...liN2] = document.querySelectorAll('li:nth-child(odd)');
    liN2.forEach(li => li.classList.add('item'));
    // 3.2
    const [...allLi] = document.querySelectorAll('li');
    allLi.forEach((li, index) => {
      if (!(index % 2)) {
        li.classList.add('item')
      }
    });
*/
const [...allItems] = document.querySelectorAll('li');
console.log("3-- allItems", allItems);

allItems.forEach((li, index) => {
  if (!(index % 2)) {
    li.classList.add('item')
  }
});


/*-- 4 --
На все ссылки в примере установить класс “custom-link”
*/
const [...allLinks] = document.querySelectorAll('a');
console.log("4-- allLinks", allLinks);

allLinks.forEach(a => a.classList.add('custom-link'));

/*-- 5 --

*/



/*-- 6 --


/*-- 7 --

*/


/*-- 8 --

*/
