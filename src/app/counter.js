const countDownEl=document.getElementById("counter");

countDownEl.setAttribute("style", `
color: red; 
text-align: center;
font-size: 20px;
font-weight: 800;
text-shadow: 5px 5px 40px red, 0px 5px 5px grey;
`);

const idTimer = setInterval(updateCountDown,1000);
let time = 120;
function updateCountDown(){
    if(time>0){
        const minutes = Math.floor(time/60);
        let seconds = time % 60;
        seconds = seconds<10 ? '0'+seconds : seconds;
        countDownEl.innerHTML=` Time Left: ${minutes}m ${seconds}s`;
        time--;
    }
    else{
        clearInterval(idTimer);
        countDownEl.innerHTML=` Time Left: 0m 00s`;
    } 
}

module.exports.updateCountDown = updateCountDown;