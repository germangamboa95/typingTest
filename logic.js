class gameLogic {
  constructor(words){
    this.words = words.split('');
    this.cpuWord;
  }

  getWord() {
    let listLen = wordList.length;
    let rand = (num) => Math.floor(Math.random() * num);
    this.cputWord = wordList[rand(listLen)];
  }

  checkWord (word) {
    let test = word.trim() == this.cpuWord.trim();
    if (test) {
      userInput.value = "";
      console.log("you got it right");
      return true;
    } else {
      userInput.value = "";
      console.log('booo');
      return false;
    }
  }

}
