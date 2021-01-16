import MainMenu from "../mainMenu/mainMenu";
import Image from "../image/image";

class App {
    constructor(options) {
        this.mainmenu = new MainMenu();
        this.image = new Image();
        // this.image = new Image("../../static/assets/img/modes/people/11.jpg");
    }
}

export default App;
