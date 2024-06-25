// Q. Write a function called passwardValidator that takes a single parameter.

const passwardValidator = (pas)=>{
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasNumber = false;

    for(let char of pas){
        if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
            hasUpperCase = true;
        }else if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
            hasLowerCase = true;
        }else if(!isNaN(Number(char))){
            hasNumber = true;
        }
    }

    if(pas.length >= 8){
        if(hasLowerCase === true && hasUpperCase === true && hasNumber === true){
            return true;
        }else{
           return false;
        }
    }else{
        return false;
    }
}


