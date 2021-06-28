const title = document.getElementById("title");

title.innerText = "HI@@@";

console.log(title.id);
console.log(title.className);

const hellos = document.getElementsByClassName("hello")
const hellosTag = document.getElementsByTagName("h1");

//querySelector 99퍼 사용 예정
const hello = document.querySelectorAll("h1.hello:first-child"[0]);
const hello2 = document.querySelector("h1")
console.log(hello);
console.log(hello2);

const hello3 = document.querySelector("div li");
console.dir(hello3);
hello3.style.color = "blue";