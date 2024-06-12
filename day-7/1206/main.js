// Q. Write a function called calculateAverage that takes array of number as input and return the average of those number.


const calculateAverage = (arr)=>{
    let sum = 0;
    arr.forEach((e) => {
        sum = sum+e;
    });
    
    return avg= sum/arr.length;
}


// console.log(calculateAverage([2,3,4,5,6,8]));