//this is the old implementation and this file will be deleted!
// some dummy date
// get to know: what will look like our player data
let players = [
  {
    place: '1st',
    player: 'Ania',
    answered: '15/20',
  },
  {
    place: '2nd',
    player: 'Mateusz',
    answered: '14/30',
  },
  {
    place: '3rd',
    player: 'Leia Organa',
    answered: '1/23',
  },
];

// grab the divs from HTML
const rankingHeader = document.getElementById('ranking-header');
const tableDiv = document.getElementById('table');

// create a heading
let tableHeaderText = document.createTextNode('Mode Ranking');
rankingHeader.appendChild(tableHeaderText);
rankingHeader.classList.add('ranking-header');

// create a table
let table = document.createElement('table');
table.classList.add('ranking-table');
// append a table to tableDiv
tableDiv.appendChild(table);

//creating table head
function generateTableHead(table, headings) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of headings) {
    let th = document.createElement('th');
    let text = document.createTextNode(key.toUpperCase());
    th.appendChild(text);
    row.appendChild(th);
  }
}

// generating headings
let headings = Object.keys(players[0]);

function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

generateTable(table, players);
generateTableHead(table, headings);
