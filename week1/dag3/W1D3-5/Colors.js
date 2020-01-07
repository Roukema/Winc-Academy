const colors = ["Yellow", "blue", "red", "orange"];
let i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

for (i = 0; i <= colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(element => console.log(element));
/*
1. Hoeveel regels neemt mijn for loop in beslag?  2
2. Hoeveel regels neemt mijn `forEach` method in beslag? 1
3. Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom? 
    JE HOEFT GEEN VAR TE MAKEN VOOR JE ELEMENT
4. Stel je hebt een `object` met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je die 45 properties kunt `console.log`-en zonder elke property handmatig te `console.log` en. Probeer dit nu eens in een stukje code (en gebruik hier een object met 5 properties voor). Ben je nu aan het *itereren*?
OOK WEER FOR EACH GEBRUIKEN? 