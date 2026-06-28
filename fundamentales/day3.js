//problem : reverse a number 
function reverseNumber(num) {
    num = num + "";
    let reversedNum = "";
    for(let idx = num.length - 1; idx >= 0; idx--) {
        reversedNum += num[idx];
    }
    return +reversedNum;
    
}

//problem : find the most frequent element 
function mostFrequent(arr) {
    let mostFrequentElem;
    let count = 0;
    
    for(let i = 0; i < arr.length; i++) {
        
        let elemCount = 0;
        
        for(let j = 0; j < arr.length; j++){
            if (arr[i] === arr[j]) {
                elemCount++;
            }
        }
        
        if(elemCount > count) {
            count = elemCount;
            mostFrequentElem = arr[i];
        }
    
    }
    
    return mostFrequentElem;
}

