/**
 *  promise 지원 비동기 함수 사용법2: async ~ await
 * 
 */

const {asyncFn02} = require('./async-fns');

// test: success
const fn = async (param) => {
    const result = await asyncFn02(param);
    console.log(result);
}

fn("paramamam");
fn(null);
console.log('wait..');
console.log('wait..2');



