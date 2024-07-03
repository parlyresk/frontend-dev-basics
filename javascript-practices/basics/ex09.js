/*
자바스크립트 객체4 - prototype 기반의 상속과 오버라이딩
*/

var MyObject = function(name,age){
    this.name=name;
    this.age=age;

};

MyObject.prototype.school = "hogwart";
MyObject.prototype.course = "magic";
MyObject.prototype.info = function(){
    console.log(this.name + this.age +  this.school + ":" + this.course);
};

// MyObject 인스턴스 생성1
var o1 = new MyObject("seyun",20);
o1.info();
o1.school = 'arcadia';
o1.info();

// MyObject 인스턴스 생성2
var o2 = new MyObject("냐용이",3);
o2.info = function(){
    console.log("kikokaku");
}

o2.info();