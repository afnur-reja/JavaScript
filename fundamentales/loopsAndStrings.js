//for loop
for (let i = 0; i < 5; i++){
    console.log(i);
}

//while loop
let i = 0;
while (i < 5){
    console.log(i);
    i++;
}

//do while loop
i = 0;
do{
    console.log(i);
    i++;
}while( i < 5);

//for....of loop
const string = "hello";
for(let val of string){
    console.log(val);
}

//for....in loop
const student = {
   id: 8,
   studentName: "ajay",
   age: 21
}
for (let key in student){
    console.log(key, " : ", student[key]);
}

//STRING METHODS AND PROPERTIES
const str = "hello";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.charAt(1));
console.log(str.slice(1, 4));
console.log(str.replace('h', 'y'));
console.log(str.endsWith('o'));


// //All even numbers from 0 to 100
// for (let i = 0; i <= 100; i++){
//     if (i%2 === 0) {
//         console.log(i);
//     }
// }


// const guess = 10;
// let userInput = prompt("Enter your guess : ");

// while ( userInput != guess){
//   userInput = prompt("Wrong bro, try agian : ");
// }
// console.log("Congrats you guessed right !");


// let fullName = prompt("Enter your full Name : ");
// const userName = `@${fullName}${fullName.length}`;
// console.log("User Name is ", userName);