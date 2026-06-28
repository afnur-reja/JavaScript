// console.log(Math.floor(Math.random() * 2));
// console.log(Math.random() * 2)

const obj = {
    usrName: "Jhon",
    address: {
        city: "New Work"
    }
}

//------SHALLOW COPY------
const shallowCopy = {...obj};
// Object.assign(obj, shallowCopy);
// console.log(shallowCopy)

//----DEEP COPY----
const deepCopy = JSON.parse(JSON.stringify(obj))
// console.log(deepCopy);

// console.log(Object.keys(obj))
// Object.freeze(obj)
// obj.usrName = "moky"
// const arr = Array.from("afnu r")

function arg () {
    const sum = [...arguments].reduce((acc, elem) => {
        return acc + elem
    });
    // console.log(sum);
}

arg(1, 2, 3, 4)

//---REST PARAMETERS---
function rest(greet, ...names){
    // console.log(`${greet}, ${names.join(" ")}`);
}

rest("Hello", "Jhon", "Doe")


//---DESTRUCTURING---
const person = {
    usrName: 'moky',
    age: 21
}

const {usrName: personName, age} = person;
// console.log(personName, age);

const student = {
    details: {
        id: 101,
        stdName: "byen"
    }
}

const {details : {id: stdId, stdName}} = student
// console.log(stdId, stdName);


//---LOCAL STORAGE---
localStorage.setItem("personDetails", JSON.stringify(person))
localStorage.removeItem("person")
console.log(JSON.parse(localStorage.getItem("personDetails")));k