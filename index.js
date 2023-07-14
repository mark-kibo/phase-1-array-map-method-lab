let tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function capitalizeWord(string){
  let subStrings=string.split(" ");
  let words = subStrings.map(word =>{
    word = word.charAt(0).toUpperCase() + word.slice(1);
    return word;
  })
  return words.join(" ");

}

const titleCased = () => {
  tutorials = tutorials.map(item =>{
    item = capitalizeWord(item);
    return item;
  })
  return tutorials;
}


console.log(titleCased());


