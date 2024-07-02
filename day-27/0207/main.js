// Q. Filtering number from string and return it in the array .

const extractNumber = (str)=>{
    let isNumber = /\d+/g
    return str.match(isNumber)
}


