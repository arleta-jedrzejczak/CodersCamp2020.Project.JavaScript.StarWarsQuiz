import GameEngine from "./components/GameEngine";
import Player from "./components/Player";
import EventsHandlers from "./components/GameHanding";

class App {
    constructor(options) {
        this.mode = 'people';
        this.options = options.options;
        this.player = new Player();
        this.newGame = new GameEngine(options, this.mode, this.player);
        this.eventHandlers = new EventsHandlers();

        this.#initApp();
    }

    #initApp ()
    {
        this.newGame.init();
        this.#run();
    }

    #run()
    {
        this.newGame.startGame();
        this.newGame.renderQuestions();
    }

    #stop()
    {
        this.newGame.gameOver();
    }
}

export default App;