class GamePanel  {
    create()
    {
        let answers = ['Answer', 'Answer', 'Answer', 'Answer'];
        document.getElementById('gameModeDescriptionText').style.display = 'none';
        const container = document.getElementById('currentGameModeDescription');
        const content = document.createElement('DIV');
        const list = document.createElement('UL');
        list.style = `
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
        `;

        answers.forEach(answer => {
            let listItem = document.createElement('LI');
            listItem.innerText = '';
            listItem.setAttribute('data-answer', '');
            listItem.innerText = answer;
            listItem.setAttribute('data-answer', answer);
            listItem.setAttribute('id', answer.split(' ')[0]);
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
    }

    render(answers)
    {
        const btns = document.querySelectorAll('li[data-answer]');
        this.answers = answers;
        console.log(this.answers);
        this.answers.forEach((answer, index) => {
            btns[index].style.background = '#FFFFFF';
            btns[index].style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25)';
            btns[index].innerText = answer;
            btns[index].setAttribute('data-answer', answer);
            btns[index].setAttribute('id', answer.split(' ')[0]);
        });
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