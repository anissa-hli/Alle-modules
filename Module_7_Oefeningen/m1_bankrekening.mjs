// Bouw een object genaamd bankrekening met eigenschappen rekeningnummer (string), saldo (getal), en eigenaar (string). Voeg een methode toonSaldo toe om het huidige saldo weer te geven. Voeg een methode overschrijving toe waarmee je geld aan een andere bankrekening kan storten. Dit zou als volgt kunnen gebruikt worden:

let bankrekening={
    rekeningnummer:"123456789",
    saldo:100,
    eigenaar:"Anissa Sahli",
    toonsaldo: function(){
        console.log(`Er staat momenteel €${this.saldo} op de rekening met nummer ${this.rekeningnummer}`)        
    },
    overschrijving:function(rekening,saldo){
        rekening.saldo+=saldo;
        this.saldo-=saldo
    }
}

let bankrekening2={
    rekeningnummer:"123456780",
    saldo:20,
    eigenaar:"Latifa Gharbi",

}

bankrekening2.toonsaldo=bankrekening.toonsaldo;

bankrekening.overschrijving(bankrekening2,30);
bankrekening2.toonsaldo();
bankrekening.toonsaldo();