// Linear search algorithm
const containsInArray = (arr, valueToSearch) => {
    for (let arrayValue of arr) {
        if (arrayValue === valueToSearch) return true;
    }
    return false;
}

containsInArray([1, 234, 3458, 13, '3'], 13); // true
containsInArray([1, 234, 3458, 13, '3'], 13234); // false