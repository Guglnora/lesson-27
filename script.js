"use strict";
// строгий режим для обработки данных

let number = 1;

// Данные которые без скопок = числа
// данные которые указыватеся в скопки называютя строки "string"

console.log(number);

let text = "Gulnara";

console.log(text);

// Если текст + цифра = это будет означать склеивания
// + Это операция склеисания и сложения


// true = истина
// false = лож


// Что такое массив? 
//Массив: это коробка внутри есть еще отдельные коробки для храниенеия данных

// Создание объктов начинатеся с фигурных скобок

// let obj = {
//     name: "Gilnara",
//     // name это название первого объеекта
//     // : это разделение между объектом и его значением
//     // " внутри ковычек указывается значние объекта "
//     // конец строки заканчиавние на, 
//     age: 11,
//     location: "6 micro"
// };

// Перый вариант получения данных объекта
// Это конманда для вывода данных на экран
// obj - это перемена
// вотрой вариант . это операция обращиеня к объекту
// obj - это перемена
// [] указания позиции и уточнения объекта 
// в конце [] скобок запятые не укзаываются


// console.log("Name:" + obj.name + obj.age + "location:" + obj.location);

// console.log(obj ["name"]);

// Масивы созадется с помощью кватратных скобок []
// В Массивах используется сразу значения
// для получения необходимоа использовать порядковый номер
// let arr = ["айфон", 'кино', "книга"];


// console.log(arr.айфон); // undefined не аонятно и не определено

// console.log(arr[1]);

let person = {
     name: "Jhon",
     age: 22,
     year: 1999,
     location: "USA",
     job: "programmist"

     
};

console.log("Name:" + person.name + "Age:" + person.age + "year:" + person.year + "location:" + person.location + "job:" + person.programmist);


// Базовые функции . Взаимодействие с пользователям

console.log("Сщщбщение"); // Данная команда нужна для того чтобы вывести сообщение в console.
                              // Модальное окно
alert("Всем привет!")

var years = prompt('Сколько вам лет?', 100);
// Пропст состоит из 2 частей
// 1 часть  вопрос
// 2 часть ответ по умолчанию
// Promt запоминает веденные данные для дальшнейего обработки

alert('Вам ' + years + ' лет!');

var years = prompt('Сколько вам лет?', "");

var msg;
if(result == "4") {
     msg = "верно";
} else {
     msg = "неверно";
}

alert(msg);

confirm("Результать сложения 2+2 будет равен 4?");


