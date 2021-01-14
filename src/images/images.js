
// types: People, Vehicles, Starships
function creatingButtonContainer (type) {
    const imgContainer = document.createElement('div');
    mainMenuContainer.id = `img${type}`;
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
    document.querySelector('.logoImgSettings').appendChild(mainMenuContainer);
};