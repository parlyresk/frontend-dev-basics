/*
Arrow Function

*/

const power = function(x){
    return x*x;
}
const nums = [1,2,3,4,5];
nums.forEach(function(e){
    process.stdout.write(`${e}:${power(e)}\n`);
});

// ex1
console.log("\n================");
nums.forEach(function(e){
    // const result = (function(x){
    //     return x*x;
    // })(e);
    // const result= ((x)=>{
    //     return x*x;
    // })(e);
    const result= (x=> x*x)(e);
    process.stdout.write(`${e}:${result}\n`);
    
});



// ex2
console.log("\n================");
nums.forEach(function(e){
   
    
    process.stdout.write(`${e}:${(x=> x*x)(e)}\n`);
    
});


// ex3
console.log("\n================");
nums.forEach(e=>
    process.stdout.write(`${e}:${(x=> x*x)(e)}\n`)
);

// ex4: this를 어휘상에서 바인딩 할 수 있다
const seyun ={
    name: 'sese',
    friends: ['gori','dori','mari'],
    printFriends: function(){
        this.friends.forEach((friend)=>{
            console.log(`${friend}의 친구 ${this.name}`);
        });
    }
}
console.log("\n================");
seyun.printFriends();