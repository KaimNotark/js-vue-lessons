
/*-- 1 --
Не используя innerHTML, добавить в список несколько li 
с классом ‘new-item’ и текстом ‘item’ + номер li:

<ul>
<li><a href="#">Link1</a></li>
...
<li class=”new-item”>item 5</li>
<li class=”new-item”>item 6</li>
</ul>

Вручную номер li не ставить оно должно подставляться 
в зависимости от кол-ва лишек в списке.

*/
const list = document.querySelector('ul');
// Текущее количество элементов в списке
const currentCounts = list.children.length;
// Количество новых элементов
const newLiCounts = 3;

for (let i = 0; i < newLiCounts; i++) {
  let li = document.createElement('li');
  li.classList.add('new-item');
  li.textContent = `item ${currentCounts + i + 1}`;
  list.appendChild(li);
}

/*-- 2 --
В каждую ссылку, которая находятся внутри списка ul 
добавить по тегу strong (в каждую ссылку один - strong).
*/
const [...links] = document.querySelectorAll('ul a');
console.log("2-- links", links);

links.forEach(link => link.insertAdjacentHTML('beforeend', '<strong>Strong</strong>'));

/*-- 3 --
В начало документа (в начало body) добавить картинку img с
атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке.
Для создания элемента используйте метод createElement.
*/
const img = document.createElement('img');
img.setAttribute('src', 'https://via.placeholder.com/150/92c952');
img.setAttribute('alt', 'some image');
document.body.insertAdjacentElement('afterbegin', img);

/*-- 4 --
Найти на странице элемент mark, добавить в конец содержимого текст “green”
и на элемент установить класс green
*/
const mark = document.querySelector('mark');
mark.insertAdjacentText('beforeend', 'green');
mark.classList.add('green');

/*-- 5 --
Отсортировать li внутри списка в обратном порядке (по тексту внутри)
*/
const list2 = document.querySelector('ul');
// Сортируем массив элементов по текстовому содержимому
const listItems = [...list2.children].sort((prev, next) => {
  return prev.textContent > next.textContent ? -1 : 1;
});
// Очищаем текущее содержимое списка
list2.innerHTML = '';
// Генерируем новое содержимое из отсортированного массива элементов
listItems.forEach((item) => list2.appendChild(item));


/*-- 6 --


/*-- 7 --

*/


/*-- 8 --

*/
