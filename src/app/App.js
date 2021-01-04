import Timer from './components/timer/timer.component';
import answearDisplay from '../answearDisplay/answearDisplay';
import Rules from '../rules/rules';

class App {
    constructor(options) {
      this.timer = new Timer('timer');
      this.answearDisplay = new answearDisplay(answear, elementId);
      // First argument 'answear' boolean, is responsible for checking correct answear
      // Second is ID of a DOMelement which should be colored

      this.rules = new Rules('starships-intro');   // characters-intro | vehicles-intro | starships-intro | characters-question | vehicles-question | starships-question
    }
}

export default App;
