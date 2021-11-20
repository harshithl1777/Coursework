const selectionSort = function(array) {
    let minimumIndex;
    for (let i = 0; i < array.length; i++) {
        minimumIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minimumIndex]) {
                minimumIndex = j;
            }
        }
        if (i !== minimumIndex) [array[i], array[minimumIndex]] = [array[minimumIndex], array[i]];
    }
    return array;
}

console.log(selectionSort([13434, 12, 5234, 1, 111, 16, 189]));