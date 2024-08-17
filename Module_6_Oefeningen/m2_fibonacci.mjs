//Schrijf code om een reeks van Fibonacci op te bouwen, je houd de reeks bij in een array. start met een array dat de waarden 0 en 1 bevat, je vult de array op tot deze 10 getallen bevat. Binnen deze reeks zal elk volgend getal de som zijn van de vorige twee getallen. Het resultaat dat je moet bekomen is dus [0, 1, 1, 2, 3, 5, 8, 13, 21, 34].

let fibonacciLijst=[0,1]

for(let i=0;fibonacciLijst.length<10;i++){
    fibonacciLijst.push(fibonacciLijst[i]+fibonacciLijst[i+1]);
}

console.log(fibonacciLijst)