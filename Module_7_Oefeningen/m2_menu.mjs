// M2: Menu
// Maak een object genaamd restaurant met eigenschappen naam (string), keuken (string), en menu (array van objecten). Voeg een methode toevoegenAanMenu toe waarmee je een nieuw gerecht aan het menu kunt toevoegen. Elk gerecht heeft een naam en een prijs.

let restaurant={
    naam:"AnySaveur",
    keuken:'Internationaal',
    menu:[{naam:'banaan',prijs:100},{naam:"appel",prijs:120}],
    toevoegenAanMenu:function(naam,prijs){
        this.menu.push({naam,prijs})
    }
}


restaurant.toevoegenAanMenu("CACAo",20000);
