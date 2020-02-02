function sayThree() {
    console.log("Say Three is called!!!!")
}

function sayFive() {
    console.log("Say Five is called!!!!")
}



function threeFive(startIndex, stopIndex, sayThree, sayFive) {
    const numbers = [];
    // make array
    for (let i = startIndex; i < stopIndex + 1; i++) {
        numbers.push(i)

    }




    for (let i of numbers) {

        if (i % 3 == 0 && i % 5 == 0) {
            sayThree();
            sayFive();
        }

        else if (i % 3 == 0) {
            sayThree();
        }
        else if (i % 5 == 0) {
            sayFive();
        }

    }


}

// start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next


threeFive(10, 15, sayThree, sayFive);

