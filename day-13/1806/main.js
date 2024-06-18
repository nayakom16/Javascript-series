// Q.Write a function called isPowerOfTwo that takes an integer num as input and returns true if the num is power of throw, and false otherwise.

const isPowerOfTwo = (num) =>{
    let ans  = false ;
    for(let i=1 ; i<num ; i++){
        if(2 ** i === num){
            ans = true;
        }
    }
    return ans;
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(7));