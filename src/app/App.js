import Counter from './components/timer/counter';
import Lightsaber from './components/timer/lightsaber';
import answearDisplay from './components/answearDisplay/answearDisplay';
import Rules from './components/rules/rules';
import MainMenu from './components/mainMenu/mainMenu';
import Image from './components/image/image';
import GameOver from './components/gameOver/gameOver';
import localStorage from './components/localStorage/localStorage';
import TableWithScores from './components/TableWithScores';
import GameEngine from './components/gameEngine/GameEngine';
import { data } from './components/gameOver/data';
import Player from './components/player/Player';
import LoaderView from './components/loader/LoaderView';
import GamePanel from './views/gameEngineView';

import ImageBase64 from './helpers/ImageBase64';

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
    this.appIsRunning = false;
    this.options = options.options;
    this.mainmenu = new MainMenu();
    this.image = new Image();
    this.rules = new Rules();
    this.loader = new LoaderView();
    this.counter = new Counter();
    this.lightsaber = new Lightsaber();
    this.gameover = new GameOver();
    this.gamepanel = new GamePanel();

    this.mode = 'people';
    this.player = new Player();
    this.game = new GameEngine(options, this.mode, this.player);

    this.init();
  }

  init()
  {
    this.render();

    this.redButton.addEventListener('click', () => {
      this.redButton.classList.add('hidden');
      this.whiteButton.classList.add('hidden');
      this.run();
    });
  }

  render()
  {
    document
      .querySelector('#currentGameMode')
      .appendChild(this.rules.renderHeader('characters-intro'));
    document
      .querySelector('#currentGameModeDescription')
      .appendChild(this.rules.renderDescription('characters-intro'));
    this.redButton = document.querySelector('.redButton');
    this.redButton.innerHTML = `PLAY THE GAME`;
    this.whiteButton = document.querySelector('.whiteButton');
    // White button render
    this.whiteButtonRender();
    // Welcome image
    ImageBase64(`./${this.options.imagesUrl}${this.mode}/11.jpg`)
    .then(dataUrl => {
      this.image.puttingImage(dataUrl);
    });
    // Loader render
    this.loader.render();
  }

  run()
  {
    this.game.startGame();
    this.gamepanel.create();
    this.appIsRunning = true;

    if (this.appIsRunning) {
      this.loader.show();
      this.game.renderQuestions();
      
      setTimeout(() => {
        this.loader.hide();

        const btns = document.querySelectorAll('li[data-answer]');
        btns.forEach(b => {
          b.addEventListener('click', ev => {
            ev.preventDefault();
            
            let theAnswer = b.getAttribute('data-answer');
            let check = this.game.checkAnswer(theAnswer);

            this.player.addPlayerAnswer(theAnswer);
            this.answearDisplay = new answearDisplay(check, theAnswer.split(' ')[0]);

            if (this.appIsRunning) {
              this.game.renderQuestions();
            }
          });
        });
        
        this.game.theLoop(() => {
          if (this.appIsRunning) {
            this.counter.checkGame();
            this.lightsaber.checkGame();

            if (this.lightsaber.timeout() === true) {
              this.end();

              return false;
            }
          } else {
            clearInterval();
          }
        });
      }, 2000);
    }
  }

  end()
  {
    this.appIsRunning = false;
    this.game.endGame();
    let playerData = this.player.getPlayerData();
    let data = {
      game_type: this.mode,
      player_total_points: playerData.totalPoints,
      computer_total_points: 0,
      player_total_answers: playerData.totalAnswers,
      answers: playerData.answers
    };
      
    const modal = this.gameover.createModal(data, submitFn);
      modal.style =
        'display: block; max-width: 800px; z-index: 1000; background-color: white; border-radius: 10px; padding: 10px; margin: auto; position: fixed; top: 10%; left: 10%;';

      document.querySelector('#game-over').appendChild(modal);
      document.querySelector('#game-over').style =
        'height: 100vh; position: fixed; width: 100vw; top: 0; z-index: 900; left: 0; background-color: rgba(0, 0, 0, 0.5)';
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
}

export default App;
