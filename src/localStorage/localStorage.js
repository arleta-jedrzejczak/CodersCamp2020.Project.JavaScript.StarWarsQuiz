// Creating localStorage class

class localStorage {

    constructor(){
        const tab = [];
        const highScoreTab = [];
    }

    save(obj){
        if(Object.keys(empty).length === 0 && empty.constructor === Object){
            if(typeof obj.player === "string"){
                if(typeof obj.answered === "number"){
                    return tab.push(obj);
                }else{
                    throw new Error('Answered is not a number');
                }
            }else{
                throw new Error('Player is not a string');
            }
        }
    }

    getScore(){
        if(this.tab.length !== 0){
            let len = this.tab.length;
            let flag;
            do{
                flag = false;
                for(let i = 0; i < len; i++){
                    if(this.tab[i].obj.answered > this.tab[i + 1].obj.answered){
                        let tmp = this.tab[i];
                        this.tab[i] = this.tab[i + 1];
                        this.tab[i + 1] = tmp;
                        flag = true;
                    }
                }
            } while(flag);
            for(let i = 0; i < 3; i++){
                this.highScoreTab[i] = this.tab[i];
            }
            return this.highScoreTab;
        }else{
            throw new Error('No scores was saved!');
        }
    }

}


export default localStorage;