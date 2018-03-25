class gameLogic {
  constructor(words){
    this.words = words.split(' ');
    this.cpuWord;
  }

  getWord(pos) {
    //let rand = (num) => Math.floor(Math.random() * num);
    this.cpuWord = this.words[pos];
  }

  checkWord (word) {

    let test = word.trim() == this.cpuWord;
    if (test) {

      console.log("you got it right");
      return true;
    } else {
      console.log('booo');
      return false;
    }
  }

}
