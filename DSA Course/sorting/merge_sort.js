const mergeSortedArrays = (array1, array2) => {
    let i = 0; 
    let j = 0;
    const mergedArray = [];
    let iterations = 0;
    while ( i < array1.length && j < array2.length) {
        iterations += 1;
        if (array1[i] < array2[j]) {
            mergedArray.push(array1[i]);
            mergedArray.push(array2[j]);
        } else {
            mergedArray.push(array2[j]);
            mergedArray.push(array1[i])
        }
        i += 1;
        j += 1;
    }
    return mergedArray;
}

const mergeSort = (array) => {
    const masterArray = [];
    for (let x of array) {
        masterArray.push([x]);
    }
    for (let y = 0; y < masterArray.length; y++) {
        
    }
}

console.log(mergeSortedArrays([1, 3, 5, 7, 10], [2, 3, 6, 8, 9]));

