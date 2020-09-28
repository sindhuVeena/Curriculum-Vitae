const date = new Date();
console.log(date);
let dinam = date.getDate();
let month = date.getMonth();

let year = date.getFullYear();

let fulldate = document.querySelector("#tarik");
fulldate.textContent = `Date : ${dinam}/${month + 1}/${year}`;
