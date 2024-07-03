/* 
자바스크립트 객체2 - function 타입

*/

// 일반함수(실행코드블록이 있는 함수, 관례대로 소문자로 시작함)

var myFunction = function(){
    console.log('일반함수');
}

// 생성자 함수(관례대로 대문자로 시작함)

var MyObject = function(name,age){
    this.name = name;
    this.age = age;
}

var o1 = new MyObject("세세",50);

console.log(o1);

