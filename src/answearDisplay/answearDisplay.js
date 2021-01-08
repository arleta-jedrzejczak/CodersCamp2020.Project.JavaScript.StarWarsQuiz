// Creating answearDisplay class
var element = document.getElementById('1');
var answear = false;

class answearDisplay {
    constructor(answear, element){
        this.answear = answear;
        this.element = element;
        this.answearColor();
    }

    answearColor(){
        if(this.answear){
            this.element.classList.add('correctAnswear')
        }else{
            this.element.classList.add('incorrectAnswear')
        }
        setTimeout(this.answearTimeDisplay,1000);
    }

    answearTimeDisplay(){
        if(this.answear){
            this.element.classList.remove("correctAnswear")
        }else{
            this.element.classList.remove("incorrectAnswear")
        }
    }
}


let answear1 = new answearDisplay(answear, element);
answear1.answearColor();
// // export answearDisplay class
// export default answearDisplay;