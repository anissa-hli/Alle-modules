//Maak een array met 10 gehele getallen. Schrijf code om deze getallen te sorteren van groot naar klein.


let lijst = [0,3,1,2]
let isGesorteerd=false //insteek ChatGPT; zorgt ervoor dat de lijst niet weer wordt afgedrukt indien al gesorteerd is. 
for(let j=0;j<lijst.length && isGesorteerd==false;j++){
    isGesorteerd=true;
    for(let i=1;i<lijst.length-j;i++){
    if(lijst[i-1]<lijst[i]){
        let nieuwe=lijst[i-1];
        lijst[i-1]=lijst[i];
        lijst[i]=nieuwe;
        isGesorteerd=false;
        }
        console.log(lijst)
    }
    

}



