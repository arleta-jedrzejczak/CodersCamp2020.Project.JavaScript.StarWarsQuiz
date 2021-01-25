import localStorage from './../localStorage/localStorage';

class GameOver {
  constructor() {
    this.nick = '';
    this.localStorage = new localStorage();
  }

  createList(data) {
    const container = document.createElement('div');
    const yoda = document.createElement('img');
    const header = document.createElement('h3');
    const summary = document.createElement('div');
    const list = document.createElement('div');

    yoda.setAttribute('id', 'yodaImage');

    header.appendChild(document.createTextNode('Detailed Answers'));
    header.style = 'text-align: center;';

    yoda.setAttribute('src', 'static/assets/img/modes/gameover/MasterYoda.png');

    const subheader = document.createElement('div');

    const subheader1 = document.createElement('h5');
    subheader1.appendChild(document.createTextNode(''));
    const subheader2 = document.createElement('h5');
    subheader2.appendChild(document.createTextNode('You'));
    const subheader3 = document.createElement('h5');
    subheader3.appendChild(document.createTextNode('Computer'));
    const subheader4 = document.createElement('h5');
    subheader4.appendChild(document.createTextNode('Answer'));

    subheader1.style = 'color: #666';
    subheader2.style = 'color: #666';
    subheader3.style = 'color: #666';
    subheader4.style = 'color: #666';

    subheader.appendChild(subheader1);
    subheader.appendChild(subheader2);
    subheader.appendChild(subheader3);
    subheader.appendChild(subheader4);

    data.answers.forEach((answ) => {
      const player = document.createElement('p');
      const computer = document.createElement('p');
      const correct = document.createElement('p');
      const img = document.createElement('img');

      player.appendChild(document.createTextNode(answ.player_answer));
      computer.appendChild(document.createTextNode(answ.computer_answer));
      correct.appendChild(document.createTextNode(answ.correct_answer));
      img.setAttribute('src', answ.img);

      answ.player_answer === answ.correct_answer
        ? (player.style = 'color: green; font-weight: 700;')
        : (player.style = 'color: red; font-weight: 700;');
      answ.computer_answer === answ.correct_answer
        ? (computer.style = 'color: green; font-weight: 700;')
        : (computer.style = 'color: red; font-weight: 700;');

      img.style = 'height: 50px; width: auto; border-radius: 10px;';

      list.appendChild(img);
      list.appendChild(player);
      list.appendChild(computer);
      list.appendChild(correct);
    });

    summary.appendChild(header);
    summary.appendChild(subheader);
    summary.appendChild(list);

    container.appendChild(yoda);
    container.appendChild(summary);

    list.setAttribute('id', 'answersList');
    summary.setAttribute('id', 'answersDetails');

    subheader.style =
      'display: grid; grid-template-columns: 40px 1fr 1fr 1fr; grid-column-gap: 20px; grid-row-gap: 10px;';
    summary.style = 'width: 100%';
    list.style =
      'height: 260px; overflow-y: scroll; overflow-x: hidden; display: grid; grid-template-columns: 40px 1fr 1fr 1fr; grid-column-gap: 20px; grid-row-gap: 10px; margin-bottom: 20px;';
    container.style = 'display: flex;';

    return container;
  }

  createInput() {
    const container = document.createElement('div');
    const input = document.createElement('input');
    input.setAttribute('id', 'nick');
    input.setAttribute('type', 'text');
    const label = document.createElement('label');

    const labelText = document.createTextNode(
      'Please fill your name in order to receive eternal glory in the whole galaxy!',
    );
    label.appendChild(labelText);

    input.addEventListener('keydown', () => {
      this.nick = document.querySelector('#nick').value;
    });

    label.style = 'font-size: 19px; text-align: center;';
    container.style = 'display: flex;';

    container.appendChild(input);
    container.appendChild(label);

    container.setAttribute('id', 'gameoverInput');

    return container;
  }

  createModal(data, submitFn) {
    const totalAnsw = data.player_total_answers;
    const playerAnswers = data.player_total_points;
    const computerAnswers = data.computer_total_points;

    const container = document.createElement('div');
    const title = document.createElement('h1');
    const subtitle = document.createElement('h3');
    const btn = document.createElement('btn');

    const gameover = document.createTextNode(`GAME OVER`);
    const description = document.createTextNode(
      `The force is strong in you young Padawan! During 1 minute you have answered ${playerAnswers} / ${totalAnsw} questions. And Google quessed ${computerAnswers} / ${totalAnsw}.`,
    );

    title.style = 'text-align: center;';
    subtitle.style = 'text-align: center;';

    title.appendChild(gameover);
    subtitle.appendChild(description);

    const list = this.createList(data);
    const input = this.createInput();

    list.setAttribute('id', 'gameoverList');

    btn.style =
      'display: block; background-color: #d10e30; border-radius: 4px; margin: 18px auto; text-align: center; font-size: 26px; font-weight: bold; color: #c2d0d3; padding: 10px 20px; width: 60%;';
    btn.appendChild(document.createTextNode('SUBMIT'));

    btn.addEventListener('click', () => {
      if (this.nick) {
        submitFn(this.nick);
        let playerData = {
          player: this.nick,
          answered: `${playerAnswers}/${totalAnsw}`
        };
        this.localStorage.save(playerData);
        document.querySelector('#game-over').style = 'display: none;';
      } else {
        alert('your nick is empty!');
      }
    });

    container.appendChild(title);
    container.appendChild(subtitle);
    container.appendChild(list);
    container.appendChild(input);
    container.appendChild(btn);

    container.style =
      'display: block; max-width: 800px; z-index: 1000; background-color: white; border-radius: 10px; padding: 10px; margin: auto';

    return container;
  }
}

export default GameOver;
