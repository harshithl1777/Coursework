const capitalizeWords = function(words, index = 0) {
    const capitalizedWord = words[index][0].toUpperCase() + words[index].slice(1);
    if (index === words.length - 1) return [capitalizedWord];
    return [capitalizedWord].concat(capitalizeWords(words, index+1));
}

console.log(capitalizeWords(['yash', 'nahser', 'learchen', 'vhekram']));