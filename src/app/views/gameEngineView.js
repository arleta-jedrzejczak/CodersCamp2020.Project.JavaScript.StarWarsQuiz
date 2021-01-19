class GamePanel  {
    render(answers)
    {
        const btns = document.querySelectorAll('li[data-answer]');
        this.answers = answers;
        if (btns.length == 0) {
            document.getElementById('gameModeDescriptionText').style.display = 'none';
            const container = document.getElementById('currentGameModeDescription');
            const content = document.createElement('DIV');
            const list = document.createElement('UL');
            list.style = `
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
            `;

            this.answers.forEach(answer => {
                let listItem = document.createElement('LI');
                listItem.innerText = '';
                listItem.setAttribute('data-answer', '');
                listItem.innerText = answer;
                listItem.setAttribute('data-answer', answer);
                listItem.style = `
                    width: 48%;
                    margin: .5rem;
                    padding: 2rem;
                    text-align: center;
                    font-size: 2rem;
                    border: .1rem solid gray;
                    border-radius: .7rem;
                    box-sizing: border-box;
                `;
                list.appendChild(listItem);
            });

            content.appendChild(list);
            container.appendChild(content);
        } else {
            this.clear();
            for (let i = 0; i <= this.answers.length; i++) {
                btns[i].innerText = this.answers[i];
                btns[i].setAttribute('data-answer', this.answers[i]);
            }
        }
    }

    clear()
    {
        const btns = document.querySelectorAll('li[data-answer]');
        btns.forEach(el => {
            el.innerText = '';
            el.setAttribute('data-answer', '');
        })
    }
}

export default GamePanel;