
const id = setInterval(checkGame, 1000);

let width = 100.83;
let start = true;

function checkGame(){

    let el1 = document.getElementsByClassName("timer")[0];
    
    if(start === true){
        el1.style.visibility = 'visible';
        return frame();
    }
    else if(start === false){
        el1.style.visibility = 'hidden';
        clearInterval(id);
    }
}

function frame() {

        let el2=document.getElementsByClassName("myBar")[0];
        
        if (width <= 1.3) {
            el2.style.visibility = 'hidden';
            start = false;            
        } else {
            width = width-0.83;
            el2.style.width = width + "%";
        }
}


module.exports.checkGame = checkGame;