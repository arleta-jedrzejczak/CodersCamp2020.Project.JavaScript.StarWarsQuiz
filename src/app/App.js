import MainMenu from "../mainMenu/mainMenu";
import Image from "../image/image";

class App {
    constructor(options) {
        this.mainmenu = new MainMenu();
        this.image = new Image();
    }
}

export default App;
