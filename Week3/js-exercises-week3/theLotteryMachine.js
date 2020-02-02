function threeFive(startIndex, stopIndex, ) {
    const numbers = [];
    // make array
    for (let i = startIndex; i < stopIndex + 1; i++) {
        numbers.push(i)

    }
    console.log(numbers)
}

// start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next


threeFive(10, 150);

