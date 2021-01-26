class Counter {
  countDownEl = document.querySelector('#counter');
  time = 120;
  gameStarted = true;

  checkGame() {
    if (this.gameStarted) {
      if (this.time > 0) {
        let minutes = Math.floor(this.time / 60);
        let seconds = this.time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        this.countDownEl.innerHTML = ` Time Left: ${minutes}m ${seconds}s`;
        this.time--;
      } else {
        this.gameStarted = false;
        this.countDownEl.innerHTML = ` Time Left: 0m 00s`;
      }
    } else {
      clearInterval(this.idTimer);
    }
  }
}
export default Counter;
