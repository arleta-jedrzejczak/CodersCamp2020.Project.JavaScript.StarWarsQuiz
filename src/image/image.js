class Image {

    constructor(src2) {
        this.addListeners(src2);
    }

    removeImg() {
        const imgElem = document.querySelector("#img");
        imgElem.parentNode.removeChild(imgElem);
    }

    puttingImage(src2) {
        
        if (document.querySelector("#buttonPeople").getAttribute("isactive") === "true") {
        
            if(document.querySelector("#img")) {
                this.removeImg();
            }

            const img = document.createElement('img');
            let source = "../../static/assets/img/modes/people/10.jpg";
            // source = src2
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

        if (document.querySelector("#buttonVehicles").getAttribute("isactive") === "true") {
        
            if(document.querySelector("#img")) {
                this.removeImg();
            }

            const img = document.createElement('img');
            let source = "../../static/assets/img/modes/vehicles/14.jpg";
            // source = src2
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

        if (document.querySelector("#buttonStarships").getAttribute("isactive") === "true") {
        
            if(document.querySelector("#img")) {
                this.removeImg();
            }

            const img = document.createElement('img');
            let source = "../../static/assets/img/modes/starships/15.jpg";
            // source = src2
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

    addListeners(src2) {
        document.querySelector("#buttonPeople").addEventListener("click", () => this.puttingImage(src2));
        document.querySelector("#buttonVehicles").addEventListener("click", () => this.puttingImage(src2));
        document.querySelector("#buttonStarships").addEventListener("click", () => this.puttingImage(src2));
    }
}

export default Image;