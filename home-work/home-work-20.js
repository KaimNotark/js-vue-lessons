/*
Разметка и стили к задаче

<ul class="menu">
  <li class="dropdown-item">
    <span>Dropdown menu item</span>
    <div class="dropdown-menu d-none">
      <ul class="dropdown-list">
        <li>Dropdown item 1</li>
        <li>Dropdown item 2</li>
      </ul>
      <!-- / .dropdown-list -->
    </div>
    <!-- / .dropdown-menu -->
  </li>
  <!-- / .dropdown-item -->
  <li>
    <span>Menu item</span>
  </li>
  <!-- / li -->
  <li class="dropdown-item">
    <span>Dropdown menu item 2</span>
    <div class="dropdown-menu d-none">
      <ul class="dropdown-list">
        <li>Second Dropdown item 1</li>
        <li>Second Dropdown item 2</li>
      </ul>
      <!-- / .dropdown-list -->
    </div>
    <!-- / .dropdown-menu -->
  </li>
  <!-- / .dropdown-item -->
</ul>

Стили

.d-none {
  display: none;
}

.dropdown-item {
  cursor: pointer;
}
*/


/*-- 1 --
Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты
через класс .d-none. При клике на dropdown-item должен отображаться
блок dropdown-menu который вложен именно в тот dropdown-item на котором
произошел клик. При повторном клике на этот же dropdown-item блок
dropdown-menu должен закрыться. При клике на любой другой dropdown-item
уже открытый dropdown-menu должен закрываться а на тот который кликнули открываться.
*/
const dropdownItems = document.querySelectorAll('.dropdown-item');
// В данной переменной мы будем хранить текущее открытое меню
let currentOpenedMenu = null;

function toggleDropdownMenu(e) {
  // получаем блок меню внутри .dropdown-item
  const menu = e.currentTarget.querySelector('.dropdown-menu');
  // метод toggle возвращает булевое значение, если клас удален то вернет false а если добавлен то true. Это значение мы сохраняем в переменную
  const isAdded = menu.classList.toggle('d-none');
  // если в currentOpenedMenu уже есть блок и он не равен текущем menu то мы его скрываем
  if (currentOpenedMenu && currentOpenedMenu !== menu) {
    currentOpenedMenu.classList.add('d-none');
  }
  // Если класс d-none был удален то значет меню видимо и мы его сохраняем в переменную currentOpenedMenu
  if (!isAdded) {
    currentOpenedMenu = menu;
  }
}

dropdownItems.forEach(d => d.addEventListener('click', toggleDropdownMenu));

/*-- 2 --

*/


/*-- 3 --

*/

/*-- 4 --

*/


/*-- 5 --

*/



/*-- 6 --


/*-- 7 --

*/


/*-- 8 --

*/
