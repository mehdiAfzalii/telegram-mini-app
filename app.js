// const tg = window.Telegram.WebApp;

// tg.ready();

// console.log(tg.colorScheme);
// console.log(tg.themeParams);

// const button = document.getElementById("btn");

// button.addEventListener("click", function () {
//     alert("Hello From Swan");
// });

// تست اطلاعات کاربر

const tg = window.Telegram.WebApp;

tg.ready();

const user = tg.initDataUnsafe.user;

console.log(user);