'use strict';


function rollDie() {
  return Math.floor(Math.random() * 6); 
}

var counts = [0, 0, 0, 0, 0, 0];

var results = [];

for (var i = 0; i < 6; i++) { //Loop her
  var result = rollDie();
  counts[result] = counts[result] + 1;
  results.push(result + 1); //Lægger +1 til resultatet
}

console.log(results);  //Viser resultatet af rullene i console
console.log(counts);