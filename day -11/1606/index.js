// Q. write a function to check if a given number with a specific substring.



const startWith = (str , substr)=>{
    return str.toLowerCase().startsWith(substr.toLowerCase())
}







console.log(startWith("Hello worls" ,"hello"));
console.log(startWith("Hello worls" ,"World"));