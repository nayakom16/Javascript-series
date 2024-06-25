// Q. write a function called truncateString that takes two parameter.

const truncateString = (str, count)=>{

    if(count <= 0){
        return str;
    }else if(str.length > count){
        return str.slice(0, count).concat("...");
    }
    
}

