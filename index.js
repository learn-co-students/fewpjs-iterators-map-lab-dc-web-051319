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
  return tutorials.map(function (tutorial) {
    tutorial = tutorial.split(" ");
    for (let i = 0; i < tutorial.length; i++){
  // set i = 0, as long as i is less than what is in the tutorial length, run the loop and i++.
    tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
    debugger
    //tutorial[i](which is equal to 0), will equal to that tutorial's first index. It will grab the first character from the tutorial and uppcase it.
    //then add the rest of the words, starting at the second word, at the end with slice[1]
    //*charAt helps get a certain character at an index, in which case is 0.
    }
  return tutorial.join(' ');
  });
}
