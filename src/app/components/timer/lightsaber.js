class Lightsaber {
    timer = document.querySelector('#timer');
    myBar = document.querySelector('#myBar');
    width = 100.83;
    id = setInterval(() => this.checkGame(), 1000);
    constructor(gameStarted) {
        this.gameStarted = gameStarted;
    }
    checkGame() {
        if (this.gameStarted) {
            this.timer.classList.add('visible');
            this.frame();
        } else{
            this.timer.classList.remove('visible');
            clearInterval(this.id);
        }
    }
    frame() {
        if (this.width <= 1.3) {
            this.myBar.classList.add('hidden');
            this.gameStarted = false;
        } else {
            this.width = this.width-0.83;
            this.myBar.style.width = this.width + "%";
        }
    }
}
export default Lightsaber;