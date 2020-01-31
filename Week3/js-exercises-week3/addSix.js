function createBase(baseNumber) {

    let addToBaseNumber = function (addedValue) {

        return baseNumber + addedValue
    }

    return addToBaseNumber;


}

const addSix = createBase(6);

// Put here your function calls...
console.log(createBase(6))
