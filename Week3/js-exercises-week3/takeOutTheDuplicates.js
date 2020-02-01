const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];


//Made first solution using Set method.

/*function removeDuplicates(array) {
    let uniqArr = Array.from(new Set(array))
    return uniqArr
}*/

function removeDuplicates(array) {
    return array.filter((letter, index) => array.indexOf(letter) === index)
};

removeDuplicates(letters);

