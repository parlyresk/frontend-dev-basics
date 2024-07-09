/**
 * Destruction(구조분해)
 * 
 */

// ex1 - basic
const user = {
    firstName: '김',
    lastName: '세윤',
    age: '27'
};

// const firstName = user.firstName;
// const lastName = user.lastName;
// const age = user.age;

const {firstName,age} = user;
console.log(firstName,age);

const f=({age})=>{
    console.log(age);
};

f(user);


// ex2 - default value
const goods = {
    name: 'TV',
    price: 10000,
    countStock: 10
}

const {name, price, countStock=0,countSold=0} = goods;
console.log(name,price,countStock,countSold);

// ex3 - 구조 분해 대상이 되는 객체의 속성 이름과 다른 변수 이름을 사용할 때
const person = {
    n:'dori',
    c:'korea'
};

const {n:fullname,c:country}=person;
console.log(fullname,country);

// ex4 - 내부객체(netsted object)의 구조분해
const student ={
    email: 'kiri@naver.com',
    score:{
        math:90,
        korean:40,
        science:65
    }
}

const {email,score:{math,korean,science}} = student;
console.log(email,math,korean,science);

// ex5 함수 파라미터
const avgScore = ({email,score:{math,korean,science,music=0}}) =>{
    console.log(`${email}:${(math+korean+science+music)/4}`);
};
avgScore(student);


// ex6 - 배열의 구조 분해: Basic
const color = [155,200,75];
let [red,green,blue] = color;
console.log(red,green,blue);


// ex7 - 배열의 구조 분해: default Value

[red,green,blue,alpha=0] = color;
console.log(red,green,blue,alpha);

// ex8- 배열의 구조 분해: skip value;
const [,,colorOfBlue]=color;
console.log(colorOfBlue);

// ex9 -swap
let x=10;
let y=20;
console.log(x,y);

let temp=x;
x = y;
y = temp;
console.log(x,y);

[y,x] = [x,y];
console.log(x,y);

// ex10 - ...array : array spread operator
const colors = ['red','orange','yellow','gren','blue','indigo','violet'];
const [firstColor,secondColor,...otherColors] = colors;
console.log(firstColor,secondColor,otherColors);

// 가변 파라미터 함수에 ...[]를 사용할 수 있다
const printColor1 = function(){
    Array.from(arguments).forEach((e)=>console.log(e));
}

printColor1(colors[0],colors[1],colors[2]);
printColor1(...colors);

//  ...[]를 함수의 파라미터 이름으로 사용하기 : arguments 대용으로 사용
const printColor2 = function(...colors){
    console.log(colors);
}

printColor2('red','orange','yellow');