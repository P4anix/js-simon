'Use strict'

/*----------
  Funzioni
 ---------*/

/* Funzione per generare numeri casuali */
function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

/* Funzione per nascondere i numeri */
function nascondi() {
    numeriVisualizzati.innerHTML = '';
}

/* Funzione per chiedere numeri all'utente e confrontarli con i numeri casuali */
function appariPrompt() {
    const numeriInseriti = [];
    let uguali = 0;

    for (let i = 0; i < 5; i++) {
        const utente = Number(prompt('Inserisci il ' + (i + 1) + ' numero che ricordi'));
        numeriInseriti.push(utente);
        if (numeriCasuali.includes(utente)) {
            uguali++;
        }
    }

    alert(`Hai indovinato ${uguali} numeri su 5.`);
}

/*----------
    Main
 ---------*/

/* Array per memorizzare i numeri casuali */
const numeriCasuali = [];

/* Generiamo i numeri casuali e mostriamoli su html */
const numeriVisualizzati = document.getElementById('numeri')

for (let i = 0; i < 5; i++) {
    const numeri = getRandomNumber(90);
    numeriCasuali.push(numeri);
    console.log(numeri);
    const nuovoDiv = document.createElement('div');
    nuovoDiv.innerText = numeri;
    numeriVisualizzati.append(nuovoDiv);
}

/* settiamo il timer per nascondere i numeri */
const tempoNascondere = 10;
setTimeout(nascondi, tempoNascondere * 1000);


/* settiamo il timer per far apparire il prompt */
const tempoPrompt = 11;
setTimeout(appariPrompt, tempoPrompt * 1000);
