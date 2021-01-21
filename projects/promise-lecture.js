// этот файл запускать не нужно, он не будет работать 
// в нём просто примеры кода для лекций

// leture 1

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(Math.random()), 2000);
});

console.log(promise);

promise
  .then(a => {
    console.log(a);
    return a;
  })
  .then(b => console.log(b))
  .catch(err => console.log(err));

promise.then(c => console.log(c));

//  lecture 2

function getPost(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(`https://jsonplaceholder.typicode.com/posts/${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
  });
}

function getPostComment(post) {
  const { id } = post;
  return new Promise((resolve, reject) => {
    myHttp.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve({ post, comment: res });
      });
  });
}

function getUserCreatedPost(data) {
  const { post: { userID } } = data;
  return new Promise((resolve, reject) => {
    myHttp.get(`https://jsonplaceholder.typicode.com/user/${userId}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve({ ...data, user: res });
      });
  })
}

getPost(5)
  .then(post => getPostComment(post))
  .then(data => getUserCreatedPost(data))
  .then(fullData => console.log(fullData))
  .catch(err => console.log(err))
  .finally(() => console.log('finally'));

// есть еще возможность обработать всё разом
Promise.all([
  getPost1(1),
  getPost2(1),
  getPost3(1),
])
  .then(fullData => console.log(fullData))
  // или можно деструктурировать строчку 72 так:
  // .then(([post, comment, user]) => console.log(post, comment, user))
  .catch(err => console.log(err));

// lecture 3 fetch

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    return response.json();
  })
  .then(posts => console.log(posts))
  .catch(err => console.log(err));

// --
function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => resolve(posts))
      .catch(err => reject(err));
  });
}

getPost(1).then(post => console.log(post));

// --
function getPost2(id) {
  return Promise.resolve().then(() => {
    const [userType, userId] = id.split('-');
    return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then(response => response.json());
  });
}

getPost2('user-1')
  .then(post => console.log(post))
  .catch(err => console.log(err));

// lecture 4 async await

async function getPost(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  console.log(response);

  const data = await response.json();
  return data;
}

getPost(1)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// -- конструкция ниже удобна для обнаружения и обработки ошибок
// ошибку перехватывают, выводят в консоль и передают наружу

async function getPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then(res => res.json());

    return response;

  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

// -- несколько запросов

async function getAll() {
  const [res1, res2] = await Promise.all([getPost(1), getPost2(2)]);
  console.log(res1, res2);
}