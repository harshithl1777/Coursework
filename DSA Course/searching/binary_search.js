const searchForElement = function (array, value) {
    let rightPointer = array.length - 1;
    let leftPointer = 0;
    let middleIndex;
    while (array[middleIndex] !== value && leftPointer <= rightPointer) {
        middleIndex = Math.floor((leftPointer + rightPointer)/2);
        if (value < array[middleIndex]) rightPointer = middleIndex - 1;
        else leftPointer = middleIndex + 1;
    }
    return (array[middleIndex] === value) ? middleIndex : -1;
}

console.log(searchForElement([1, 3, 5, 6, 7, 9, 11, 13, 15, 17], -1));