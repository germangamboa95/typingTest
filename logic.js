class gameLogic {
  constructor(words){
    this.words = words.split(' ');
    this.cpuWord;
    this.initTime;
    this.endTime;
    this.totaltime;
    this.wrongWords = 0;
  }

  getWord(pos) {
    //let rand = (num) => Math.floor(Math.random() * num);
    this.cpuWord = this.words[pos];
  }

  checkWord (word) {

    console.log(word, this.cpuWord);
    let test = word.trim() == this.cpuWord;
    if (test) {

      console.log("you got it right");
      return true;
    } else {
      this.wrongWords++;
      return false;
    }
  }

  gameLen() {
    return this.words.length;
  }

  startTimer(){
    this.initTime =  Date.now();
  }

  endTimer(){
    this.endTime =  Date.now();
    return (this.endTime - this.initTime)/1000;
  }



}
