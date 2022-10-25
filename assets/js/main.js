alert ('Tutti gli esercizi sono onclick con output in console')




// Primo Snack
//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo ( del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3  ).

function snippet1(){
    let num = parseInt(prompt('Numero?'));
  
    if (num % 2 == 0){
        console.log (num)
    } else {
        console.log (num + 1);
    }
}


//Secondo snack
//Generatore di “nomi cognomi” casuali del grande gatsby.Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale.

function snippet2() {
let firstname = ["Dario", "Giuseppe", "Alessandro", "Andrea"];
let nfirstname = firstname.length;




//last name's array
let lastname = ["Miccinelli", "Fasulli", "Arciboldi"];
let nlastname = lastname.length;


console.log(firstname[Math.round(Math.random() * (nfirstname - 1))] + ' ' + lastname[Math.round(Math.random() * (nlastname -1 ))])

}


//Terzo Snack
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari
//I numeri sommati saranno 1+3+4 in quanto l'array parte dalla posizione 0

function snippet3() {
    let numbers = [1 , 1 , 5, 3, 9, 4];

let sum = 0;

for(let i = 1; i < numbers.length; i= i+2){
    sum += numbers[i];
}

console.log("La somma equivale a: ", sum)

}

//Quarto Snack (bonus)
//Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

function snippet4() {
alert ('Non riesco :(')
    

}