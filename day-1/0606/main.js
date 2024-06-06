//  Q. Write a function findlongestword that a string as input and returns the longest word in the string. if there are multiple longest words, retuen the first one encountered.

const findLongestWord = (str)=>{
    if(str.trim().length === 0){
        return false;
    }

    words = str.split(" ")
    words = words.sort((a,b) => b.length - a.length)


    return words[0];
    
}

console.log(findLongestWord("Javascript is a Object oriented language"));
