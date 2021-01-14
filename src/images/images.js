
// types: People, Vehicles, Starships
// function creatingImgContainer () {
//     const imgContainer = document.createElement('div');
//     imgContainer.id = `img`;
//     imgContainer.style=
//         ` 
//         margin-bottom: 10rem;
//         `
//     document.querySelector('.logoImgSettings').appendChild(imgContainer);
// };

function addImgPeople (src) {
    
    const img = document.createElement('img');
    let source = "./static/assets/img/modes/people/10.jpg";
    // source = src
    img.setAttribute("src", source);
    img.style=
    `
    box-shadow: 0 0 25px 1px red;
    border-radius: 2rem;
    background-repeat: no-repeat;
    background-size: cover;
    height: 70%;
    width: auto;
    `
    
    document.querySelector('.logoImgSettings').appendChild(img);
}

addImgPeople();
