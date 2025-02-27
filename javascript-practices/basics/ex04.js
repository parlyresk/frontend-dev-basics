/*
    변수의 스코프

    1. 자바스크립트는 코드에서 변수의 범위를 알 수 있다 (정적 스코프)
    2. 자바스크립트는 전역 범위가 있다
    3. ES6 이전
        -  자바와 같은 블록 범위를 지원하지 않는다
        -  함수 범위만 지원
        -  var 키워드를 사용해야 함수 범위를 가진다
    4. ES6 이후 (ES2015~ ES2024)
        - 자바와 같은 블록 범위를 지원한다
        - let 키워드를 사용해서 블록 범위의 변수를 만든다
        - const 키워드를 사용해서 블록 범위의 상수를 만든다
    5. 결론
        const/let를 사용하고 둘 중 하나를 반드시 붙히자(안 붙히면 전역범위가 됨/ hoisting)
*/

var i = 20;
var f = function(){
    var i = 10;
    console.log(i);
    j=100;
    console.log(j);
}
f();
console.log(i);
console.log(j);


if (true){
    var k= 35;
    console.log(k);
}
console.log(k);
