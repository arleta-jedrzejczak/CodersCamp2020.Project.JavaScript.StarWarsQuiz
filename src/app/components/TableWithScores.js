/*
let players = [
  { player: 'Ania', answered: '15/20' },
  { player: 'Mateusz', answered: '14/30' },
  { player: 'Leia Organa', answered: '1/23' },
];
*/

export default class TableWithScores {
  constructor(elementId) {
    this.tableDiv = document.getElementById(elementId);
  }
  static headings = ['Place', 'Player', 'Answered'];
  static rankingHeadings = ['1st', '2nd', '3rd'];

  // generating blank table
  generateBlankTable() {
    let table = document.createElement('table');
    table.classList.add('ranking-table');
    this.tableDiv.appendChild(table);
    return table;
  }

  // generating table caption
  generateTableCaption(table) {
    let caption = document.createElement('caption');
    let captionText = document.createTextNode('Mode Ranking');
    caption.appendChild(captionText);
    table.appendChild(caption);
    console.log(this.headings);
    return table;
  }

  //generting table headings
  generateTableHead(table, headingsData) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let i = 0; i < headingsData.length; i++) {
      let th = document.createElement('th');
      let text = document.createTextNode(headingsData[i]);
      console.log(text);
      th.appendChild(text);
      row.appendChild(th);
    }
    return table;
  }

  // generating table with content from players ranking
  generateTable(table, playersData, rankingHeadings) {
    playersData.forEach((player, index) => {
      let row = table.insertRow();
      let firstCell = row.insertCell();
      let firstCellText = document.createTextNode(rankingHeadings[index]);
      firstCell.appendChild(firstCellText);
      let secondCell = row.insertCell();
      let secondCellText = document.createTextNode(player.player);
      secondCell.appendChild(secondCellText);
      let thirdCell = row.insertCell();
      let thirdCellText = document.createTextNode(player.answered);
      thirdCell.appendChild(thirdCellText);
    });
  }

  renderTable(players) {
    const blankTable = this.generateBlankTable();
    const tableWithCaption = this.generateTableCaption(blankTable);
    const tableWithHeadings = this.generateTableHead(tableWithCaption, TableWithScores.headings);
    //const tableWithResults = generateTable(tableWithHeadings, players, TableWithScores.rankingHeadings);
    this.generateTable(tableWithHeadings, players, TableWithScores.rankingHeadings);
  }
}
