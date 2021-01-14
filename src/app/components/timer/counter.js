class Counter {
    countDownEl = document.querySelector('#counter');
    time = 120;
    idTimer = setInterval(() => this.checkGame(), 1000);
    
    constructor(gameStarted) {
        this.gameStarted = gameStarted;
    }

    checkGame() {

        if(this.gameStarted){
            if(this.time > 0) {
                let minutes = Math.floor(time/60);
                let seconds = time % 60;
                seconds = seconds<10 ? '0'+seconds : seconds;
                this.countDownEl.innerHTML = ` Time Left: ${minutes}m ${seconds}s`;
                time--;
            }
            else {
                this.gameStarted = false;
                this.countDownEl.innerHTML = ` Time Left: 0m 00s`;    
            }
        }
        else{
            clearInterval(this.idTimer);
        }
    }
}
let counter = new Counter(true);
// export default Counter;