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


function titleCased() {
  return tutorials.map( string => {
    string = string.split(" "); //becomes an array of single words, so can iterate over it.
    for (let i = 0; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);   //iterates over each word, capitalizes first letter, joins with rest of word
    }
    return string.join(" ");  //joins each group of words back together
  })
}

titleCased(tutorials);