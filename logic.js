

const wordList = ['German', 'is', 'awesome', 'cat', 'bootcamp', 'UCF', "bootstrap", "codepen", "classroom", "image"];




let checkWord = (word) => {
  let test = word == cpuWord + ' ';

  if (test) {
    console.log("you got it right");
  } else {
    console.log('booo');
  }
  userInput.value = "";
  cpuWord = getWord(wordList);
};

let userWord = (word) => {
  let userWord = userInput.value;
  return userWord;
};
let getWord = (wordList) => {
  let rand = (num) => Math.floor(Math.random() * num);
  let word = '';
  let listLen = wordList.length;
  word = wordList[rand(listLen)];
  console.log(word);
  return word;
};

let userInput = document.getElementById('user-input');


let cpuWord = getWord(wordList);
userInput.addEventListener(
  'keyup',
  (e) => {
    let word = userWord();
    if (e.key === ' ') {
      checkWord(word);
    }
  });
