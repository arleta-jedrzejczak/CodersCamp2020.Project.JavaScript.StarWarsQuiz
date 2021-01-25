// Creating answearDisplay class

class answearDisplay {
  constructor(answear, elementId) {
    this.answear = answear;
    this.element = document.getElementById(elementId);
    this.answearColor();
  }

  answearColor() {
    if (this.answear) {
      this.element.style.background = '#41ED25';
      this.element.style.boxShadow = '0px 4px 30px #51FC00';
    } else {
      this.element.style.background = '#FF0000';
      this.element.style.boxShadow = '0px 4px 30px #FF0000';
    }
  }
}

// export answearDisplay class
export default answearDisplay;
