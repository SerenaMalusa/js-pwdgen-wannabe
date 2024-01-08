/* prendi gli elementi dell html tramite id */
let resultName = document.getElementById('name');
let resultSurname = document.getElementById('surname');
let resultColor = document.getElementById('color');
let resultYear = document.getElementById('current-year');
let resultPsw = document.getElementById('result');

// individua e scrivi l'anno corrente in pagina
let currentYear = new Date().getFullYear();
resultYear.innerText = 'Siamo nell\'anno: ' + currentYear;

/*
    1: Chiedi all'utente il suo nome :      
*/
// crea una variabile `userName`, apri un promt che chiede all utente `scrivi il tuo nome`,salva il prompt in userName
const userName = prompt('Scrivi il tuo nome', 'nome');

// stampa userName nel tag appropriato
resultName.innerText = `Nome:  ${userName}`;

/* 
    2: chiedi il cognome 
*/
// crea una variabile `userSurname`, apri un promt che chiede all utente `scrivi il tuo cognome`, salva il prompt in userSurname
const userSurname = prompt('Scrivi il tuo cognome', 'cognome');
//stampa userSurname nel tag appropriato
resultSurname.innerText = `Cognome:  ${userSurname}`;

/*
    3: chiedi il colore preferito
*/
// crea una variabile `userFavColor`, apri un promt che chiede all utente `scrivi il tuo colore preferito`, salva il prompt in userFavColor
const userFavColor = prompt('Scrivi il tuo colore preferito', 'colorepreferito');
// stampa userFavColor nel tag appropriato
resultColor.innerText = `Colore preferito: ${userFavColor}`;

/* 
    4: scrivi sulla pagina nomecognomecolorepreferito23 
*/
// crea una nuova variabile `newPassword`, salva in newPassword il valore ottenuto dalla concatenazione di: `userName` +  `userSurname` + `userFavColor` + 23  
const newPassword = userName + userSurname + userFavColor + currentYear;
// stampa newPassword nel tag appropriato
result.innerHTML = `
                    Grazie per aver condiviso con noi queste informazioni. <br />
                    La nuova password che abbiamo generato per te è: <br />
                    <mark> ${newPassword} </mark>
                    `