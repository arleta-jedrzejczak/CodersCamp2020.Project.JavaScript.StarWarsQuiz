import Counter from './components/timer/counter';
import Lightsaber from './components/timer/lightsaber';
import answearDisplay from './components/answearDisplay/answearDisplay';
import Rules from './components/rules/rules';
import MainMenu from './components/mainMenu/mainMenu';
import Image from './components/image/image';
import GameOver from './components/gameOver/gameOver';
import localStorage from './components/localStorage/localStorage';
import TableWithScores from './components/TableWithScores';
import { data } from './components/gameOver/data';

// dummy data for generate table, it should be delate and take from local storage
let players = [
  {
    player: 'Ania',
    answered: '15/20',
  },
  {
    player: 'Mateusz',
    answered: '14/30',
  },
  {
    player: 'Leia Organa',
    answered: '1/23',
  },
];

const submitFn = (a) => {
  console.log(a);
};

class App {
  constructor(options) {
    //   this.counter = new Counter(gameStarted);
    //   this.lightsaber = new Lightsaber(gameStarted);

    ///////////////////////////////   RED BUTTON

    this.redButton = document.querySelector('.redButton');
    this.redButton.innerHTML = `PLAY THE GAME`;
    this.redButton.addEventListener('click', () => {
      this.renderTimer();
      this.redButton.classList.add('hidden');
      this.whiteButton.classList.add('hidden');
    });

    //////////////////////////////    GAME OVER MODULe

    this.gameover = new GameOver(); //takes data as js object and callback after submitting player nick

    const btn = document.createElement('button');
    btn.setAttribute('id', 'showResultsBtn');
    document.querySelector('.btnctn').appendChild(btn);
    btn.innerHTML = 'click me';

    btn.addEventListener('click', () => {
      const modal = this.gameover.createModal(data, submitFn);
      modal.style =
        'display: block; max-width: 800px; z-index: 1000; background-color: white; border-radius: 10px; padding: 10px; margin: auto; position: fixed; top: 10%; left: 10%;';

      document.querySelector('#game-over').appendChild(modal);
      document.querySelector('#game-over').style =
        'height: 100vh; position: fixed; width: 100vw; top: 0; z-index: 900; left: 0; background-color: rgba(0, 0, 0, 0.5)';
    });

    /////////////////////////////////////////////////

    this.mainmenu = new MainMenu();

    this.image = new Image();
    // this.image = new Image("../../static/assets/img/modes/people/11.jpg");

    this.rules = new Rules(); // characters-intro | vehicles-intro | starships-intro | characters-question | vehicles-question | starships-question

    /////////////////////// GAME MODE HEADER AND RULES

    document
      .querySelector('#currentGameMode')
      .appendChild(this.rules.renderHeader('starships-intro'));
    document
      .querySelector('#currentGameModeDescription')
      .appendChild(this.rules.renderDescription('starships-intro'));

    ////////////////////////////////////////////////////

    //   this.answearDisplay = new answearDisplay(answear, elementId);
    // First argument 'answear' boolean, is responsible for checking correct answear
    // Second is ID of a DOMelement which should be colored

    this.whiteButton = this.whiteButtonRender();
  }

  whiteButtonRender() {
    // TODO: throw after add gameStarted flag to start button
    const gameStarted = false;
    let flag = true;
    // const localStorage = new this.localStorage();
    const whiteButton = document.querySelector('.whiteButton');
    // Class have 2 methods localStorage.save(obj), where 'obj' is object with 2 parametrs player - that have player nick(string) and answered - that have score of that player(string). This method save this obj in score table.
    // Second method localStorage.getScore() which return table of 3 highest scores in order.

    whiteButton.innerHTML = `<i class="fas fa-id-badge"></i></i>Hall of fame`;

    /////////////    EXAMPLE DIV    DO USUNIECIA

    const div = document.createElement('div');
    div.setAttribute('id', 'foo');
    div.innerHTML = 'sjkabdbasdjhavsdbavsb';

    ///////////////////////////////////////

    whiteButton.addEventListener('click', () => {
      if (flag) {
        whiteButton.innerHTML = `<i class="fas fa-graduation-cap"></i>Rules`;
        // this.tableWithScores = new TableWithScores('currentGameModeDescription');
        // this.tableWithScores.renderTable(this.localStorage.getScore());
        document.querySelector('#gameModeDescriptionText').remove();
        document.querySelector('#currentGameModeDescription').appendChild(div); //append here table with scores

        return (flag = false);
      } else {
        whiteButton.innerHTML = `<i class="fas fa-id-badge"></i></i>Hall of fame`;
        // tutaj spowrotem do rules

        document.querySelector('#foo').remove(); //remove score table via ID
        document
          .querySelector('#currentGameModeDescription')
          .appendChild(this.rules.renderDescription('starships-intro'));

        return (flag = true);
      }
    });
  }

  renderTimer() {
    this.counter = new Counter();
    this.lightsaber = new Lightsaber();
  }
}

export default App;
