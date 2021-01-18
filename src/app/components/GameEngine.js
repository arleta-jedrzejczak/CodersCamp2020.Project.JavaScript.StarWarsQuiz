
import API from ".././helpers/API";
import toDataURL from ".././helpers/ImageBase64";
/*
 * Create GameEngine class
 * SR
 */
class GameEngine {
    constructor(options, mode) {
        this.options = options.options;
        this.mode = mode;
        this.api = new API(this.options.swApiBaseUrl, this.mode);
        this.player = {};
        this.isRunning = false;
        this.gameOver = true;
        this.questionsIds = [];
        this.questions = [];
        this.isAnswerCorrect = false;
    }

    init()
    {
        console.log('GAME_ENGINE: INIT');
        console.log(`GAME_ENGINE: MODE: ${this.mode}`);
        console.log(`GAME_ENGINE: Ready for launch!`);
    }

    /*
     * Render four questions
     * SR
     */
    renderQuestions()
    {
        const questionsId = this.#getRandomIds();
        const correctAnswerId = questionsId[0];
        const correctAnswerImg = toDataURL(`${this.options.imageUrl}${this.mode}${correctAnswerId}.jpg`)
        .then(dataUrl => {
            return dataUrl;
        });

        let answers = this.#getAnswers();

        if (answers) {
            let nextQuestion = {
                id: correctAnswerId,
                image: correctAnswerImg,
                answers: answers,
                rightAnswer: answers[correctAnswerId]
            };

            this.questions = [...this.questions];
            this.questions.push(nextQuestion);

            console.log(this.questions);

            return nextQuestion;
        }
    }

    #getAnswers()
    {
        let ids = this.questionsIds;
        let answers = [];

        for (let i = 0; i < ids.length; i++) {
            this.api.sendRequest(ids[i])
            .then(response => response.json())
            .then(data => answers.push(data.name));
        }

        return answers;
    }

    /*
     * Render four questions
     * SR
     */
    getPlayerAnswer()
    {
        // Issue number 23
    }

    /*
     * Render four questions
     * SR
     */
    checkPlayerAnswer()
    {

    }

    /*
     * Watch and calculate 
     * SR
     */
    calculatePlayerPoints()
    {

    }

    /*
     * Save Player score to local storage
     * SR
     */
    saveLocalPoints()
    {

    }

    /*
     * Start game
     * SR
     */
    startGame()
    {
        this.isRunning = true;
        this.gameOver = false;
        console.log(`GAME_ENGINE: START: ${this.isRunning}`);

        return this.isRunning;
    }

    /*
     * End game
     * SR
     */
    endGame()
    {
        this.isRunning = false;
        this.gameOver = true;
        console.log(`GAME_ENGINE: GAMEOVER: ${this.isRunning}`);

        return this.gameOver;
    }

    /*
     * Private methods returnig 4 unique IDs
     * SR
     */
    #getRandomIds()
    {
        let lastId = 0;

        switch(this.mode) {
            case 'people':
                lastId = 82;
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
            while(this.questionsIds.length < 4) {
                let random = Math.floor(Math.random() * (lastId - 1 + 1)) + 1;

                if (!this.questionsIds.includes(random)) {
                    this.questionsIds.push(random);
                }
            }

            return this.questionsIds;
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