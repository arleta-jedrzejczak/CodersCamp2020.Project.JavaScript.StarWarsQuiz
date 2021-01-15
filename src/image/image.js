class Image {

    constructor() {
        this.addListeners();
    }

    puttingImagePeople() {

        if (document.querySelector("#buttonPeople").getAttribute("isactive") === "true") {
        
            if(document.querySelector("#img")) {
                const imgElem = document.querySelector("#img");
                imgElem.parentNode.removeChild(imgElem);
            }
            console.log("aaa")
            
            const img = document.createElement('img');
            let source = "../../static/assets/img/modes/people/10.jpg";
            // source = src
            img.id="img"
            img.setAttribute("src", source);
            img.style=
            `
            box-shadow: 0 0 25px 1px red;
            border-radius: 2rem;
            background-repeat: no-repeat;
            background-size: cover;
            height: auto;
            width: 70%;
            `
            
            document.querySelector('.logoImgSettings').appendChild(img);
        }
    }

    puttingImageVehicles() {
        if (document.querySelector("#buttonVehicles").getAttribute("isactive") === "true") {
        
            if(document.querySelector("#img")) {
                const imgElem = document.querySelector("#img");
                imgElem.parentNode.removeChild(imgElem);
            }
            console.log("aaa")
            
            const img = document.createElement('img');
            let source = "../../static/assets/img/modes/vehicles/14.jpg";
            // source = src
            img.id="img"
            img.setAttribute("src", source);
            img.style=
            `
            box-shadow: 0 0 25px 1px red;
            border-radius: 2rem;
            background-repeat: no-repeat;
            background-size: cover;
            height: auto;
            width: 60%;
            `
            
            document.querySelector('.logoImgSettings').appendChild(img);
        }
    }

    puttingImageStarships() {
        if (document.querySelector("#buttonStarships").getAttribute("isactive") === "true") {
        
            if(document.querySelector("#img")) {
                const imgElem = document.querySelector("#img");
                imgElem.parentNode.removeChild(imgElem);
            }
            console.log("aaa")
            
            const img = document.createElement('img');
            let source = "../../static/assets/img/modes/starships/15.jpg";
            // source = src
            img.id="img"
            img.setAttribute("src", source);
            img.style=
            `
            box-shadow: 0 0 25px 1px red;
            border-radius: 2rem;
            background-repeat: no-repeat;
            background-size: cover;
            height: auto;
            width: 60%;
            `
            
            document.querySelector('.logoImgSettings').appendChild(img);
        }
    }

    addListeners() {
            document.querySelector("#buttonPeople").addEventListener("click", () => this.puttingImagePeople());
            document.querySelector("#buttonVehicles").addEventListener("click", () => this.puttingImageVehicles());
            document.querySelector("#buttonStarships").addEventListener("click", () => this.puttingImageStarships());
    }

    removeImg() {
        const imgElem = document.querySelector("#img");
        imgElem.parentNode.removeChild(imgElem);
    }
}

export default Image;





