
window.onload = (e) =>{
  // UI words, display, input
  //const tester = new UI(words, 'word-display', 'user-input');
  const wordLs = 'incredulity it cut sea of burned it  dear shut up gaols by stumbling in the world of sadness';
  const game = new gameLogic(wordLs);
  const ui = new UI(wordLs, 'word-display', 'user-input');
  let counter = 0;
  ui.displayList();
  ui.splitWords();
  game.getWord(counter);
  ui.colorWord(counter);

  ui.userText().addEventListener(
    'keyup',
    (e) =>{


      console.log(e.key);
      if(e.key ===' '){
        counter += 1;
        game.getWord(counter);
        ui.colorWord(counter);

        if(game.checkWord(ui.userText().value)){
        }
        ui.userText().value = '';
      }
    }
  );


};
