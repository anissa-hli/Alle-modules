//Start met een lege array. Schrijf code om deze array op te vullen met namen. Blijf dit herhalen tot je de waarde 'S' meegeeft om te stoppen. Druk vervolgens je namenlijst af.
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let lijstStudenten=[];

while(true){
    let inputGebruiker=await userInput.question('Geef een naam in: ')
    if(inputGebruiker=='S'){
        break;
    }
    lijstStudenten.push(inputGebruiker);
}

console.log(`Dit is de studentenlijst: ${lijstStudenten}.`);

process.exit();
