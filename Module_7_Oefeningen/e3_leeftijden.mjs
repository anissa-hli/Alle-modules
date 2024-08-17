// E3: Leeftijden
// Maak twee objecten, persoon1 en persoon2, elk met eigenschappen naam (string) en leeftijd (getal). Schrijf een functie genaamd vergelijkLeeftijd die de leeftijden van de twee personen vergelijkt en zegt wie ouder is.

function createPerson(naam,leeftijd){
    return{
        naam,
        leeftijd
    }
}

let persoon1=createPerson("Anissa",18);
let persoon2=createPerson("Latifa",55);

//OF ZONDER FUNCTIE
// let persoon1={
//     naam:'Anissa',
//     leeftijd:19,
// }

// let persoon2={
//     naam:'Latifa',
//     leeftijd:15,
// }

function vergelijkLeeftijd(){
    if(persoon1.leeftijd<persoon2.leeftijd){
        console.log(`${persoon2.naam} is ouder dan ${persoon1.naam}`)
    }else{
        console.log(`${persoon1.naam} is ouder dan ${persoon2.naam}`)
    }
}

vergelijkLeeftijd()