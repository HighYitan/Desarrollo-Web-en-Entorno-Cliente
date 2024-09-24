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