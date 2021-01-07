// Creating answearDisplay class

class answearDisplay {
    constructor(answear, element){
        this.answear = answear;
        this.element = element;
        this.answearColor();
    }

    answearColor(){
        if(this.answear){
            this.element.classList.add(".correctAnswear")
        }else{
            this.element.classList.add(".incorrectAnswear")
        }
        setTimeout(this.answearTimeDisplay,1000);
    }

    answearTimeDisplay(){
        if(this.answear){
            this.element.classList.remove(".correctAnswear")
        }else{
            this.element.classList.remove(".incorrectAnswear")
        }
    }
}

// export answearDisplay class
export default answearDisplay;