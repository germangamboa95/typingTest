window.onload = (e) => {

  const wordLs = 'He does not seem to have found any English trumpeters capable of playing as high parts as those of the German Clarin-Bldser and his plan seems generally to get as many oboes and bassoons as could be procured to double the top and bottom of his string-band';
  const game = new gameLogic(wordLs);
  const ui = new UI(wordLs, 'word-display', 'user-input');
  let counter = 0;
  let initTime;
  let uiTimer;


  ui.displayList();
  ui.splitWords();
  let max = game.gameLen();

function gameInit() {
  game.startTimer();
  uiTimer = ui.timerDisplay(game.initTime);
  game.getWord(counter);
  ui.colorWordCurrent(counter);
}

function mainController(e){
  if (counter < max) {
    if (e.key === ' ') {
      if (!game.checkWord(ui.userText().value)) {
        ui.colorWordWrong(counter);
      }
      counter++;
      game.getWord(counter);
      ui.colorWordCurrent(counter);
      ui.userText().value = '';
      if (counter === max) {
        ui.timerStop(uiTimer);
        ui.results(game.endTimer(), game.wrongWords);
      }
    }
  }
}

  ui.userText().addEventListener('focus', gameInit);
  ui.userText().addEventListener('keyup', e => mainController(e));

};
