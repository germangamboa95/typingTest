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

  colorWordCurrent(num) {
    let spans = document.querySelectorAll('span');
    if(spans[num]){
      spans[num].classList.add('green');
  
    }
    if(!num-1){
      spans[num-1].classList.remove('green');
    }
  }
  colorWordWrong(num) {
    let spans = document.querySelectorAll('span');
    spans[num].classList.add('red');
  }

  results(time, wordCount) {
    let result = document.getElementById('results');
    const wpm = Math.floor(47 / (time / 60));
    result.innerHTML = `
      <h2>This is your score</h2>
      <ul>
        <li>You missed: ${wordCount} words.</li>
        <li>Your WPM: ${wpm}.</li>
      </ul>
    `;
  }

}
