window.onload = (e) => {
  // UI words, display, input
  //const tester = new UI(words, 'word-display', 'user-input');
  const wordLs = 'He does not seem to have found any English trumpeters capable of playing as high parts as those of the German Clarin-Bldser and his plan seems generally to get as many oboes and bassoons as could be procured to double the top and bottom of his string-band';
  const game = new gameLogic(wordLs);
  const ui = new UI(wordLs, 'word-display', 'user-input');
  let counter = 0;
  let initTime;


  ui.displayList();
  ui.splitWords();
  game.getWord(counter);
  ui.colorWordCurrent(counter);

  let max = game.gameLen();

  ui.userText().addEventListener(
    'focus',
    (e) => {
      game.startTimer();

    }
  );

  ui.userText().addEventListener(
    'keyup',
    (e) => {


      console.log(e.key);
      if (counter < max) {
        if (e.key === ' ') {

          if (!game.checkWord(ui.userText().value)) {
            ui.colorWordWrong(counter);
          }

          counter += 1;
          game.getWord(counter);
          ui.colorWordCurrent(counter);
          ui.userText().value = '';
          if(counter === max){
            console.log('Game OVER');

            ui.results(game.endTimer(), game.wrongWords);

          }
        }
      }

    }
  );


};
