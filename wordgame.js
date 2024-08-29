function longestWord(sentence) {
    const words = sentence.split(' ');
    let longest = '';
    for (const word of words) {
        if (word.length >= longest.length) {
            longest = word;
        }
    }

    return longest;
}

function shortestWord(sentence) {
    const words = sentence.split(' ');
    let shortest = words[0];

    for (const word of words) {
        if (word.length <= shortest.length) {
            shortest = word;
        }
    }

    return shortest;
}

function wordLengths(sentence) {
    const words = sentence.split(' ');
    let totalLength = 0;
    for (const word of words) {
        totalLength += word.length;
    }

    return totalLength;
}

console.log(longestWord('The dog jumped over the shipyard fence'), "longestWord failing...");
console.log(longestWord('The yellow dog barked loud'), "longestWord failing...");

console.log(shortestWord('The dog jumped over the shipyard fence'), "shortestWord failing...");
console.log(shortestWord('The dog barked loudly at the cat up the tree'), "shortestWord failing...");

console.log(wordLengths('The dog jumped over the shipyard fence'), "wordLengths is failing...");
console.log(wordLengths('The dog barked loudly'), "wordLengths failing...");