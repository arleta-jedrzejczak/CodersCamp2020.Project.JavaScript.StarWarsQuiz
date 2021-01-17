class MainMenu {

    constructor() {
        this.createMainMenu();
        this.addListeners();
    }

    creatingButtonContainer (name) {
        const mainMenuContainer = document.createElement('div');
        mainMenuContainer.id = `${name}`;
        mainMenuContainer.style=
            `
            background-color: #fff; 
            margin = 1rem; 
            border-radius: 2rem; 
            box-shadow: 0 0 25px 1px red;
            display: flex;
            justify-content: space-around;
            padding: 4rem;
            margin-bottom: 10rem;
            `
        document.querySelector('.gameArea').appendChild(mainMenuContainer);
        document.querySelector('.gameArea').insertBefore(mainMenuContainer, document.querySelector('.gameArea').firstChild)
    };git status
    
    creatingButton(name) {
        let button = document.createElement("button");
        let buttonH2 = document.createElement('h2');
        let buttonDes = document.createTextNode(`${name}`);
        button.id = `button${name}`;
        buttonH2.appendChild(buttonDes);
        button.appendChild(buttonH2);
        button.classList.add("button", "gameModeButton", "hoverCursor");
        button.setAttribute("isactive", "false");
    
        button.style=
        `
        background-color: #fff; 
        border: none; 
        color: #e6e6e6; 
        `;
    
        document.querySelector('#mainMenu').appendChild(button);
    };
    
    puttingCorrectColor() {
        const isActivePeople = buttonPeople.getAttribute("isActive");
        const isActiveVehicle = buttonVehicles.getAttribute("isActive");
        const isActiveStarships = buttonStarships.getAttribute("isActive");
        
        isActivePeople === "true" ? buttonPeople.style.color = "#000" : buttonPeople.style.color = "#e6e6e6";
        isActiveVehicle === "true" ? buttonVehicles.style.color = "#000" : buttonVehicles.style.color = "#e6e6e6";
        isActiveStarships === "true" ? buttonStarships.style.color = "#000" : buttonStarships.style.color = "#e6e6e6";
    };

    creatingButtonPeopleActive() {
        buttonPeople.setAttribute("isActive", "true");
        buttonVehicles.setAttribute("isActive", "false")
        buttonStarships.setAttribute("isActive", "false")
    
        this.puttingCorrectColor();
    };
    
    creatingButtonVehiclesActive() {
        buttonPeople.setAttribute("isActive", "false");
        buttonVehicles.setAttribute("isActive", "true");
        buttonStarships.setAttribute("isActive", "false");
    
        this.puttingCorrectColor();
    };
    
    creatingButtonStarshipsActive() {
        buttonPeople.setAttribute("isActive", "false");
        buttonVehicles.setAttribute("isActive", "false");
        buttonStarships.setAttribute("isActive", "true");
    
        this.puttingCorrectColor();
    };

    createMainMenu() {
        this.creatingButtonContainer("mainMenu")
        this.creatingButton("People");
        this.creatingButton("Vehicles");
        this.creatingButton("Starships");
    }

    addListeners() {
        document.querySelector("#buttonPeople").addEventListener("click", () => this.creatingButtonPeopleActive());
        document.querySelector("#buttonVehicles").addEventListener("click", () => this.creatingButtonVehiclesActive());
        document.querySelector("#buttonStarships").addEventListener("click", () => this.creatingButtonStarshipsActive());
    }
}


export default MainMenu;