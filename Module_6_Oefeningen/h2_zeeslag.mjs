//lijst.push('x') to put x in lijst
//lijst.pop() to erase/move last var of lijst

// import * as readline from 'node:readline/promises';
// import{stdin as input, stdout as output} from 'node:process';
// const userInput = readline.createInterface({input, output});

// We gaan starten met een basis om zeeslag te kunnen spelen. Maak gebruik van een multidimensional array die je speelveld voorstelt. Deze array stelt 10 rijen en kolommen voor voor je speelveld. Schrijf een functie waar je twee cooordinaten aan meegeeft. x stelt voor waar je in de breedte op schiet, y stelt voor waar je in de hoogte op schiet. Op die plaats zet je in de array een *.

let speelveld =
    [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]
    ]

function schiet(x, y) {
    speelveld[y][x] = "*";
    console.log(speelveld)
}


function boot(lengte, richting, x, y) {
  
    if (x+lengte <= speelveld.length && richting == "right" ) {
            for (let i = 0; i < lengte; i++) {
                speelveld[y][x + i] = "B";
            }

    } else if(x+1-lengte>=0 && richting == "left"){
            for (let i = lengte; i >0; i--) {
                speelveld[y][x+1-i] = "B";
            }        

    }else if (y + lengte <= speelveld.length && richting == "down" ) {
            for (let i = 0; i < lengte; i++) {
                speelveld[y + i][x] = "B";
            }

     }else if (y+1-lengte>=0 && richting == "up" ){    
            for (let i = lengte; i >0; i--) {
                speelveld[y +1 - i][x] = "B";
            }
        
    }else{
        console.log('De boot is te groot voor het slagveld, sorry.');
        process.exit();
    }

    console.log(speelveld)

}


boot(2, "left", 3, 1)



















//     function battle(x, y) {
//         for (let i = 0; i < speelveld.length; i++) {
//             let nieuwSlagveld = [];
//             for (let j = 0; j < speelveld.length; j++) {
//                 if (j == x) {
//                     nieuwSlagveld.push("*");
//                 } else {
//                     nieuwSlagveld.push(0);
//                 }
//             }
//             speelveld[y] = nieuwSlagveld
//         }
//         console.log(speelveld)
//     }
// battle(1,2)



