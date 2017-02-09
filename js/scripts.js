// plik scripts.js

var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";

animal = animal.toUpperCase();
console.log(animal);

text = text.replace('Papugi', animal);
console.log(text);
console.log(text.substring(text.length/2));