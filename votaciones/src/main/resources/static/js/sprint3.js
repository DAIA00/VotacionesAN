

var vectorCandidatos = new Array(6);

vectorCandidatos[0] = 0;
vectorCandidatos[1] = 0;
vectorCandidatos[2] = 0;
vectorCandidatos[3] = 0;
vectorCandidatos[4] = 0;
vectorCandidatos[5] = 0;




function votar(numCandidatos) {

    vectorCandidatos[numCandidatos] = vectorCandidatos[numCandidatos] + 1;
    alert("Gracias por su voto");


}

function estadistica() {

    // alert("Candidato 1: " + vectorCandidatos[0] + "\nCandidato 2: " + vectorCandidatos[1] + "\nCandidato 3: " + vectorCandidatos[2] + "\nCandidato 4: " + vectorCandidatos[3] + "\nCandidato 5: " + vectorCandidatos[4] + "\nCandidato 6: " + vectorCandidatos[5]);

    //console.log("entra en estadistica!!!!")

    let totVotos = vectorCandidatos[0] + vectorCandidatos[1] + vectorCandidatos[2] + vectorCandidatos[3] + vectorCandidatos[4] + vectorCandidatos[5];
    let porCan1 = (vectorCandidatos[0] / totVotos) * 100;
    let porCan2 = (vectorCandidatos[1] / totVotos) * 100;
    let porCan3 = (vectorCandidatos[2] / totVotos) * 100;
    let porCan4 = (vectorCandidatos[3] / totVotos) * 100;
    let porCan5 = (vectorCandidatos[4] / totVotos) * 100;
    let porCan6 = (vectorCandidatos[5] / totVotos) * 100;



    let nodoParrafo = document.createElement('p');
    let nodoParrafo1 = document.createElement('p');
    let nodoParrafo2 = document.createElement('p');
    let nodoParrafo3 = document.createElement('p');
    let nodoParrafo4 = document.createElement('p');
    let nodoParrafo5 = document.createElement('p');
    let nodoParrafo6 = document.createElement('p');

    let textoNodo = document.createTextNode("votos Detroit Metal City: " + vectorCandidatos[0] + " Votos -  Porcentaje: " + porCan1.toFixed(2) + "%");
    let textoNodo1 = document.createTextNode("votos Dragon Ball Super: " + vectorCandidatos[1] + " Votos -  Porcentaje: " + porCan2.toFixed(2) + "%");
    let textoNodo2 = document.createTextNode("votos One Piece: " + vectorCandidatos[2] + " Votos -  Porcentaje: " + porCan3.toFixed(2) + "%");
    let textoNodo3 = document.createTextNode("votos Pokemon: " + vectorCandidatos[3] + " Votos -  Porcentaje: " + porCan4.toFixed(2) + "%");
    let textoNodo4 = document.createTextNode("votos Beastars: " + vectorCandidatos[4] + " Votos -  Porcentaje: " + porCan5.toFixed(2) + "%");
    let textoNodo5 = document.createTextNode("votos Sakura: " + vectorCandidatos[5] + " Votos -  Porcentaje: " + porCan6.toFixed(2) + "%");
    let textoNodo6 = document.createTextNode("Total Votos: " + totVotos);

    nodoParrafo.appendChild(textoNodo);
    nodoParrafo1.appendChild(textoNodo1);
    nodoParrafo2.appendChild(textoNodo2);
    nodoParrafo3.appendChild(textoNodo3);
    nodoParrafo4.appendChild(textoNodo4);
    nodoParrafo5.appendChild(textoNodo5);
    nodoParrafo6.appendChild(textoNodo6);


    let elementDiv = document.getElementById("conEst");
    //console.log(elementDiv);
    elementDiv.appendChild(nodoParrafo);
    elementDiv.appendChild(nodoParrafo1);
    elementDiv.appendChild(nodoParrafo2);
    elementDiv.appendChild(nodoParrafo3);
    elementDiv.appendChild(nodoParrafo4);
    elementDiv.appendChild(nodoParrafo5);
    elementDiv.appendChild(nodoParrafo6);


    // Obtener una referencia al elemento canvas del DOM
    const $grafica = document.querySelector("#grafica");
    // Las etiquetas son las que van en el eje X. 
    const etiquetas = ["Candidato1", "Candidato2", "Candidato3", "Candidato4","Candidato5","Candidato6"]
    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const datosVotos = {
        label: "Vostos por Candidato",
        data: [vectorCandidatos[0], vectorCandidatos[1],vectorCandidatos[2] , vectorCandidatos[3],vectorCandidatos[4],vectorCandidatos[5]], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 3,// Ancho del borde
    };
    new Chart($grafica, {
        type: 'line',// Tipo de gráfica
        data: {
            labels: etiquetas,
            datasets: [
                datosVotos,
                // Aquí más datos...
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });

}


