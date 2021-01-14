class GameOver{
   constructor(){
      this.createContainer()
   }

   createList(){
      const container=document.createElement('div')
      const yoda=document.createElement('img')

      yoda.setAttribute('src', 'static/assets/img/modes/gameover/MasterYoda.png')
      yoda.style='margin-bottom: -10px;'

      container.appendChild(yoda)

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
      label.style='font-size: 21px; text-align: center;'
      container.style='display: flex;';

      container.appendChild(input)
      container.appendChild(label)

      return container
   }

   createContainer(){
      const container=document.createElement('div')
      const title=document.createElement('h1')
      const subtitle=document.createElement('h3')

      const gameover=document.createTextNode(`GAME OVER`)
      const description=document.createTextNode(`The force is strong in you young Padawan! During 1 minute you have answered 10 / 23 questions. And Google quessed 5 / 23.`)

      title.style='text-align: center;'
      subtitle.style='text-align: center;'

      title.appendChild(gameover)
      subtitle.appendChild(description)

      const list=this.createList()
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