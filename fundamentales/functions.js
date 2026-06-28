//using function declaration
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
    for(let st of str){
        if(vowels.includes(st)){
            count += 1;
        }
    }
    return count;
}
console.log(`Vowels Count = ${countVowels("hello")}`)

//using arrow function
const countVowel = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
    for(let st of str){
        if(st === 'a' || st === 'e' || st === 'i' || st === 'o' || st === 'u'){
            count += 1;
        }
    }
    return count;
}
console.log(`Vowels Count = ${countVowel("hello")}`)


//forEach(callBackFunction) : used to loop through array
const nums = [1, 2, 3, 4, 5, 6]
nums.forEach((num) => {
    console.log(`Square of ${num} = ${num * num}`);
}) 

//filter(callbackFunction) : apply a condition on each element of an array and return array of those values that pass the condition.
const marks = [45, 89, 23, 34, 90, 99, 92, 95]
const highestScores = marks.filter((score) => {
    return score > 90;
})
console.log(highestScores)


//reduce(callbackFunction) : returns a single value by performing some stuff on an array.
const n = prompt("Enter a Number : ");
const arrOfN = [];
for(let i = 1; i <= n; i++){
    arrOfN.push(i);
}

const sum = arrOfN.reduce((acc, curr) => {
    return acc + curr;
})
console.log(sum)

const product = arrOfN.reduce((acc, curr) => {
    return acc * curr;
})
console.log(product)
