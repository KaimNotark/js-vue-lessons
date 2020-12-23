
/*-- 1 --
Зная структуру html, с помощью изученных методов получить (в консоль):

1. head

2. body

3. все дочерние элементы body и вывести их в консоль.

4. первый div и все его дочерние узлы

а) вывести все дочерние узлы в консоль

б) вывести в консоль все дочерние узлы, кроме первого и последнего

Для навигации по DOM использовать методы, которые возвращают только элементы
*/
let headElement = document.head;
let bodyElement = document.body;
let bodyChildren = bodyElement.children;
let firstDiv = bodyElement.firstElementChild;
// let lastDiv = bodyElement.lastElementChild;
let firstDivChildren = firstDiv.children;



const notFirstAndLast = [...firstDivChildren].filter(
  p => p !== firstDiv.firstElementChild && p !== firstDiv.lastElementChild
);

console.log("head ", headElement);
console.log("body ", bodyElement);
console.log("bodyChildren", bodyChildren);
console.log("firstDiv", firstDiv);
console.log("firstDivChildren", firstDivChildren);
console.log("notFirstAndLast", notFirstAndLast);




// for (let i = 0; i < body.length; i++) {
//   console.log('bodyChild', body[i].childNodes);
// }



/*-- 2 --
Дана разметка.

<div>
    <article>
      <p>Lorem ipsum dolor sit amet, odio omnesque ius cu, quo ex atqui antiopam. At detracto menandri eos. Duo in causae viderer, graeci <a href="#">reprehendunt</a> has in. Decore <mark>nemore</mark> philosophia te pro, nobis legere causae ex mei, odio putant mentitum ea ius. Vix nostro deserunt explicari eu.</p>

    </article>
  </div>
  <ul>

    <li><a href="#">Link1</a></li>
    <li><a href="#">Link2</a></li>
    <li><a href="#">Link3</a></li>
    <li><a href="#">Link4</a></li>
  </ul><span></span>

  <a href="#">Some link</a>



Создать функцию, которая принимает два элемента. Функция проверяет, 
является ли первый элемент родителем для второго:



isParent(parent, child);

isParent(document.body.children[0], document.querySelector('mark'));

// true так как первый див является родительским элементом для mark



isParent(document.querySelector('ul'), document.querySelector('mark'));

// false так ul НЕ является родительским элементом для mark

Функция принимает только DOM объекты. Обязательно проверяйте это.
// Проверяем что переданные элементы являются HTML элементами
*/
function isFirstParentForSecond(firstElement, secondElement) {
  // console.log("firstElement", firstElement);
  // console.log("secondElement", secondElement);

  if (!(firstElement instanceof HTMLElement) || !(secondElement instanceof HTMLElement)) return;

  let isParent = false;
  let parentOfSecondElement = secondElement.parentElement;
  // console.log("parentOfSecondElement", parentOfSecondElement);

  while (parentOfSecondElement) {
    // console.log("while", parentOfSecondElement);
    isParent = parentOfSecondElement === firstElement
    if (isParent) {
      break;
    }

    parentOfSecondElement = parentOfSecondElement.parentElement;
  }

  return isParent;
}

console.log(isFirstParentForSecond(document.body.children[0], document.querySelector('mark')));
console.log(isFirstParentForSecond(document.querySelector('ul'), document.querySelector('mark')));

// isFirstParentForSecond(document.body.children[0], document.querySelector('mark'));
// isFirstParentForSecond(document.querySelector('ul'), document.querySelector('mark'));

/*-- 3 --
Используя разметку из предыдущего задания.
Получить список всех ссылок, которые не находятся внутри списка ul.
*/
const filteredLinks = [...document.links].filter(a => !a.closest('ul'));
console.log(filteredLinks);

/*-- 4 --
Используя разметку из предыдущего задания.
Найти элемент, который находится перед и после списка ul.
*/
const ul = document.querySelector('ul');
const prev = ul.previousElementSibling;
const next = ul.nextElementSibling;

console.log("prev", prev);
console.log("next", next);
/*-- 5 --

*/



/*-- 6 --


/*-- 7 --

*/


/*-- 8 --

*/
