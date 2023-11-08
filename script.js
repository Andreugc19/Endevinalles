const questions = [
    {
        questio: "Quin pais te mes poblacio?",
        respostaCorrecta: "Xina",
        respostaIncorrecta: "India",
    },
    {
        questio: "El primer astronauta a trepitjar la Lluna va ser?",
        respostaCorrecta: "Neil Amstrong",
        respostaIncorrecta: "Louis Amstrong",
    },
    {
        questio: "Qui es el millor jugador?",
        respostaCorrecta: "Messi",
        respostaIncorrecta: "Ronaldo",
    },
    {
        questio: "Quin es el pais mes gran?",
        respostaCorrecta: "Russia",
        respostaIncorrecta: "EEUU",
    },
    {
        questio: "Quin pais es d'America?",
        respostaCorrecta: "Argentina",
        respostaIncorrecta: "Marroc",
    }
];

let indexQuestioActual = 0;
let respostesCorrectes = 0;
let respostesIncorrectes = 0;

const questioProposada = document.getElementById("questioProposada");
const btnEsquerra = document.getElementById("btnEsquerra");
const btnDret = document.getElementById("btnDret");
const missatge = document.getElementById("missatge");
const btnReiniciar = document.getElementById("btnReiniciar");

function barrejaRespostes(correcta, incorrecta) {
    const respostes = [correcta, incorrecta];
    respostes.sort(() => Math.random() - 0.5);
    return respostes;
}

function mostraQuestio() {
    if(indexQuestioActual < questions.length) {
        const questioActual = questions[indexQuestioActual];
        questioProposada.textContent = questioActual.questio;
        
        const [barrejatCorrecte, barrejatIncorrecte] = barrejaRespostes(
            questioActual.respostaCorrecta, 
            questioActual.respostaIncorrecta
        );

        btnEsquerra.textContent = barrejatCorrecte;
        btnDret.textContent = barrejatIncorrecte;
    } else {
        // El joc ha acabat.
        if(respostesCorrectes === questions.length) {
            missatge.textContent = "Has guanyat! Has respost totes les questions correctament!";
        } else {
            missatge.textContent = `Joc acabat. Respostes correctes: ${ respostesCorrectes },
            Respostes incorrectes: ${ respostesIncorrectes}`;
        }

        btnEsquerra.style.display = "none";
        btnDret.style.display = "none";
        btnReiniciar.style.display = "block";
    }
}

function comprovaResposta(respostaSeleccionada) {

    const questioActual = questions[indexQuestioActual];

    if(respostaSeleccionada === questioActual.respostaCorrecta) {
        respostesCorrectes++;
    } else {
        respostesIncorrectes++;
    }

    indexQuestioActual++;

    mostraQuestio();
}

btnEsquerra.addEventListener("click", () => comprovaResposta(btnEsquerra.textContent));
btnDret.addEventListener("click", () => comprovaResposta(btnDret.textContent));

btnReiniciar.addEventListener("click", () => {
    indexQuestioActual = 0;
    respostesCorrectes = 0;
    respostesIncorrectes = 0;
    missatge.textContent = "";
    btnEsquerra.style.display = "inline-block";
    btnDret.style.display = "inline-block";
    btnReiniciar.style.display = "none";

    mostraQuestio();
});

// Començar Joc
mostraQuestio();