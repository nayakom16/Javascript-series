// Q. Create a function generateHash that generate a hash tag from a given input string.


//  i/p - my name is ankush nayak
// o/p - #MyNameIsAnkushNayak

const generateHash = (str) =>{
    if(str.length >280 || str.trim().length === 0){
        return false;
    }

    str = str.split(" ");
    str = str.map((e) =>{
       return(e.replace(e[0], e[0].toUpperCase())) 
    })
    str = "#"+ str.join(" ")
    console.log(str);
    return str;
}



//console.log(generateHash("my name is ankush nayak"));
