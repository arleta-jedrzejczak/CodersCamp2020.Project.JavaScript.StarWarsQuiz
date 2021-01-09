export function changerGameMode() {
    const People = document.querySelector("#gameMode1")
    const PeopleFunction = () => "gameMode1";

    const Vehicle = document.querySelector("#gameMode2")
    const VehicleFunction = () => "gameMode2";

    const Starships = document.querySelector("#gameMode3")
    const StarshipsFunction = () => "gameMode3";

    People.addEventListener("click", PeopleFunction );
    Vehicle.addEventListener("click", VehicleFunction );
    Starships.addEventListener("click", StarshipsFunction );
}