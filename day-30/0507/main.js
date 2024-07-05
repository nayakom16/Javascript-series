// Q.chack the object Emptiness.

const isEmptyObject = (obj)=>{
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            return "it`s not empty"
        }
    }

    return "it is empty"
}

