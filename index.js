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

// turn all of the strings in the above array into titleCase
function titleCased(){
// return the result of a .MAP transformation of the tutorials array
  return tutorials.map(tutorial => {
    // separate every word in each string by a comma
    tutorial = tutorial.split(' ')
    //iterate through every word. find the first character(and seprates it from the word) of the word located at index zero and
    // make it uppercase, then add the word back to the rest of letters
    for (var i = 0; i < tutorial.length; i++) {

      tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1)
    }
    // after that work has been done, .join everything back to their original strings
    // with a comma in between each course name
    return tutorial.join(' ')
  })
}
