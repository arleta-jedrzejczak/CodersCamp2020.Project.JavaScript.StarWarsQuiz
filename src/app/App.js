import GameEngine from "./components/GameEngine";
import toDataURL from "./helpers/ImageBase64";
import API from "./helpers/API";

export const App = ({options}) => {
    const api = new API();
    const newGame = new GameEngine('trololololo');
    newGame.init();
    newGame.startGame();
    newGame.getQuestions();

    /*
    toDataURL(options.imageUrl + 'people/1.jpg')
    .then(dataUrl => {
        console.log(dataUrl);

        return dataUrl;
    });
    */
}