/*
 * Create GameEngine class
 * SR
 */
class GameEngine {
    constructor(mode) {
        this.mode = mode;
        this.isRunning = false;
        this.gameOver = false;
    }

    init() {
        console.log('GAME_ENGINE: INIT');
        console.log(`GAME_ENGINE MODE: ${this.mode}`);
    }

    startGame() {
        this.isRunning = true;
        console.log(`GAME_ENGINE START: ${this.isRunning}`);

        return this.isRunning;
    }

    endGame() {
        return this.gameOver;
    }
}

/*
 * Export GameEngine class
 * SR
 */
export default GameEngine;