// Q. Write a function to reverse a string that function should take a string as input and return the reversed string.

const reverseString = (str)=>{
    let ans = '';
    for(let i= str.length -1 ; i >= 0 ; i--){
        ans = ans+ str[i];
    }

    return ans;
}

console.log(reverseString("Gee_coding"));