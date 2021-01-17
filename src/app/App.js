import Counter from './components/timer/counter';
import Lightsaber from './components/timer/lightsaber';
import answearDisplay from '../answearDisplay/answearDisplay';
import Rules from '../rules/rules';
import MainMenu from "../mainMenu/mainMenu";
import Image from "../image/image";
import GameOver from '../gameOver/gameOver';

class App {
    constructor(options) {
      // TODO: throw after add gameStarted flag to start button
      const gameStarted = false;

      this.counter = new Counter(gameStarted);
      this.lightsaber = new Lightsaber(gameStarted);
      
      this.mainmenu = new MainMenu();
      
      this.image = new Image();
      // this.image = new Image("../../static/assets/img/modes/people/11.jpg");
      
      this.rules = new Rules('starships-intro');   // characters-intro | vehicles-intro | starships-intro | characters-question | vehicles-question | starships-question
      
      this.answearDisplay = new answearDisplay(answear, elementId);
      // First argument 'answear' boolean, is responsible for checking correct answear
      // Second is ID of a DOMelement which should be colored
      
       this.gameover=new GameOver(data, submitFn)   //takes data as js object and callback after submitting player nick
    }
}

export default App;
