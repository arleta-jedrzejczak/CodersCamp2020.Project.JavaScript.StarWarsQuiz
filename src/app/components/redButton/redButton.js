class RedButton {
    
    constructor(gameStarted){
        this.gameStarted=gameStarted;
        // console.log(this.gameStarted);
        this.gameStarted=true;
        console.log(this.gameStarted);
        this.redBtn = document.querySelector('.redButton');
        let self = this;

        this.redBtn.innerHTML = `PLAY THE GAME`;
        this.redBtn.addEventListener('click', function(){
            self.play();
        });
        
        
        
        
    }

    play = function(){
        console.log(this.gameStarted);
        this.gameStarted=true;
        // console.log(this.gameStarted);
        this.redBtn.classList.add('hidden');
    }
    
}
export default RedButton;