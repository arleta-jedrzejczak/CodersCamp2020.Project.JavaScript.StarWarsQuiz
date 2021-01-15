class GameOver{
   constructor(data){
      this.createContainer(data);
   }

   createList(data){
      const container=document.createElement('div')
      const yoda=document.createElement('img')
      const header=document.createElement('h3')
      const summary=document.createElement('div')
      const list=document.createElement('div')

      header.appendChild(document.createTextNode('Detailed Answers'));

      yoda.setAttribute('src', 'static/assets/img/modes/gameover/MasterYoda.png');
      yoda.style='margin: 0 70px -10px 0;';

      const subheader=document.createElement('div');

      const subheader1=document.createElement('h5');
      subheader1.appendChild(document.createTextNode(''));
      const subheader2=document.createElement('h5');
      subheader2.appendChild(document.createTextNode('You'));
      const subheader3=document.createElement('h5');
      subheader3.appendChild(document.createTextNode('Computer'));
      const subheader4=document.createElement('h5');
      subheader4.appendChild(document.createTextNode('Answer'));

      subheader1.style='color: #666';
      subheader2.style='color: #666';
      subheader3.style='color: #666';
      subheader4.style='color: #666';

      subheader.appendChild(subheader1)
      subheader.appendChild(subheader2)
      subheader.appendChild(subheader3)
      subheader.appendChild(subheader4)

      data.answers.forEach(answ=>{
         const player=document.createElement('p')
         const computer=document.createElement('p')
         const correct=document.createElement('p')
         const img=document.createElement('img')

         player.appendChild(document.createTextNode(answ.player_answer))
         computer.appendChild(document.createTextNode(answ.computer_answer))
         correct.appendChild(document.createTextNode(answ.correct_answer))
         img.setAttribute('src', answ.img)

         answ.player_answer===answ.correct_answer ? player.style='color: green; font-weight: 700;' : player.style='color: red; font-weight: 700;';
         answ.computer_answer===answ.correct_answer ? computer.style='color: green; font-weight: 700;' : computer.style='color: red; font-weight: 700;'

         img.style='height: 50px; width: auto; border-radius: 10px;';

         list.appendChild(img)
         list.appendChild(player)
         list.appendChild(computer)
         list.appendChild(correct)
      })

      summary.appendChild(header)
      summary.appendChild(subheader)
      summary.appendChild(list)

      container.appendChild(yoda)
      container.appendChild(summary)

      subheader.style='display: grid; grid-template-columns: 60px 120px 120px 120px; grid-column-gap: 20px; grid-row-gap: 10px; margin-bottom: 20px;';
      list.style='height: 260px; overflow-y: scroll; overflow-x: hidden; display: grid; grid-template-columns: 60px 120px 120px 120px; grid-column-gap: 20px; grid-row-gap: 10px; margin-bottom: 20px;';
      summary.style='width: 100%;';
      container.style='display: flex;';

      return container
   }

   createInput(){
      const container=document.createElement('div')
      const input=document.createElement('input')
      input.setAttribute('type', 'text')
      const label=document.createElement('label')

      const labelText=document.createTextNode('Please fill your name in order to receive eternal glory in the whole galaxy!');
      label.appendChild(labelText);

      input.style='margin: 0 30px 0 20px; height: 40px; width: 260px; font-size: 1.6em;';
      label.style='font-size: 19px; text-align: center;';
      container.style='display: flex;';

      container.appendChild(input)
      container.appendChild(label)

      return container
   }

   createContainer(data){
      const totalAnsw=data.player_total_answers;
      const playerAnswers=data.player_total_points;
      const computerAnswers=data.computer_total_points;

      const container=document.createElement('div')
      const title=document.createElement('h1')
      const subtitle=document.createElement('h3')

      const gameover=document.createTextNode(`GAME OVER`);
      const description=document.createTextNode(`The force is strong in you young Padawan! During 1 minute you have answered ${playerAnswers} / ${totalAnsw} questions. And Google quessed ${computerAnswers} / ${totalAnsw}.`);

      title.style='text-align: center;';
      subtitle.style='text-align: center;';

      title.appendChild(gameover);
      subtitle.appendChild(description);

      const list=this.createList(data)
      const input=this.createInput()

      container.style='max-width: 800px; margin: 0 auto; border-radius: 5px;';

      container.appendChild(title)
      container.appendChild(subtitle)
      container.appendChild(list)
      container.appendChild(input)

      document.querySelector('#game-over').appendChild(container);
   }
}

export default GameOver