//Schrijf een script dat de gebruiker om namen blijft vragen tot de gebruiker niets ingeeft. Zet al deze namen in een array.

import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let lijstNamen=[];
let inputGebruiker=await userInput.question('Geef een naam in: ')

while(inputGebruiker!=''){
    lijstNamen.push(inputGebruiker);
    inputGebruiker=await userInput.question('Geef een naam in: ');
}

console.log(`Dit zijn de namen die je hebt ingegeven: ${lijstNamen}`);

process.exit();
