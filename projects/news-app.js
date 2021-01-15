/*
На данный момент newsapi.org, которое мы используем в уроках, 
не работает на прямую из браузера.
Вы делаете все точно так же как и в уроках, единственное, вместо этой строки:

const apiUrl = 'http://newsapi.org/v2';

Используете эту:

const apiUrl = 'https://news-api-v2.herokuapp.com';

my API-key: 6adb72a4255f454c9c6d85d9077b5f07
*/

// Custom Http Module
function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.addEventListener('load', () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener('error', () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}
// Init http module
const http = customHttp();

const newsService = (function () {
  const apiKey = '6adb72a4255f454c9c6d85d9077b5f07';
  const apiUrl = 'https://news-api-v2.herokuapp.com';

  return {
    topHeadlines(country = 'ua', category = '', cb) {
      http.get(`${apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`, cb);
    },
    everything(query, cb) {
      http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb);
    }
  };
})();

const form = document.forms['newsControls'];
const countrySelect = form.elements['country'];
const categorySelect = form.elements['category'];
const searchInput = form.elements['search'];

form.addEventListener('submit', e => {
  e.preventDefault();
  loadNews();
});

//  init selects
document.addEventListener('DOMContentLoaded', function () {
  M.AutoInit();
  loadNews();
});

function loadNews() {
  showPreloader();

  const country = countrySelect.value;
  const category = categorySelect.value;
  const searchText = searchInput.value;

  if (!searchText) {
    newsService.topHeadlines(country, category, onGetResponse);
  } else {
    newsService.everything(searchText, onGetResponse);
  }
};

function onGetResponse(err, res) {

  removePreloader();

  if (err) {
    showAlert(err, 'error-msg');
    return;
  };

  if (!res.articles.length) {
    // show empty message
    return;
  };

  renderNews(res.articles);
};

function renderNews(news) {
  const newsContainer = document.querySelector('.news-container .row');
  if (newsContainer.children.length) {
    clearContainer(newsContainer);
  };
  let fragment = '';

  news.forEach(newsItem => {
    console.log(newsItem.urlToImage);
    const el = newsTemplate(newsItem);
    fragment += el;
  });

  newsContainer.insertAdjacentHTML('afterbegin', fragment)
};

function newsTemplate({ urlToImage, title, description, url }) {

  return `
<div class="col s12">
  <div class="card">
    <div class="card-image">
      <img src="${urlToImage}">
      <span class="card-title">${title || ''}</span>
    </div>
    <div class="card-content-news">  
      <p>${description || ''}</p>  
    </div>  
    <div class="card-action">
      <a href="${url}">Read more</a>
    </div>
  </div>
</div>
`;
};

// создание всплывающего сообщения об ошибке
// применяют готовое решение из фреймворка
// возможно настроить это сообщение, настройки см. на сайте фреймворка
function showAlert(msg, type = "success") {
  M.toast({ html: msg, classes: type });
};

// очистка страницы перед добавлением новых новостей
// описаны два способа, первый закомментирован
function clearContainer(container) {

  // container.innerHTML='';

  let child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  };
};

// прелоадер (индикатор загрузки = прогресс-индикатор)
// тоже берётся из фреймворка
function showPreloader() {
  document.body.insertAdjacentHTML('afterbegin',
    `
  <div class="progress">
    <div class="indeterminate">
    </div>
  </div>
`
  );
};

function removePreloader() {
  const loader = document.querySelector('.progress');
  if (loader) { loader.remove(); };
};