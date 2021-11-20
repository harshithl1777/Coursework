const isPalindrome = function (num, current = null) {
    const string = num.toString();
    current = current === null ? string.length - 1 : current;
    if (current === Math.floor(string.length / 2)) {
        if (string.length / 2 != 0) return true;
        return string[current] === string[current - 1];
    }
    return string[current] === string[string.length - 1 - current] && isPalindrome(num, current - 1);
};