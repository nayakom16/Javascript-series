// Q. Write a function to determine wheather a given string is a palindrom or Not. 



const isPalindrome = (str)=>{
    str = str.toLowerCase().replace(/\W/g, "");
    let reverse = str.split(" ").reverse().join("")
    return str === reverse ? true : false;
}

console.log(isPalindrome("A man, A plan, a canal, Panam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

