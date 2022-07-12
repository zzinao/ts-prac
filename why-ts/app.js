// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};
// 아래 js doc의 기본 문법

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {string} address
 */

/**
 *
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url);
}

console.log(fetchUser());

function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
      console.log(user);
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user.name;
      email.innerText = user.email;
      address.innerText = user.address.city;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
