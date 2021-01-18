import GameEngine from "./components/GameEngine";

class App {
    constructor(options) {
        this.mode = 'people';
        this.options = options.options;
        this.newGame = new GameEngine(options, this.mode);

        this.#initApp();
    }

    #initApp ()
    {
        this.newGame.init();
        this.#run();
    }

    #run()
    {
        if (this.newGame.startGame()) {
            this.newGame.renderQuestions()
        }
    }

    #stop()
    {
        this.newGame.gameOver();
    }
    

    /*
    toDataURL(options.imageUrl + 'people/1.jpg')
    .then(dataUrl => {
        console.log(dataUrl);

        return dataUrl;
    });
    */
}

export default App;