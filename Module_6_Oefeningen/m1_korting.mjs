//Maak een array waar je enkele prijzen in gaat bijhouden. Schrijf vervolgens een functie om 15 procent korting te geven. Deze functie krijgt een prijs binnen en geeft als resultaat de nieuwe prijs met korting terug. Loop vervolgens over al je prijzen en pas de geefKorting functie toe op elke prijs.

let lijstPrijzen=[10.99,9.99,15.99,19.99]

function geefKorting(prijs){
    let nieuwePrijs=prijs*0.85;
    return nieuwePrijs;
}

for(let i=0;i<lijstPrijzen.length;i++){
    console.log(`${lijstPrijzen[i]} wordt ${geefKorting(lijstPrijzen[i])}`);
}