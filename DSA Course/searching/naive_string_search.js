const searchForStringLinear = (searchString, substring) => {
    let instancesFound = 0;
    for (let x = 0; searchString.length - x >= substring.length; x++) {
        console.log(searchString.length - x, x, searchString[x]);
        if (searchString.slice(x, x+substring.length) === substring) instancesFound += 1;
    }
    return instancesFound;
}

console.log(searchForStringLinear('okjdhfgdjhgjdfg', 'jdfgg'))