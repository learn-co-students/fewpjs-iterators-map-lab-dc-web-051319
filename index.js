const tutorials = [
    'what does the this keyword mean?',
    'What is the Contutorialuctor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
];

const titleCased = () => {
    return tutorials.map( string => {
        let words = string.split(' ');
        let titleCasedWords = words.map( word => {
            let letters = word.split("");
            first = letters.shift().toUpperCase();
            letters.unshift(first);
            return letters.join('');
        });
        return titleCasedWords.join(' ');
    });
};

console.log(titleCased());
