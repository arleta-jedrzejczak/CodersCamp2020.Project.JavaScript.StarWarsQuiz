
const idTimer = setInterval(checkGame1, 1000);

let time = 120;
let start1 = true;

let countDownEl = document.getElementsByClassName("counter")[0];
countDownEl.style.visibility = 'visible';

function checkGame1(){

    if(start1 === true){
        if(time>0){
        
            const minutes = Math.floor(time/60);
            let seconds = time % 60;
            seconds = seconds<10 ? '0'+seconds : seconds;
            countDownEl.innerHTML = ` Time Left: ${minutes}m ${seconds}s`;
            time--;
        }
        else{
            start1 = false;
            countDownEl.innerHTML = ` Time Left: 0m 00s`;    
        }
    }
    else{
        clearInterval(idTimer);
        countDownEl.style.visibility = 'hidden';
    }
}


module.exports.checkGame1 = checkGame1;