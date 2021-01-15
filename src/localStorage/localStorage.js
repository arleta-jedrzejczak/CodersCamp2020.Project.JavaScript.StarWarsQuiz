// Creating localStorage class

class localStorage {
    constructor(){
        this.tab = [];
        this.highScoreTab = [];
    }

    save(obj){
        if(Object.keys(obj).length !== 0){
            if(typeof obj.player === "string"){
                if(typeof obj.answered === "string"){
                   return this.tab.push(obj);
                }else{
                    throw new Error('Answered is not a string');
                }
            }else{
                throw new Error('Player is not a string');
            }
        }else{
           throw new Error('Object is empty!')
        }
    }

    getScore(){
        let len = this.tab.length;
        if(len !== 0){
           this.tab.sort((a, b) =>{
                let slash1 = a.answered.indexOf("/");
                let slash2 = b.answered.indexOf("/");
                let aSliced = a.answered.slice(0, slash1);
                let bSliced = b.answered.slice(0, slash2);
                return bSliced - aSliced;
           })
            if(len > 3){
                for(let i = 0; i < 3; i++){
                    this.highScoreTab[i] = this.tab[i];
                }
            }else if(len <= 3){
                for(let i = 0; i < len; i++){
                    this.highScoreTab[i] = this.tab[i];
                }
            }   
            return this.highScoreTab;
        }else{
            throw new Error('No scores was saved!');
        }
    }

}


export default localStorage;
