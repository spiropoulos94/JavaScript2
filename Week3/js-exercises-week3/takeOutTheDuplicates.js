const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];


function removeDuplicates(array) {
    let uniqArr = Array.from(new Set(array))
    return uniqArr
}



