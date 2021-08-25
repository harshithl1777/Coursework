const insertionSort= function(array) {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (array[i] < array[j]) {
                array.splice(j, 0, array[i]);
                array.splice(i+1, 1);
            } 
        }
    }
    return array;
}

console.log(insertionSort([34, 5666, 12, 1, 199, 10]));