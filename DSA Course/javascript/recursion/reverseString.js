const reverseString = function (string) {
    if (string.length === 1) return string[0];
    return string[string.length-1] + recursionReverse(string.slice(0, string.length-1));
};

console.log(reverseString("helloHello"));
