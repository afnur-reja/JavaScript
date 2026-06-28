//problem : reverse words in a string 
function reverseWords(str) {
    const wordsArr = str.split(" ");
    for (let idx = 0; idx < wordsArr.length; idx++){
        
        let reversedWord = "";
        for(let i = wordsArr[idx].length - 1; i >= 0; i--) {
            reversedWord +=  wordsArr[idx][i];
        }
        
        wordsArr[idx] = reversedWord;
    }
    
   return  wordsArr.join(" ");
}

console.log(reverseWords("hello world")) // Output: "olleh dlrow


//problem : find the first non repeating char.
function firstNonRepeatingChar(str) {
    let char;
    
    for(let i = 0; i < str.length; i++) {
        
        let count = 0;
        
        for(let j = 0; j < str.length; j++){
            if (str[i] === str[j]) {
                count++;
            }
        }
        
        if(count === 1) {
            char = str[i];
            break;
        }
    
    }
    
    return char;
    
}


console.log(firstNonRepeatingChar("aabbcdde"))// Output: 'c'





//problem : Count char frequency.
function charFrequency(str) {
    const freqObj = {};
    
    for(let i = 0; i < str.length; i++) {
        
        let freqCount = 0;
        
        for(let j = 0; j < str.length; j++){
            if (str[i] === str[j]) {
                freqCount++;
            }
        }
        
        freqObj[str[i]] = freqCount;
   }
   
   return freqObj;
}

console.log(charFrequency("hello"))
// Output: { h: 1, e: 1, l: 2, o: 1 }




//problem : odd count 
function findOdd(arr) {
    let oddNum;
    
    for(let i = 0; i < arr.length; i++) {
        
        let oddCount = 0;
        
        for(let j = 0; j < arr.length; j++){
            if (arr[i] === arr[j]) {
                oddCount++;
            }
        }
        
        if(oddCount % 2 !== 0) {
            oddNum = arr[i];
            break;
        }
    
    }
    
    return oddNum;
}

console.log(findOdd([1, 2, 3, 2, 3, 1, 3])) // Output: 3