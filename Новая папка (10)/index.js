//вывод в консоль
console.log(25)

//переменные

let userName = 'Egor'
console.log(userName)

//типы переменных
userNamer = "Egor"
userNamer = "qwertyuyhhg"
console.log(userNamer)

const year = 2004
console.log(year)

var city = "Moskow"
city = "Minsk"
console.log(city)

function sum(){
    var name = "Egor"
    console.log(name)
}
sum();

{
    let name2 = "egor"
    console.log(name2)
}

//console.log(name2) ОШИБКА!

//Типы данных
let user = "Egor"

let age = 30

let abcd = true;

//Динамическая типизация
let abcde = "hfufi huhfu"
abcde = 50;
abcde = true
console.log(abcde)
//Плохой  пример нейминга
let u = "Bob"
console.log(u)

//Хороший пример
let userNamee = "Bobis"
console.log(userNamee)


//Значение null
let agee = 32
agee = null
console.log(agee)

let userNameee; 
console.log(userNameee) //вывод undefined


//Оператор typeOf
const someName = true
console.log(typeof someName)

const someName2 = 50
console.log(typeof someName2) //вывод типа данных переменной


//операторы сравнения и условия
console.log(10 > 5) //True
console.log(10 < 5) //False
console.log(10 < 5) //False

//тернарный оператор
12 > 1 ? console.log("Верное условие") : console.log("Не верное условие!!!")


//конкатенация строк и шаблонные строки
one = "Hello"
two = "World"
three = one + two
console.log(three)

userName = "Egor"
console.log(`Привет, ${userName}! как ваши дела?`)


//функции

function sayHi(){
    console.log("Привет, пользователь")
}

sayHi() //запуск функции


//function decloration
function sayHi(){
    alert("Hello!")
}

//function expression
one = function(){
    alert("Hello!")
}

function hello(name){
    console.log(`Привет, ${name} как дела?`)
}
hello("Egor")




function razn(a,b){
    var abc = a - b;
    return abc;
}
razn(25,10)


function summ(a,b){
    var abc = a + b;
    return abc;
}
summ(25,10)


function rez(func){
    const result = func(10,7)
    console.log(result)
}
rez(summ);


//самовызывающаяся функция IIFE
(function abcd(){
    console.log("Hello");
})();

let func = (function() {
    console.log("Hello2");
})();

(function (x,y){
     x = 5;
     y = 9;
     console.log(x + y);
})();

const zz = (function (x,y){
    return x + y;
})(20,10);


//стрелочная ф-ия
const qwerty = (x, y) => x + y;
const resul = qwerty(10, 20)

console.log(resul)


const qwerty2 = (x, y) => x + y;
const resul2 = qwerty2(10, 20);
console.log(resul2);


const qwerty3 = (x, y) => {
    return x + y;
}


