// Q. Mobile Number Validation.

const validateIndianMobileNumber = (number) =>{
    let firstDigit =  /[6-9]/g;
    let conformation = "invalid";

    if(firstDigit.test(number[0])  &&  number.length === 10){
        conformation="valid";
    }

    return conformation;
}

console.log(validateIndianMobileNumber("9876543231"));
console.log(validateIndianMobileNumber("4776543231"));
console.log(validateIndianMobileNumber("79976543231"));
console.log(validateIndianMobileNumber("09976543231"));