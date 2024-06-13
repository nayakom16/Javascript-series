// Q. Write a function to calculate the sum of the squre of the all elements in an Array.

const sumOfSqure = (arr)=>{
    var sum =0;
    arr.forEach((e) => {
        sum = sum+(e*e);
    });
    return sum;
}
