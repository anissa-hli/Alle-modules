//schrijf een functie om in een namenlijst te zoeken op welke plaats een bepaalde naam voorkomt. Wat je teruggeeft is ofwel de index van de naam binnen de array ofwel -1 als je de naam niet kan vinden. als je bijvoorbeeld een lijst hebt met de volgende namen let namen = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"] en je zoekt op Mehdi dan krijg je als resultaat 4.

let namenLijst=["Selma", "Sofie", "Saida", "Sarah", "Nora", "Latifa", "Amal"];

function search(naam){
    for(let i=0;i<namenLijst.length;i++){
        if(naam==namenLijst[i]){
        console.log(i);
        process.exit();
        }
    }

    console.log(-1) //de functie komt hier alleen terecht als de naam niet in de lijst voorkomt

}

search('Dalila');