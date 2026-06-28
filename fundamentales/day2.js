//problem 1 : find the second largest number
function secondLargest(arr) {

    const set = (function(arr) {
        const setArr = [];
        for(let i = 0; i < arr.length; i++){
            if(setArr.includes(arr[i])){
                continue;
            }
            setArr.push(arr[i]);
        }
        return setArr;
    })(arr);

    set.sort((a, b) => b - a);

    return set[1];

}

//problem 2 : palindrome check.
function plindromeCheck(word){
    
    const str = word.replaceAll(" ", "").toLowerCase();

    let isPalindrome = true;
    const len = str.length;
    for(let i=0; i<len/2; i++){
        if(str[i] !== str[len-i-1]){
            isPalindrome = false;
            break;
        }
    }

    if(isPalindrome){
        return true;
    }else{
        return false;
    }
}

//problem 3 : count vowels
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str.toLowerCase()[i])) {
            count++;
        }
    }

    return count;
}

//problem 4 : FizzBuzz (loop challenge)
function fizzBuzz(){
    for(let i = 1; i <= 30; i++) {
        if( i%15 === 0){
            console.log("FizzBuzz");
        } else if( i%3 === 0){
            console.log("Fizz");
        } else if( i%5 === 0){
            console.log("Buzz");
        } else {
            console.log(i)
        }
    }
}

//problem 5 : remove duplicates
function removeDuplicates(arr) {
    const setArr = [];
        for(let i = 0; i < arr.length; i++){
            if(setArr.includes(arr[i])){
                continue;
            }
            setArr.push(arr[i]);
        }
        return setArr;
}

console.log(new Set([1, 2, 2, 3, 4, 4, 5]))
// fizzBuzz()

