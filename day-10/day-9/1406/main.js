// Q. Write a function arrayAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are Equal(1.e, contains in tthe same order),and false otherwise.

const arrayAreEqual = (arr1, arr2)=>{
    if(arr1.length ===  arr2.length){

      return arr1.every((e , index) => e === arr2[index])
    
    }
}



// console.log(arrayAreEqual([1,2,3] , [1,2,3]));
// console.log(arrayAreEqual([1,2,3] , [1,2,4]));
// console.log(arrayAreEqual([] , []));