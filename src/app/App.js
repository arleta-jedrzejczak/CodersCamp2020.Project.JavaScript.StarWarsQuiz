import answearDisplay from '../answearDisplay/answearDisplay'
import Rules from '../rules/rules'
import localStorage from '../localStorage/localStorage'

export const App = ({options}) => {
    
    this.answearDisplay = new answearDisplay(answear, elementId);
    // First argument 'answear' boolean, is responsible for checking correct answear
    // Second is ID of a DOMelement which should be colored

    this.rules = new Rules('starships-intro')   // characters-intro | vehicles-intro | starships-intro | characters-question | vehicles-question | starships-question

    this.localStorage = new localStorage();
    // Class have 2 methods localStorage.save(obj), where 'obj' is object with 2 parametrs player - that have player nick(string) and answered - that have score of that player(string). This method save this obj in score table.
    // Second method localStorage.getScore() which return table of 3 highest scores in order.
}