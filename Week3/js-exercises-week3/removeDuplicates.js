const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function takeOutTheDuplicates(arr) {
    let cleanArr = [];
    for (let letter of arr) {

        let existence = cleanArr.includes(letter)
        if (existence == false) {
            cleanArr.push(letter)
        }


    }
    console.log(cleanArr)
    return cleanArr
}

takeOutTheDuplicates(letters);