const reverseString = function(string) {
    let letters=[]
    letters=string.split("");
    const reverseWord = [];
    for(let i=0; i<string.length; i++)
    {
      reverseWord[i] = letters.pop();
    }
    newWord = reverseWord.join("");
    return newWord;

};

// Do not edit below this line
module.exports = reverseString;
