const marks = [85, 97, 44, 37, 76, 60]
let totalMark = 0;
for(let el of marks){
    totalMark += el;
}
console.log(`Avarage marks : ${totalMark/marks.length}`)


const prices = [250, 645, 300, 900, 50]
for(let i = 0; i < prices.length; i++){
   const discount = prices[i]/10;
   prices[i] -= discount;
   
}
console.log(prices);


//ARRAY METHODS
const marvelHeroes = ['Iron Man', 'Captain America', 'Thor', 'Spiderman', 'Hulk', 'Loki'];
const dcHeroes = ['Super Man', 'Batman', 'Aquaman']

//push(elem) : add at the end. change in actual array.
marvelHeroes.push('Vision');
console.log(marvelHeroes)

//pop() : delete last element and return it. change original.
const deletedElem = marvelHeroes.pop();
console.log(marvelHeroes);
console.log(deletedElem);

//toString() : turn arrays into string, use ',' between values. does not change original
console.log(marvelHeroes.toString());

//concat(arr1, arr2, ...) : use to concat two or more arrays. does not change real .
const heroes = marvelHeroes.concat(dcHeroes);
console.log(heroes);

//unshift(elem) : Add element at first . change original.
dcHeroes.unshift('wonder women');
console.log(dcHeroes);

//shift() : remove element from first. change original.
dcHeroes.shift();
console.log(dcHeroes);

//slice(startIndex, stopIndex) : give a piece of array. does not change original.
console.log(marvelHeroes.slice(0, 4));

//splice(startIndex, deleteCount, newElem1, newElem2....) : used to add, remove, replace element. change original one.
marvelHeroes.splice(4, 1, 'Thanos');
console.log(marvelHeroes)



const companies = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'IBM', 'Netflix']
companies.shift();
companies.splice(1, 1, 'Ola');
companies.push('Amazon');
console.log(companies)
