/*
 * Create GameEngine class
 * SR
 */
class GameEngine {
    constructor(mode, apiUrl) {
        this.api = apiUrl;
        this.mode = mode;
        this.player = {};
        this.isRunning = false;
        this.gameOver = true;
        this.questionsIds = [];
        this.questions = [];
        this.isAnswerCorrect = false;
    }

    init() {
        console.log('GAME_ENGINE: INIT');
        console.log(`GAME_ENGINE: MODE: ${this.mode}`);
        console.log(`GAME_ENGINE: Ready for launch!`);
    }

    
    getQuestion()
    {
        return 
    }

    

    /*
     * Render four questions
     * SR
     */
    renderQuestions() {
        // Issue number 5
    }

    /*
     * Render four questions
     * SR
     */
    getPlayerAnswer() {
        // Issue number 23
    }

    /*
     * Render four questions
     * SR
     */
    checkPlayerAnswer() {

    }

    /*
     * Watch and calculate 
     * SR
     */
    calculatePlayerPoints() {

    }

    /*
     * Save Player score to local storage
     * SR
     */
    saveLocalPoints() {

    }

    /*
     * Start game
     * SR
     */
    startGame() {
        this.isRunning = true;
        this.gameOver = false;
        console.log(`GAME_ENGINE: START: ${this.isRunning}`);

        return this.isRunning;
    }

    /*
     * End game
     * SR
     */
    endGame() {
        this.isRunning = false;
        this.gameOver = true;
        console.log(`GAME_ENGINE: GAMEOVER: ${this.isRunning}`);

        return this.gameOver;
    }

    /*
     * Private methods returnig 4 unique IDs
     * SR
     */
    #getrandomIds()
    {
        let lastId = 0;

        switch(this.mode) {
            case 'people':
                lastId = 88;
                break;
            case 'vehicles':
                lastId = 42;
                break;
            case 'starships':
                lastId = 48;
                break;
            default:
                lastId = 0;
                break;
        }

        if (lastId) {
            while(this.questions.length < 4) {
                let random = Math.floor(Math.random() * (lastId - 1 + 1)) + 1;

                if (!this.questions.includes(random)) {
                    this.questions.push(random);
                }
            }

            return this.questions;
        }

        console.error(`GAME ENGINE: ERROR: getQuestions->invalid game mode: ${this.mode}`);

        return false;
    }
}

/*
 * Export GameEngine class
 * SR
 */
export default GameEngine;