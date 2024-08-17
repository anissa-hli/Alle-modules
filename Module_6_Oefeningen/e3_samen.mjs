import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let lijstStudenten=[];
let inputGebruiker=await userInput.question('Geef een naam in: ')

while(inputGebruiker!='S'){
    lijstStudenten.push(inputGebruiker);
    inputGebruiker=await userInput.question('Geef een naam in: ');
}

for(let i=0;i<lijstStudenten.length;i++){
    console.log(`Beste ${lijstStudenten[i]},\nJe bent uitgenodigd om deel te nemen aan de leukste cursus van EhB: Network Essentials. Welkom!\nMet vriendelijke groeten,\nAnissa\n `);
}

process.exit();


