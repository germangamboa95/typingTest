class UI {
  constructor(list, display, input) {
    this.wordList = list;
    this.display = display;
    this.userInput = input;
    this.currentWord = '';


  }

  displayList() {

    document.getElementById(this.display)
      .innerHTML = `<p>${this.wordList}</p>`;
  }

  userText() {
    return document.getElementById(this.userInput);
  }

  splitWords(){
    let cur = document.getElementById(this.display).firstElementChild;
    let text = cur.innerText;
    let re = /\s/;
    let arr = text.split(re);
    arr = arr.map(item => `<span>${item}</span>`);
    text = arr.join(' ');
    cur.innerHTML = text;
  }

  colorWord(num) {
    let spans = document.querySelectorAll('span');
    spans[num].classList.add('green');
    if(!num-1){
      spans[num-1].classList.remove('green');
    }
  }





}
