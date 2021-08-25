const sortByStringLength = function(string1, string2) {
    return string1.length - string2.length;
}

const array = ['dfgjhd', 'testdjkfghf', 'df', 'djkgdjkfghdjkfghdghfj', 'dgdfg'];
console.log(array.sort(sortByStringLength));