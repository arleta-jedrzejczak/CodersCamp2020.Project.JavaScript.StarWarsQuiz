// Creating localStorage class

import { parse } from '@babel/core';

class localStorage {
  constructor() {
    this.Storage = window.localStorage;
    this.tab = [];
    this.highScoreTab = [];
  }

  save(obj) {
    if (Object.keys(obj).length !== 0) {
      if (typeof obj.player === 'string') {
        if (typeof obj.answered === 'string') {
          if (this.Storage.getItem('Score') === null) {
            this.tab.push(obj);
            this.Storage.setItem('Score', JSON.stringify(this.tab));
            return this.tab;
          } else {
            let storageTab = this.Storage.getItem('Score');
            this.tab = JSON.parse(storageTab);
            this.tab.push(obj);
            this.Storage.removeItem('Score');
            this.Storage.setItem('Score', JSON.stringify(this.tab));
            return this.tab;
          }
        } else {
          throw new Error('Answered is not a string');
        }
      } else {
        throw new Error('Player is not a string');
      }
    } else {
      throw new Error('Object is empty!');
    }
  }

  getScore() {
    if (this.Storage.getItem('Score') !== null) {
      let storageTab = this.Storage.getItem('Score');
      this.tab = JSON.parse(storageTab);
      let len = this.tab.length;
      this.tab.sort((a, b) => {
        let slash1 = a.answered.indexOf('/');
        let slash2 = b.answered.indexOf('/');
        let aSliced = a.answered.slice(0, slash1);
        let bSliced = b.answered.slice(0, slash2);
        return bSliced - aSliced;
      });
      if (len > 3) {
        for (let i = 0; i < 3; i++) {
          this.highScoreTab[i] = this.tab[i];
        }
      } else if (len <= 3) {
        for (let i = 0; i < len; i++) {
          this.highScoreTab[i] = this.tab[i];
        }
      }
      return this.highScoreTab;
    } else {
      throw new Error('No scores was saved!');
    }
  }
}

export default localStorage;
