// callback 지원 비동기 함수
exports.asyncFn01 = function(param,callback){
    // 비동기 코드 파일 시스템(file io), 네트워크 통신(fetch), SQL to DB, setTimer, ...
    setTimeout(()=>{
        // 비동기 처리
        if(param !== null){
            // 성공
            callback(null,{result:'success'});
        }else{
            // 실패
            callback(new Error('fail'),null);
        }
    },3000);
}

// promise 지원 비동기 함수

exports.asyncFn02 = function(param){
    return new Promise((resolve,reject)=>{
          // 비동기 코드 파일 시스템(file io), 네트워크 통신(fetch), SQL to DB, setTimer, ...
        setTimeout(()=>{
        // 비동기 처리
        if(param !== null){
            // 성공
            resolve({result:'success'});
        }else{
            // 실패
            reject(new Error('fail'));
        }
    },3000);
    });
}