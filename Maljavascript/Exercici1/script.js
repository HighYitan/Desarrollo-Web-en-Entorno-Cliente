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
const roda = ["1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000"];
function wheelFortune(wheel){
    const resultats = [];
    var contador = 0;
    while(contador < wheel.length){
        const indexPremi = Math.floor(Math.random()*wheel.length);
        var premi = wheel[indexPremi];
        //resultats.push[premi];
        //wheel.splice(indexPremi, 1);
        if(premi != ""){
          resultats.push(premi);
          premi= "";
          contador++;
        }
    }
    return resultats;
}
console.log(wheelFortune(roda));
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
        resultats.push({nom, llinatjes, prize});
    }
    return resultats;
}
console.log(assignarPremis(players, generarPremis()));

/*var contador = 0;
for(let player of players){
    resultats.push({
        "nom": player.nom,
        "llinatjes": player.llinatjes,
        "premi": prizes[contador]
    });
    contador++;
}
*/
//-------------------------------- Ex5
const usuaris = [{ "nom":"Joana", "llinatges":"Que Ferrer", "sexe":"D", "categoria":"Platinum", "hotel":"GH Emili Darder",
                  "entrada":"07/02/2023", "sortida":"09/03/2023", "encarregat":"Marino Darder"},
                  { "nom":"Marina", "llinatges":"Gabri Ques", "sexe":"D", "categoria":"Silver", "hotel":"GH Palma",
                  "entrada":"07/03/2023", "sortida":"09/03/2023", "encarregat":"Pere Darder"},
                  { "nom":"Josep", "llinatges":"Castell Miranda", "sexe":"H", "categoria":"", "hotel":"Hotel Wonder",
                  "entrada":"17/02/2023", "sortida":"19/02/2023", "encarregat":"Marina Darder"}];
function presentacio(usuaris){
  usuaris.forEach(usuari=>{

  });
  for(const usuari of usuaris){
    const inici = usuari.sexe == "H" ? "Benvolgut" : "Benvolguda"
    if(usuari.sexe == "H"){
      var category = usuari.categoria ? `Com usuari ${usuari.categoria} es` : "Es";
    }
    else{
      var category = usuari.categoria ? `Com usuària ${usuari.categoria} es` : "Es";
    }

  const text = `
  ${inici} ${usuari.nom},
  ${category} un plaer donar-te la benvinguda al ${usuari.hotel} en la teva estança del ${usuari.entrada} al ${usuari.sortida}
  Tant jo com la resta del equip estam a la teva disposició pel qualsevol cosa que necessitis.
  Atentament,
  ${usuari.encarregat}`
  console.log(text);
  }
  usuaris.forEach(usuari => {
    if(usuari.categoria != ""){
      if(usuari.sexe == "H"){
        console.log(`Estimat ${usuari.nom},
                    Com usuari ${usuari.categoria} es un plaer donar-te la benvinguda al GH Emili Darder en la teva estança del 07/02/2024 al 09/02/2024.
                    
                    Tant jo com la resta del equip estam a la teva disposició pel qualsevol cosa que necessitis.
                    Atentament,
                    Marino Darder`);
      }
      else if(usuari.sexe == "D"){
        console.log(`Estimada ${usuari.nom},
                    Com usuària ${usuari.categoria} es un plaer donar-te la benvinguda al GH Emili Darder en la teva estança del 07/02/2024 al 09/02/2024.
                    
                    Tant jo com la resta del equip estam a la teva disposició pel qualsevol cosa que necessitis.
                    Atentament,
                    Marino Darder`);
      }
    }
    else{
      if(usuari.sexe == "H"){
        console.log(`Estimat ${usuari.nom},
                    Es un plaer donar-te la benvinguda al GH Emili Darder en la teva estança del 07/02/2024 al 09/02/2024.
                    
                    Tant jo com la resta del equip estam a la teva disposició pel qualsevol cosa que necessitis.
                    Atentament,
                    Marino Darder`);
      }
      else if(usuari.sexe == "D"){
        console.log(`Estimada ${usuari.nom},
                    Es un plaer donar-te la benvinguda al GH Emili Darder en la teva estança del 07/02/2024 al 09/02/2024.
                    
                    Tant jo com la resta del equip estam a la teva disposició pel qualsevol cosa que necessitis.
                    Atentament,
                    Marino Darder`);
      }
    }
  })
}
presentacio(usuaris);
//-------------------------------- Ex6
var saludo = "hola com estau";
function parsMajuscules(saludo){
  var nuevoSaludo = "";
  for(var i = 0; i < saludo.length; i++){
    if(i % 2 != 0){
      nuevoSaludo += saludo.substring(i, i+1).toUpperCase();
    }
    else{
      nuevoSaludo += saludo.substring(i, i+1);
    }
  }
  return nuevoSaludo;
}
console.log(parsMajuscules(saludo));

function alterCase(input){
  var resultat = "";

  var commutador = false;
  for(var i = 0; i < input.length; i++){
    if(commutador) resultat += input[i].toUpperCase();
    else resultat += input[i];
    commutador = !commutador;
  }
  for(var i = 0; i < input.length; i++){
    resultat += (i % 2 != 0) ? input[i].toUpperCase() : input[i];
    resultat += input[i];
    commutador = !commutador;
  }
  return resultat;
}
console.log(alterCase("hola com estau"));

//-------------------------------- Ex7
var palabra = "RECONOCER";
var palabra2 = "HOLA";
function esPalindromo(palabra){
  var normal = "";
  var reversa = "";
  var pal;
  for(var i = 0; i < palabra.length; i++){
    normal += palabra.substring(i, i+1);
  }
  for(var j = palabra.length; j > 0; j--){
    reversa += palabra.substring(j-1, j);
  }
  if(normal == reversa){
    palindromo = true;
  }
  else{
    palindromo = false;
  }
  return palindromo;
}
function notificarPalindromo(palabra, palindromo){
  if(palindromo == true){
    console.log("La palabra " + palabra + " es palíndroma");
  }
  else{
    console.log("La palabra " + palabra + " no es palíndroma.");
  }
}
notificarPalindromo(palabra, esPalindromo(palabra));
notificarPalindromo(palabra2, esPalindromo(palabra2));



/*function checkPalindrome(input){
  var splitString = input.split("");
  var reversedString = splitString.reverse();
  var jointString = reversedString.join("");

  return input == jointString;
}
console.log(checkPalindrome("ara"));*/
function checkPalindrome(input){
  return input.toLowerCase() == input.toLowerCase().split("").reverse().join("");
}
console.log(checkPalindrome("ara"));


//-------------------------------- Ex8
// Assignam els elements del contador i el botó
const colorBtn = document.getElementById('colorBtn');
const counter = document.getElementById('counter');

// Initializam el contador de clicks
let clickCount = 0;

// Funció per generar un color aleatori
function getRandomColor() {
  /********FALTA FER********/
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

function handleButtonClick() {
    // Canvia el color de fons
    document.body.style.backgroundColor = getRandomColor();
    
    // Incrementa el contador de clicks
    clickCount++;
    
    // Actualitza el text del contador de clicks
    counter.textContent = `Contador de clicks: ${clickCount}`;
}

// Afegir el event listener al botó
/********FALTA FER********/
colorBtn.addEventListener("click", handleButtonClick);