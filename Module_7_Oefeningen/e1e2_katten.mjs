// E1: Honden
// Maak enkele objecten met de naam hond1, hond2, ... met elk de eigenschappen naam (string), leeftijd (getal) en isSpeels (boolean). Zorg dat al deze honden in een array terecht komen

function stelvoor(){
    if(this.isSpeels==true){
    console.log(`Hallo, ik ben ${this.naam}. Ik ben ${this.leeftijd} jaar oud en ik ben speels.`)
    }else{
        console.log(`Hallo, ik ben ${this.naam}. Ik ben ${this.leeftijd} jaar oud en ik ben niet zo speels. Miaw`)
    }
}

let kat1 = {
    naam: "Luna",
    leeftijd: 4,
    isSpeels: true
}
let kat2 = {
    naam: "Cricri",
    leeftijd: 1,
    isSpeels: true
}

let kat3 = {
    naam: "Noisette",
    leeftijd: 10,
    isSpeels: false

}



// let alleKatten=[kat1,kat2,kat3]

kat1.stelvoor=stelvoor;
kat2.stelvoor=stelvoor;
kat3.stelvoor=stelvoor;

kat3.stelvoor();


