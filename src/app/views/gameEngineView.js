class GamePanel  {
    render(answers)
    {
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
    }
}

export default GamePanel;