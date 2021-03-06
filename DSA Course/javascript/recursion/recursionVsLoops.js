// Conclusion: Recursion takes longer than simple while loops in this use case

const recursiveTime1 = process.uptime();
const recursiveAdd = function (str) {
    if (str.length < 100) {
        str += Math.floor(Math.random()*10);
        recursiveAdd(str);
    }
}

recursiveAdd('');

const recursiveTime2 = process.uptime();
console.log(`Recursion took ${(recursiveTime2 - recursiveTime1) / 1000}s`);

const whileTime1 = process.uptime();
const whileAdd = function(str) {
    while (str.length < 100) {
        str += Math.floor(Math.random()*10);
    }
}

whileAdd('');
const whileTime2 = process.uptime();
console.log(`While loop took ${(whileTime2 - whileTime1) / 1000}s`);
