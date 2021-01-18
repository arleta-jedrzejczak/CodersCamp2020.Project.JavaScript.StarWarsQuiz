// Creating answearDisplay class

class answearDisplay {
  constructor(answear, elementId) {
    this.answear = answear;
    this.element = document.getElementById(elementId);
    this.answearColor();
  }

  answearColor() {
    if (this.answear) {
      this.element.setAttribute(
        'style',
        `
                background: #41ED25;
                box-shadow:  0px 4px 30px #51FC00; 
            `,
      );
    } else {
      this.element.setAttribute(
        'style',
        `
                background: #FF0000;
                box-shadow:  0px 4px 30px #FF0000;
            `,
      );
    }
    setTimeout(this.answearTimeDisplay, 1000);
  }

  answearTimeDisplay() {
    this.element.setAttribute(
      'style',
      `
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        `,
    );
  }
}

// export answearDisplay class
export default answearDisplay;
