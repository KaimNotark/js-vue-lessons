const btn = document.querySelector('button');
const container = document.querySelector('.container');

function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  // this URL is used for tests: http://jsonplaceholder.typicode.com/posts
  xhr.open("GET", "http://jsonplaceholder.typicode.com/posts");
  xhr.addEventListener("load", () => {
    // console.log('request loaded');
    // инфа пришедшая от сервера
    // console.log(xhr.responseText); 
    // поскольку ответ от сервера приходит в формате JSON, мы переделаем его в массив
    const response = JSON.parse(xhr.responseText);
    cb(response);
  });

  xhr.addEventListener('error', () => {
    console.log('error');
  });

  xhr.send();
};

function renderPosts(response) {
  // console.log(response);
  // создаем карточки чтобы вывести на странице инфу с сервера
  const fragment = document.createDocumentFragment();
  response.forEach(post => {
    const card = document.createElement('div');
    card.classList.add('card');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = post.title;

    const article = document.createElement('p');
    article.classList.add('card-text');
    article.textContent = post.body;

    cardBody.appendChild(title);
    cardBody.appendChild(article);

    // console.log(cardBody);

    card.appendChild(cardBody);
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
};

btn.addEventListener('click', e => {
  getPosts(renderPosts);
});
