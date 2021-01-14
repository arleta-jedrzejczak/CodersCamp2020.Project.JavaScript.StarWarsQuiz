class GameOver{
   constructor(data){
      this.createContainer(data)
   }

   createList(data){
      const container=document.createElement('div')
      const yoda=document.createElement('img')
      const header=document.createElement('h3')
      const headerText=document.createTextNode('Detailed Answers')

      header.appendChild(headerText)

      yoda.setAttribute('src', 'static/assets/img/modes/gameover/MasterYoda.png')
      yoda.style='margin: 0 70px -10px 0;'

      container.style='display: flex;';

      const answersList=data.answers.map(answ=>{
         const cont=document.createElement('div')
         const player=document.createElement('p')
         //const computer=document.createElement('p')
         const correct=document.createElement('p')

         player.appendChild(document.createTextNode(answ.player_answer))
         // computer.appendChild(document.createTextNode(answ.computer_answer))
         correct.appendChild(document.createTextNode(answ.player_answer))

         player===correct ? player.style='color: red;' : player.style='color: green;'
         // computer==correct ? computer.style('color: red;') : player.style('color: green;')

         cont.appendChild(player)
         // cont.appendChild(computer)
         cont.appendChild(correct)

         return cont
      })

      console.log(...answersList);

      container.appendChild(yoda)
      container.appendChild(header)

      answersList.forEach(element => {
         container.appendChild(element)
      });
      

      return container
   }

   createInput(){
      const container=document.createElement('div')
      const input=document.createElement('input')
      input.setAttribute('type', 'text')
      const label=document.createElement('label')

      const labelText=document.createTextNode('Please fill your name in order to receive eternal glory in the whole galaxy!')
      label.appendChild(labelText)

      input.style='margin: 0 30px 0 20px; height: 40px; width: 260px; font-size: 1.6em;'
      label.style='font-size: 19px; text-align: center;'
      container.style='display: flex;';

      container.appendChild(input)
      container.appendChild(label)

      return container
   }

   createContainer(data){
      const totalAnsw=data.player_total_answers;
      const correctAnsw=data.player_total_points;

      const container=document.createElement('div')
      const title=document.createElement('h1')
      const subtitle=document.createElement('h3')

      const gameover=document.createTextNode(`GAME OVER`)
      const description=document.createTextNode(`The force is strong in you young Padawan! During 1 minute you have answered ${correctAnsw} / ${totalAnsw} questions. And Google quessed 5 / 23.`)

      title.style='text-align: center;'
      subtitle.style='text-align: center;'

      title.appendChild(gameover)
      subtitle.appendChild(description)

      const list=this.createList(data)
      const input=this.createInput()

      container.style='max-width: 800px; margin: 0 auto; border-radius: 5px;'

      container.appendChild(title)
      container.appendChild(subtitle)
      container.appendChild(list)
      container.appendChild(input)

      document.querySelector('#game-over').appendChild(container)
   }
}

export default GameOver