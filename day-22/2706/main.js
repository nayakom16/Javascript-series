// Q. Convert object to Array and vice versa.

const info = {
    name:"Ankush Nayak",
    age:19,
    city:"Sambalpur",
};


let arr = Object.entries(info);
console.log(arr);


let newObj = Object.fromEntries(arr);
console.log(newObj);