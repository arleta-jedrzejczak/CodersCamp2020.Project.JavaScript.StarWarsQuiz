class Rules{
   constructor(mode){
      this.renderPeopleHeader(mode)
      this.renderDescription(mode)
   }

   renderPeopleHeader(mode){
      const header=document.createElement('h1')
      let text=''

      switch (mode){
         case 'characters-intro':
           text='Mode: Who is the character?'
            break
         case 'vehicles-intro':
            text='Mode: What is this vehicle?'
            break
         case 'starships-intro':
            text='Mode: What is this starship?'
            break
         case 'characters-question':
           text='Question: Who is the character?'
            break
         case 'vehicles-question':
            text='Question: What is this vehicle?'
            break
         case 'starships-question':
            text='Question: What is this starship?'
            break
         default:
            text='Guess what!'
            break
         }

      const content=document.createTextNode(text)
      
      header.appendChild(content)
      header.style='text-align: center;'
      document.querySelector('#currentGameMode').appendChild(header)
   }

   renderDescription(mode){
      if(mode.includes('intro')){
         const descriptionTitleContainer=document.createElement('div')
         const descriptionTitle=document.createElement('h3')
         const descriptionTitleImg=document.createElement('img')
         const description=document.createElement('p')

         const titleContent=document.createTextNode('Current mode rules')

         const descriptionContent=document.createTextNode(`You have one minute (1m) to answer as many questions as possible. During the game on each question you need to select what ${mode=='characters-intro' ? 'character' : mode=='vehicles-intro' ? 'vehicle' : mode=='starships-intro' ? 'starship' : 'thing'} from Star Wars is showed on the left image from available options.`)
         
         descriptionTitle.appendChild(titleContent)
         description.appendChild(descriptionContent)

         descriptionTitleContainer.appendChild(descriptionTitleImg)
         descriptionTitleContainer.appendChild(descriptionTitle)
         
         descriptionTitle.style='text-align: center;'
         description.style='text-align: center;'
         descriptionTitleImg.setAttribute('src', 'https://images.vexels.com/media/users/3/143402/isolated/preview/afbbf15d5e82a1c4fb5a55c4eacf3003-graduation-cap-icon-by-vexels.png')
         descriptionTitleImg.style='width: 1.6em; height: 1.5em; margin-right: 1em;'
         descriptionTitleContainer.style='display: inline-flex; align-items: center; width: 100%; justify-content: center;'

         document.querySelector('#currentGameModeDescription').appendChild(descriptionTitleContainer)
         document.querySelector('#currentGameModeDescription').appendChild(description)
      }
   }
}

export default Rules