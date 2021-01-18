import API from ".././helpers/API";
import toDataURL from ".././helpers/ImageBase64";
/*
 * Create GameEngine class
 * SR
 */
class GameEngine {
    constructor(options, mode)
    {
        this.options = options.options;
        this.mode = mode;
        this.api = new API(this.options.swApiBaseUrl, this.mode);
        this.playerPoints = 0;
        this.isRunning = false;
        this.gameOver = true;
        this.questionsIds = [];
        this.answers = [];
        this.rightAnswer = '';
        this.isAnswerCorrect = false;
    }

    init()
    {
        console.log('GAME_ENGINE: INIT');
        console.log(`GAME_ENGINE: MODE: ${this.mode}`);
        console.log(`GAME_ENGINE: Ready for launch!`);
    }

    renderQuestions()
    {
        const answers = [];
        const answersIds = this.#getRandomIds();
        const rightAnswerId = answersIds[0];
        let data = {};

        // Get right answer image
        const rightAnswerImg = this.getRightAnswerImage(rightAnswerId)
        .then(dataUrl => {
            return dataUrl;
        });

        // Get all random answers
        answersIds.forEach(qid => {
            this.api.sendRequest(qid)
            .then(response => response.json())
            .then(data => answers.push(data.name));
        });

        // Get right answer
        this.rightAnswer = this.api.sendRequest(rightAnswerId)
        .then(response => response.json())
        .then(data => data.name);

        data = {
            id: rightAnswerId,
            image: rightAnswerImg,
            answers: answers,
            rightAnswer: this.rightAnswer
        };

        this.answers = [...this.answers];
        this.answers.push(data);

        console.log(data);

        return data;
    }

    getRightAnswerImage(id = null)
    {
        return toDataURL(`${this.options.imageUrl}${this.mode}${id}.jpg`);
    }

    checkPlayerAnswer(answer = null)
    {
        if (answer === this.rightAnswer) {
            this.isAnswerCorrect = true;
        }

        return this.isAnswerCorrect;
    }

    addPlayerPoint()
    {
        return this.playerPoints++;
    }

    getPlayerPoints()
    {
        return this.playerPoints;
    }

    getPlayerAnswers()
    {
        const data = {
            totalPoints: this.playerPoints,
            totalAnswers: this.answers.length,
            answers: this.answers
        };

        return JSON.stringify(data);
    }

    startGame()
    {
        this.isRunning = true;
        this.gameOver = false;
        console.log(`GAME_ENGINE: START: ${this.isRunning}`);
        this.renderQuestions();

        return this.isRunning;
    }

    endGame()
    {
        this.isRunning = false;
        this.gameOver = true;
        console.log(`GAME_ENGINE: GAMEOVER: ${this.isRunning}`);

        return this.gameOver;
    }

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

export default GameEngine;