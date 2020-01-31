function createBase(baseNumber) {
    return function (addedNumber) {
        return baseNumber + addedNumber
    }
}

const addSix = createBase(6);

// Put here your function calls...

addSix(9);
addSix(18);
addSix(30);
