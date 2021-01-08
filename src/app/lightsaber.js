const el1=document.getElementById("lightsaber");

const el2=document.getElementById("parr");

const el3=document.getElementById("myProgress");

const el4=document.getElementById("myBar");



el1.setAttribute("style", `
visibility: visible;
display: inline-block;
height: 40px;
postion: relative;
`);

el2.setAttribute("style", `
visibility: visible;
display: inline-block;
width: 70%;
height: 40px;
position: relative;
left: -31px;
top: -5px
`);

el3.setAttribute("style", `
width: 100%;
height: 40px;;
border-radius: 15px;
background-color: #ddd;
`);

el4.setAttribute("style", `
width: 100%;
height: 40px;
border-radius: 15px;
background-color: white;
box-shadow: 0px 0px 25px 10px red;
`);

let width = 100;

const id = setInterval(frame, 1000);

function frame() {
    if (width <= 1.3) {
        clearInterval(id);
        el4.style.visibility = "hidden";
    } else {
        width=width-0.83;
        el4.style.width = width + "%";
    }
}

module.exports.frame = frame;