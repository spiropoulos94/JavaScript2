const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
];

let total = 0;

//for this stage i used a callback function with an arrow form

let agesArr = hackYourFutureMembers.map((object) => {
    return object["age"]
})

//here i used the classic function structure

function sumAll(total, number) {
    return total + number
}

let combinedAgesArr = agesArr.reduce(sumAll)
