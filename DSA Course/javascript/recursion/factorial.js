const factorial = function (currentNum, endNum) {
    if (!endNum) endNum = 1;

    if (currentNum === endNum) return endNum;
    return currentNum * factorial(currentNum-1, endNum);
}

console.log(factorial(6, 3));