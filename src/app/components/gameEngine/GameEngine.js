import API from ".././api/API";
import toDataURL from "../.././helpers/ImageBase64";

class GameEngine {
    constructor(options, mode, player)
    {
        this.options = options.options;
        this.mode = mode;
        this.api = new API(this.options.swApiBaseUrl, this.mode);
        this.player = player;
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
        this.#getRandomIds();
        const answers = [];
        const answersIds = this.questionsIds;
        const rightAnswerId = answersIds[0];
        let data = {};

        // Get all random answers
        answersIds.forEach(qid => {
            this.api.sendRequest(qid)
            .then(response => response.json())
            .then(data => {
                answers.push(data.name);
            })
        });

        // Get right answer
        this.api.sendRequest(rightAnswerId)
        .then(response => response.json())
        .then(data => this.rightAnswer = data.name);

        data = {
            id: rightAnswerId,
            answers: answers,
            rightAnswer: this.rightAnswer
        };

        this.answers = [...this.answers];
        this.answers.push(data);

        console.log(data);

        return data;
    }

    checkAnswer(answer = null)
    {
        if (answer === this.rightAnswer) {
            this.isAnswerCorrect = true;
            this.player.addPlayerPoint();
        }

        return this.isAnswerCorrect;
    }

    startGame()
    {
        this.isRunning = true;
        this.gameOver = false;
        console.log(`GAME_ENGINE: START: ${this.isRunning}`);

        return this.isRunning;
    }

    theLoop(callback)
    {
        setInterval(() => {
            callback();
        }, 1000);
    }

    isRunning()
    {
        return this.isRunning;
    }

    endGame()
    {
        this.isRunning = false;
        this.gameOver = true;
        console.log(`GAME_ENGINE: GAMEOVER`);

        return this.gameOver;
    }

    #getRandomIds()
    {
        let lastId = 0;
        this.questionsIds = [];

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