// H2: Rekenmachine (again)
// Maak een object genaamd rekenmachine met methoden voor optellen, aftrekken, vermenigvuldigen en delen. Elk van deze methoden moet twee parameters accepteren en het resultaat teruggeven.

let rekenmachine={
    optellen: function(getal1,getal2){
        console.log(getal1+getal2);
    },
    aftrekken: function(getal1,getal2){
        console.log(getal1-getal2);
    },
    vermenigvuldigen: function(getal1,getal2){
        console.log(getal1*getal2);
    },
    delen: function(getal1,getal2){
        console.log(getal1/getal2);
    }
}

rekenmachine.vermenigvuldigen(2,4)