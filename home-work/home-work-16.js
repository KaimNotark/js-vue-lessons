
/*-- 1 --
Найти параграф и получить его текстовое содержимое (только текст!)
*/
let paragraph = document.querySelector('p');

console.log(paragraph);
console.log(paragraph.textContent);

/*-- 2 --
Создать функцию, которая принимает в качестве аргумента узел DOM и
возвращает информацию (в виде объекта) о типе узла, об имени узла и о
количестве дочерних узлов (если детей нет - 0).
*/
function getNodeInfo(node) {
  if (!(node instanceof HTMLElement)) return;

  return {
    nodeType: node.nodeType,
    nodeName: node.nodeName,
    numberOfChild: node.childNodes.length
  }
};

console.log("2--", getNodeInfo(paragraph));


/*-- 3 --
Получить массив, который состоит из текстового содержимого ссылок внутри списка:

getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
*/
// const list = document.querySelector('ul');

// function getTextFromUl(ul) {
//   if (!(ul instanceof HTMLElement)) return;

//   const [...links] = ul.querySelectorAll('a') || [];
//   console.log("links", links);

//   return links.map(a => a.textContent);
// }
const list = document.querySelector('ul');
console.log("3-- list", list);

function getTextFromLinks(list) {
  if (!(list instanceof HTMLElement)) return;

  const [...links] = list.querySelectorAll('a');
  console.log('3-- links', links);

  return links.map(elem => elem.textContent);
};

console.log("3-- text of links", getTextFromLinks(list));

/*-- 4 --
В параграфе заменить все дочерние текстовые узлы на “-text-”
(вложенные теги должны остаться). Конечный результат:

-text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
*/
const [...pChildNodes] = document.querySelector('p').childNodes;

pChildNodes.forEach(child => {
  if (child.nodeType === 3) {
    child.textContent = '-text-'
  }
});

/*-- 5 --

*/



/*-- 6 --


/*-- 7 --

*/


/*-- 8 --

*/
