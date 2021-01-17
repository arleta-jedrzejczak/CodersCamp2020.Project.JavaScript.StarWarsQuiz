import 'regenerator-runtime/runtime' //async/await with Parcel
import {App} from "./app/App";

const ONE_SECOND_MILLIS = 1000;
const IMAGES_URL = 'static/assets/img/modes/';
const SW_API_BASE_URL = process.env.SW_API_BASE_URL || "https://swapi.dev/api";
const QUIZ_MAX_TIME = process.env.QUIZ_MAX_TIME_SECONDS ? process.env.QUIZ_MAX_TIME_SECONDS * ONE_SECOND_MILLIS : 120 * ONE_SECOND_MILLIS;

window.onload = () => App({
    options: {
        swApiBaseUrl: SW_API_BASE_URL, 
        quizMaxTime: QUIZ_MAX_TIME,
        imageUrl: IMAGES_URL
    }
});
