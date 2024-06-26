// Q. Write a function called numberRange that generates an array containing consecutive numbers from a to b(inclusive).

const numberRange = (a,b)=>{
    let arr = [];
    while(a <= b){
        arr.push(a);
        a++;
    }

    return arr;
}

