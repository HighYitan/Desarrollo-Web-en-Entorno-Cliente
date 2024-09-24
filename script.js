function calcularNotaExamen(bonus, penalizador, ...notas){
    let min = notas[0];
    let index = 0;
    let media = 0;
    for(var i = 0; i < 2; i++){
        for(var j = 0; j < notas.length; j++){
            if(notas[j] < min){
                index = j;
            }
        }
        notas.splice(index, 1);
        min = notas[0];
    }
    media = conversionNotaFinal(notas);
    media = media + bonus - penalizador;
    return media;
}
function conversionNotaFinal(notas){
    let media = 0;
    for(var i = 0; i < notas.length; i++){
        //notas[i] = notas[i]/8;
        media += notas[i];
    }
    media = media/8;
    return media;
}
console.log("La nota final es", calcularNotaExamen(0.25,1, 0,5,5,5,10,5,10,5,4,8));
//-------------------------------- Ex2
let treballadors = [{"nom":"Joan", "llinatges":"Ques Ferrer", "edat":45, "sou":15000},
                    {"nom":"Joana", "llinatges":"Ferrer Gomila", "edat":35, "sou":15000},
                    {"nom":"Pere", "llinatges":"Gomila Alarde", "edat":30, "sou":10000},
                    {"nom":"Marta", "llinatges":"Salas García", "edat":55, "sou":40000}];
function incrementSou(treballadors){
    for(var i = treballadors.length-1; i > 0; i--){
        treballadors[i].edat > 40 && treballadors[i].sou >= 15000 ? treballadors[i].sou = treballadors[i].sou + 2000 : treballadors.splice(i, 1);
    }
    return treballadors;
}
let incrementats = incrementSou(treballadors);
console.log("Els treballadors amb el sou augmentat són: ", incrementats);
//-------------------------------- Ex3
var roda = ["1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000"];
function wheelFortune(wheel){
    const resultats = [];
    var contador = 0;
    while(contador < wheel.length){
        const indexPremi = Math.floor.Math.random()*wheel.length;
        const premi = wheel[indexPremi];
        resultats.push[premi];
        wheel.splice(indexPremi, 1);
        if(premi = ""){

        }
    }
}
//-------------------------------- Ex4
var players = [
    {
      "nom": "John",
      "llinatjes": "Doe",
      "telefon": "+34 601234567",
      "email": "john.doe@concursant.com",
      "age": 30
    },
    {
      "nom": "Alice",
      "llinatjes": "Smith",
      "telefon": "+34 609876543",
      "email": "alice.smith@concursant.com",
      "age": 25
    },
    {
      "nom": "Bob",
      "llinatjes": "Johnson",
      "telefon": "+34 6060605",
      "email": "bob.johnson@concursant.com",
      "age": 40
    },
    {
      "nom": "Emily",
      "llinatjes": "Williams",
      "telefon": "+34 603333333",
      "email": "emily.williams@concursant.com",
      "age": 35
    },
    {
      "nom": "Michael",
      "llinatjes": "Brown",
      "telefon": "+34 607777777",
      "email": "michael.brown@concursant.com",
      "age": 22
    },
    {
      "nom": "Sophia",
      "llinatjes": "Jones",
      "telefon": "+34 608888888",
      "email": "sophia.jones@concursant.com",
      "age": 45
    },
    {
      "nom": "William",
      "llinatjes": "Garcia",
      "telefon": "+34 602222222",
      "email": "william.garcia@concursant.com",
      "age": 28
    },
    {
      "nom": "Olivia",
      "llinatjes": "Martinez",
      "telefon": "+34 609999999",
      "email": "olivia.martinez@concursant.com",
      "age": 50
    }
  ]
function generarPremis(){
	var premisGenerats = [2000,4000,5000,1000,3000,8000,7000,6000];
	return premisGenerats;
}
function assignarPremis(players, prizes){
    const resultats = [];

    if(prizes.length != players.length){
        console.error("The number of players is not the same as the number of prizes.");
        return resultats;
    }

    const prizeIterator = prizes.values();

    for(const player of players){
        const prize = prizeIterator.next().value;
        const {nom, llinatjes} = player;
        resultats.push(nom, llinatjes, prize);
    }
    return resultats;
}
console.log(assignarPremis(players, generarPremis()));

var contador = 0;
for(let player of players){
    resultats.push({
        "nom": player.nom,
        "llinatjes": player.llinatjes,
        "premi": prizes[contador]
    });
    contador++;
}
