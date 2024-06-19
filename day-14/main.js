// Q. Write a function finMin that takes an array of number as input and returns the minimum value found in array.


const findMin = (arr)=>{
    if(arr.length === 0){
        return undefined;
    }
    return Math.min(...arr)
}



