/*
자바스크립트 객체1 - object 타입

1. 자바스크립트 객체는 function 타입과 object 타입 2가지 존재
2. function 타입의 객체는 "함수"라고 부름
3. 따라서 자바스크립트에서 객체라고 부르는 것은 object타입의 객체를 가리킨다


*/

// 생성방법1
// 생성자 함수를 사용하는 방법
// 1. Number, Boolean, String, Object, Array 내장 객체(생성자 함수)
// 2. 사용자 정의 생성자 함수

var o1 = new Object();
o1.name = "세윤";
o1.age=27;
o1.another = new Object();
o1.another.name = "parlyresk";
o1.another.age = 20;

console.log(o1);


// 생성방법2
// {} literal 사용하는 방법

var o2 = {};
o2.name = "세윤";
o2.age=27;
o2.another = new Object();
o2.another.name = "parlyresk";
o2.another.age = 20;

console.log(o2);

// 생성방법3
//JavaScript Object Notation : JSON

var o3 = {
name:"세셋",
age:20,

};

console.log(o3);

// XmlHttpRequest 객체를 사용해서 통신(AJAX)을 한다
var response = '{name: "둘리", age:10}';
var userVo = eval("("+response+")");
console.log(userVo.name + ":" + userVo.age);
