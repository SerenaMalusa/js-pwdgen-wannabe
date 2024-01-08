/*
    1: Chiedi all'utente il suo nome :
        crea una variabile `userName`  
        apri un promt che chiede all utente `scrivi il tuo nome`  
        salva il prompt in userName
*/
const userName = prompt('Scrivi il tuo nome', 'Sere');

//      stampa userName in console
console.log(userName);

/* 
    2: crea una variabile `userSurname`  
        apri un promt che chiede all utente `scrivi il tuo cognome`  
        salva il prompt in userSurname
*/
const userSurname = prompt('Scrivi il tuo cognome', 'Malu');
//      stampa userSurname in console
console.log(userSurname);

/*
    3: crea una variabile `userFavColor`  
        apri un promt che chiede all utente `scrivi il tuo colore preferito`  
        salva il prompt in userFavColor
*/
const userFavColor = prompt('Scrivi il tuo colore preferito');
//      stampa userFavColor in console
console.log(userFavColor, 'Green');

/* 
    4: crea una nuova variabile `newPassword`  
        salva in newPassword il valore ottenuto dalla concatenazione di: `userName` +  `userSurname` + `userFavColor` + 23  
*/
const newPassword = userName + userSurname + userFavColor + '23';
//      stampa newPassword in console  
console.log(newPassword);
//      prendi il tag presente in pagina
const result = document.getElementById('result');
//      modificane il contenuto (html o testo poi vedo) indicando la password generata con la variabile newPassword
result.innerText = `
                    Grazie per aver condiviso con noi queste informazioni.
                    La nuova password che abbiamo generato per te è:
                    ${newPassword}
                    `