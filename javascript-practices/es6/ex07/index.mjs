// import 하기

// mod1,mod2 unnamed export 모듈에서 import할 때는 반드시 이름을 지정한다
import myFunction from './mod01.mjs';
import myObject from './mod02.mjs';

console.log(myFunction(10,20));
console.log(myObject.add(10,20));
console.log(myObject.subtract(10,20));

// mod3
// 1) named export 모듈의 다수 객체 import시 destruction 하기
import {add} from './mod03.mjs';

console.log(add(15,30));

// 2) named export는 import 대상이 다수이기 때문에 특정 이름을 지정할 수 없음
// 대신에 '* as 이름'을 사용할 수 있음

import * as m from './mod03.mjs'
console.log(m.subtract(50,20));


// mod4
import math,{subtract} from './mod04.mjs';
console.log(math.subtract(40,10));
console.log(subtract(15,25));