//3 Ocurrencias
/* let regex = /[a-zA-Z]{3}/;
const text = "asR12yT762";
console.log(regex.test(text)); */

/*  //3 o mas Ocurrencias
regex = /[a-zA-Z]{4,}/;
const text = "asRdfghj12yT762";
console.log(regex.test(text));
 */
//Analiza si hay numeros
const digits = "asddssd";
regex = /\d/;
console.log(regex.test(digits));

//Analiza si hay caracteres especiales
const specialCharacters = "ajsdj223_12asd";
regex = /[^a-zA-Z0-9]/;
console.log(regex.test(specialCharacters)); 