import Counter from './components/timer/counter';
import Lightsaber from './components/timer/lightsaber';
import answearDisplay from '../answearDisplay/answearDisplay';
import Rules from '../rules/rules';
import MainMenu from "../mainMenu/mainMenu";
import Image from "../image/image";

class App {
    constructor(options) {
      
      this.redButton = document.querySelector('.redButton');
      this.redButton.innerHTML = `PLAY THE GAME`;
      this.redButton .addEventListener('click', () => {
        this.renderTimer();
        this.redButton.classList.add('hidden');
      });
      
      this.mainmenu = new MainMenu();
      
      this.image = new Image();
      // this.image = new Image("../../static/assets/img/modes/people/11.jpg");
      
      this.rules = new Rules('starships-intro');   // characters-intro | vehicles-intro | starships-intro | characters-question | vehicles-question | starships-question
      
      this.answearDisplay = new answearDisplay(answear, elementId);
      // First argument 'answear' boolean, is responsible for checking correct answear
      // Second is ID of a DOMelement which should be colored

    }

    renderTimer() {
      this.counter = new Counter();
      this.lightsaber = new Lightsaber();
    }
}

export default App;
