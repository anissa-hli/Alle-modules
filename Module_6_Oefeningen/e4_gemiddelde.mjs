//Maak een array waar je een lijst van punten in gaat bijhouden. Schrijf vervolgens code om de gemiddelde score te berekenen.

let lijstVanPuntenOp10=[9,1,10,4,6,5,5,8];
let gemiddelde=0;

for(let i=0;i<lijstVanPuntenOp10.length;i++){
    gemiddelde+=lijstVanPuntenOp10[i]/(lijstVanPuntenOp10.length);
}

console.log(`Het gemiddelde van de punten is ${gemiddelde} op 10.`)