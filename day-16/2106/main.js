// Q. Write a function called repeatString that takes two parameter. 


const repeatString  = (str ,num)=>{
    return num> 0 ? str.repeat(num) : str
}


console.log(repeatString("geecoding" , 5));