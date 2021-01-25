class Lightsaber {
  timer = document.querySelector('#timer');
  myBar = document.querySelector('#myBar');
  redButton = document.querySelector('.redButton');
  width = 10.83;
  gameStarted = true;
  tim = false;

  checkGame() {
    if (this.gameStarted) {
      this.timer.classList.add('visible');
      this.frame();
    } else {
      this.timer.classList.remove('visible');
      this.myBar.classList.remove('hidden');
      clearInterval(this.id);
      this.tim = true;
    }
  }
  frame() {
    if (this.width <= 1.3) {
      this.myBar.classList.add('hidden');
      this.gameStarted = false;
    } else {
      this.width = this.width - 0.83;
      this.myBar.style.width = this.width + '%';
    }
  }
  timeout() {
    return this.tim;
  }
}
export default Lightsaber;
