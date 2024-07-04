// Q. Write a function to convert a string to camelCase


const toCamelCase = (str) =>{
 str = str.trim().split(" ")

 str = str.map((e , index) => {
    if(index === 0){
        return e;
    }else{
        return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
    }
 }) 
 return str.join("")  
  
}

console.log(toCamelCase("gee coding"));



