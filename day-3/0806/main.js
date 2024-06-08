// Q. write a function called countChar that takes two parameter: a string and a character to count the function should return the number of times the specified character apperes in the string.


const countChar =(word ,char ) =>{
    word  = word.toLowerCase()
    char  = char.toLowerCase()
    var count =0;
    word = word.split("")
    word.forEach((e) => {
        if(e === char){
            count++;
        }
    });
       
    

    return count;
}


// console.log(countChar("ankushnayak" , "a"));