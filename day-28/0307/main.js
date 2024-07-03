// Q. Validate Hex Color code

const validateHexColor = (str)=>{
    return /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/.test(str)
}



