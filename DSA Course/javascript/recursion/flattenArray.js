const flattenArray = function (arr) {
    let newArr = [];
    arr.forEach((element) => {
        if (Array.isArray(element)) newArr = newArr.concat(flattenArray(element));
        else newArr.push(element);
    });
    return newArr;
};

console.log(flattenArray([1, 2, 3, [4, [5], 6], [1, [2]]]))