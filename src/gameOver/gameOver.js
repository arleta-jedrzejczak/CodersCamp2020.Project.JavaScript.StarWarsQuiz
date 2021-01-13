class GameOver{
   constructor(){
      this.createContainer()
      console.log('working');
   }

   createList(){
      
   }

   createInput(){
      const input=document.createElement('input')
      input.setAttribute('type', 'text')
      const label=document.createElement('label')

      return input
   }

   createContainer(){
      const gameover=document.createElement('h1')
      const description=document.createElement('h3')

      const gameoverText=document.createTextNode(`GAME OVER`)
      const descriptionText=document.createTextNode(`The force is strong in you young Padawan! During 1 minute you have answered 10 / 23 questions. And Google quessed 5 / 23.`)

      gameover.appendChild(gameoverText)
      description.appendChild(descriptionText)

      const list=this.createList()
      const input=this.createInput()

      document.querySelector('#game-over').appendChild(gameover)
      document.querySelector('#game-over').appendChild(description)
      document.querySelector('#game-over').appendChild(input)
   }
}

export default GameOver