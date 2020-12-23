/*
Разметка к задачам

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .container {
      width: 400px;
      height: 400px;
      margin: 20px auto;
      display: flex;
    }

    .box {
      width: 80%;
      height: 80%;
      border: 1px solid black;
      display: flex;
      margin: auto;
      background-color: #fff;
      transition: all 0.2s ease-in;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box">
      <div class="box">
        <div class="box">
          <div class="box">
            <div class="box"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
*/
/*-- 1 --
При наведении на любой из блоков с классом .box все его дочерние элементы
должны поменять свой фон на один из списка. ВАЖНО, только дочерние относительно
блока на который навели мышь.

Вот массив (список) рандомных цветов

['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
*/


/*-- 2 --
Возращаете фон обратно когда пользователь уводит мышку с блока.
*/


/*-- 3 --
Добавление фона из первой части задания сделать с задержкой в 200мс.
Т.е каждый последующий блок должен изменить свой фон за 200мс позже
предыдущего. Например если первый блок поменял
через 200мс то следующий должен поменять через 400 и т.д.
*/
function setRandomColor(el) {
  const colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
  // Выбираем произвольный цвет из массива
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  el.style.background = randomColor;
}

function resetColor(el) {
  el.style.background = '';
}

function onBoxHover(e) {
  // Создаем массив элементов которые будут менять фон.
  let elements = [e.currentTarget];
  let currentEl = e.currentTarget;
  // Проходимся циклом по всем дочерним элементам до самого последнего
  while (currentEl) {
    elements = [...elements, ...currentEl.children];
    currentEl = currentEl.children[currentEl.children.length - 1];
  }
  // Перебираем сформированный массив и устанавливаем на каждый элемент цвет в таймауте
  elements.forEach((el, index) => setTimeout(setRandomColor, 200 * (index + 1), el));
}

function onMouseLeave(e) {
  resetColor(e.currentTarget);
}

document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseenter', onBoxHover));
document.querySelectorAll('.box').forEach(box => box.addEventListener('mouseleave', onMouseLeave));
/*-- 4 --

*/


/*-- 5 --

*/



/*-- 6 --


/*-- 7 --

*/


/*-- 8 --

*/
