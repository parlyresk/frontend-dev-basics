/*
    Template Literal
*/

const no = 10;
const name = 'seyun';
const email = 'ksy98325@naver.com';

// ex1
console.log('no:'+no+", name:"+name+", email:"+email);
console.log(`no:${no}, name:${name}, email:${email}`);

// ex2: 다중행
console.log("no:10\nname: 세윤\nemail: ksy98325@naver.com");
console.log(`no:${no}
name: ${name}
email: ${email}`);