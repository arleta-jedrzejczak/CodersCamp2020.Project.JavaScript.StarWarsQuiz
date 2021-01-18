import answearDisplay from '../answearDisplay/answearDisplay';
import Rules from '../rules/rules';
import TableWithScores from './components/TableWithScores';

let players = [
    { player: "Ania", answered: "15/20" },
    { player: "Mateusz", answered: "14/30" },
    { player: "Leia Organa", answered: "1/23" }
  ];

  class App {
    constructor(options) {
    //this.timer = new Timer('timer');
    //this.answearDisplay = new answearDisplay(answear, elementId);
    //this.rules = new Rules('starships-intro');   // characters-intro | vehicles-intro | starships-intro | characters-question | vehicles-question | starships-question
    this.tableWithScores = new TableWithScores('table');
    this.tableWithScores.renderTable(players);
}

}

export default App;