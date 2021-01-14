import Counter from './components/timer/counter';
import Lightsaber from './components/timer/lightsaber';
import answearDisplay from '../answearDisplay/answearDisplay';
import Rules from '../rules/rules';

class App {
    constructor(options) {
      // TODO: throw after add gameStarted flag to start button
      const gameStarted = true;
      this.counter = new Counter(gameStarted);
      this.lightsaber = new Lightsaber(gameStarted);
      this.answearDisplay = new answearDisplay(answear, elementId);
      // First argument 'answear' boolean, is responsible for checking correct answear
      // Second is ID of a DOMelement which should be colored

      this.rules = new Rules('starships-intro');   // characters-intro | vehicles-intro | starships-intro | characters-question | vehicles-question | starships-question
    }
}

export default App;
