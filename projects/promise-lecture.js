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

// lecture 3
