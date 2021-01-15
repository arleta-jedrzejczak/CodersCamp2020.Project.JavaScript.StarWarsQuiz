import Counter from './components/timer/counter';
import Lightsaber from './components/timer/lightsaber';


class App {
    constructor(options) {

        const gameStarted = true;
        this.counter = new Counter(gameStarted);
        this.lightsaber = new Lightsaber(gameStarted);
    }
}

export default App;
