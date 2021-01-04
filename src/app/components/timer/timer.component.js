class Timer {
   constructor(id) {
        this.render(id);
    }

    render(id) {
        const timer = document.querySelector(`#${id}`);
        const paragraph = document.createElement('p');
        timer.appendChild(paragraph);
        paragraph.innerHTML = `Time Left: `;
    }
}

export default Timer;
