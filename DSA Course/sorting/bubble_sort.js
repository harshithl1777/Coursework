const bubbleSort = function(array) {
    let noSwaps = true;
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return array;
}

console.log(bubbleSort([56456, 23, 345, 7, 9, 1000]));
console.log(bubbleSort([9, 1, 2, 3, 4, 5, 6, 7]));