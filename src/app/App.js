import answearDisplay from '../answearDisplay/answearDisplay'
import Rules from '../rules/rules'
import GameOver from '../gameOver/gameOver'
import {data} from '../gameOver/data'

export const App = ({options}) => {
    
    // this.answearDisplay = new answearDisplay(answear, elementId);
    // // First argument 'answear' boolean, is responsible for checking correct answear
    // // Second is ID of a DOMelement which should be colored

    // this.rules = new Rules('starships-intro')   // characters-intro | vehicles-intro | starships-intro | characters-question | vehicles-question | starships-question

    this.gameover=new GameOver(data)
}