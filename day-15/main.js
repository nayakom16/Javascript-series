// Q. write  a function to find a factorial of the number.


const factorial = (str)=>{
    let fact = 1;
    for ( let i=1 ; i <= str ; i++){
        fact = fact*i;
    }
    return fact;
}


console.log(factorial(5));
console.log(factorial(4));

