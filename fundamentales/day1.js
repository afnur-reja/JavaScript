//problem 1: plindrome check
function plindromeCheck(str){
    let isPalindrome = true;
    const len = str.length;
    for(let i=0; i<len/2; i++){
        if(str[i] !== str[len-i-1]){
            isPalindrome = false;
            break;
        }
    }

    if(isPalindrome){
        console.log("palindrome.");
    }else{
        console.log("not palindrome.")
    }
}

//problem2 : factorial calculator
function fact(n){
    let fact = 1;
    for(let i=1; i<=n; i++){
        fact *= i;
    }
    console.log(fact);
}

//problem3 : nth fibonacci
function nthFibo(n){
    if(n === 1) return 0;
    if(n === 2) return 1;

    let temp;
    let n1 = 0;
    let nthTerm = 1;
    for(let i = 0; i<n-2; i++){
        temp = n1;
        n1 = nthTerm;
        nthTerm += temp;
    }

    return nthTerm;
}

//problem 4: prime or not
function isPrimeNum(n){
    let isPrime = true;
    for (let i=2; i*i <= n; i++){
        if(n%i == 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log("prime")
    }else {
        console.log("non prime")
    }
}

//problem 5: reverse array
function reverseArr(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reverseArr;
}
