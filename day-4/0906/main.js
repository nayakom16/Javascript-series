// Q. write a function called checkTriangleType that take three parameter representing the length of the side of a triangle. The function should return a srtring indicating the type of triangle: "equileteral", "isoscales","scalenes".

const checkTriangleType = (a,b,c) =>{
    if(a === b && b===c){
        return "equileteral";
    }
    if(a === b || b===c || c===a){
        return "isoscales";
    }
    return "scalenes";
}

// console.log(checkTriangleType(3,3,3));
// console.log(checkTriangleType(3,4,3));
// console.log(checkTriangleType(3,4,5));