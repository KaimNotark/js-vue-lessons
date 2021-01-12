/*
Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com. 
Получив ответ от сервера вывести имена пользователей на страницу. 
При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем. 
Для визуальной части можно использовать bootstrap или другие фреймворки.
*/
const baseUrl = "http://jsonplaceholder.typicode.com";

const btn = document.querySelector('button');
const container = document.querySelector('.container');
// const cardContainer = document.querySelector('.card-container');

function getPosts(cb) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `${baseUrl}/users`);

  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.responseText);
    cb(response);
    console.log(response);
  });

  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send();
};

function renderPosts(response) {
  const fragment = document.createDocumentFragment();

  response.forEach(post => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = post.name;

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('not-show');
    cardContainer.classList.add('card-container');
    cardContainer.classList.add(`user-id__${post.id}`);

    const username = document.createElement('p');
    username.classList.add('card-text');
    username.textContent = "username: " + post.username;

    const phone = document.createElement('p');
    phone.classList.add('card-text');
    phone.textContent = "phone: " + post.phone;

    const website = document.createElement('p');
    website.classList.add('card-text');
    website.textContent = "website: " + post.website;

    cardBody.appendChild(title);
    cardBody.appendChild(cardContainer);

    cardContainer.appendChild(username);
    cardContainer.appendChild(phone);
    cardContainer.appendChild(website);

    card.appendChild(cardBody);

    fragment.appendChild(card);
  });

  container.appendChild(fragment);

  const showCard = document.querySelector('.card-container');
  console.log(showCard);
  showCard.addEventListener('click', () => {
    showCard.classList.add('not-show');
  });
};

btn.addEventListener('click', e => {
  getPosts(renderPosts);
});

container.addEventListener("click", onUserClick);

function onUserClick(e) {
  e.preventDefault();
  const target = e.target.nextSibling;
  // console.log("target--", target);
  target.classList.toggle('not-show');
}

