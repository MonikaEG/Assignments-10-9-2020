'use strict';

const play = function(n) {
    return Math.floor(Math.random() * n + 1); //n er antal af rul/plays med terningen.
}

 const isOnly = function(n, arr) {
    if (arr.includes(n))
        return true; 
    else 
        return false; 
}
//returnér antal af n.
 const howMany = function(n, arr) {
    return arr[n];
}
 
//Execution code herunder
let res = [0, 0, 0, 0, 0, 0, 0]

const n = Number(prompt('How many plays?'));
let i = 0;
while(i < n) {
    res[play(6)]++;
    i++;
}

const q = Number(prompt('What die are you looking for?'));

console.log(`Were all faces the same? ${isOnly(n, res)}`);
console.log(`There were ${howMany(q, res)} ${q}'s`);

document.write(`Were all faces the same? ${isOnly(n, res)}` + "<br>");
document.write(`There were ${howMany(q, res)} ${q}'s`);