// let = 변수형 const = 상수형 (재선언 불가능)
// var = 옛 변수형 방식 (재할당 및 재선언 가능)
// 코드에서 작성자의 의도를 알 수 있게함
let a = 5
const b = 2
var c = 1
var c = 2

let myName = "heesoo";

console.log(a + b)
console.log(a - b)
console.log(a / b)
console.log(a * b)
console.log("heㅣlo" + myName)

myName = "hesu"

console.log("hello" + myName)


// null vs undefined
// null은 값이 아무것도 없는상태, 비어있음
// undefined는 변수가 메모리에 할당되었지만, 값이 정의되지 않은 상태.

const n = null
//const는 최초 선언 시, 무조건 할당 필요.
let u;

console.log(n, u)

// array

const nonsense = [1,2,'3',4,5,'afwef', null, undefined];
nonsense[0] = "not1";
console.log(nonsense);

nonsense.push("wow");
console.log(nonsense);

// objects: 각 특성(키)과 밸류 형태의 집합으로 만들어 놓은 것/ 특성을 가진 데이터를 저장하도록 해줌
// 상수로 선언하더라도, 안의 특성 값들은 변경 가능 like let

const playerNamer = "hesu";
const playerPoints = "100";
const playerHandsome = false;
const PlaterFat = "little bit";

const player = {
    name: "hesu",
    pointes: 100,
    handsome: false,
    fat: "little bit",
};

console.log(player);
console.log(player.name);
console.log(player["name"]);
player.face = "simple"; // 존재하지 않은 것도 만들 수 있음.
console.log(player);
//console object 자체를 출력하면, 여러개의 Property를 가지고 있는 걸 알 수 있다. console 안의 log()도 그중 하나이다.
console.log(console);

//function
function sayHello(){
    console.log("Hello");
}

const hiToPlayer = {
    name: "hesu",
    sayHi: function (otherPersonName){
        console.log("hi" + otherPersonName + "Nice2m2tU")
    }
}

hiToPlayer.sayHi("popo");

function sample(a){
    console.log(a - 1);
};

//a 매개변수에만 데이터를 넘김. 즉 1만 넘김. 나머지는 무시됨.(에러가 발생하지 않음)
sample(1,2,3,4,5);

//Calculator Object
const calculator = {
    add: function(a, b){
        return (a+b);
    },minus: function(a, b){
        return (a-b);
    },divide: function(a, b){
        return (a/b);
    },powerOf: function(a, b){
        return (a**b);
    }   
}

calculator.add(1, 2)
calculator.divide(1, 2)
calculator.minus(1, 2)
calculator.powerOf(1, 2)


//Return

function calculateKrAge(ageOfForeigner){
    return ageOfForeigner +2;
}

const plusResult = calculator.add(2, 3);
console.log(plusResult)

//Conditional

let age = prompt("How old are you?");
//string 입력 시, NaN(Not a Number) 출력. NaN도 number Type.
age = parseInt(age);
console.log(age);

let age2 = parseInt(prompt("How old are you?2"))
console.log(age2);