// Creating answearDisplay class

class answearDisplay {
    constructor(answear){
        this.answearColor(answear);
    }

    answearColor(answear){
        if(answear === 'is_correct'){
            answear.classList.add(".correctAnswear")
        }else if(answear === 'is_incorrect'){
            answear.classList.add(".incorrectAnswear")
        }
        setTimeout(this.answearTimeDisplay,1000);
    }

    answearTimeDisplay(){
        if(answear === 'is_correct'){
            answear.classList.remove(".correctAnswear")
        }else if(answear === 'is_incorrect'){
            answear.classList.remove(".incorrectAnswear")
        }
    }
}