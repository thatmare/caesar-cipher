import cipher from './cipher.js';

console.log(cipher);

const inputMessage = document.getElementById('inputMessage');
const offset = document.getElementById('offset');
const codeBtn = document.getElementById('codeBtn');
const decodeBtn = document.getElementById('decodeBtn');

function caesarCipher() {
  let inputValue = inputMessage.value;
  let offsetValue = Number(offset.value); 
  let result = "";
    for (let i=0; i<inputValue.length; i++) {
        let letterASCII = inputValue[i].charCodeAt();
        if (letterASCII >= 65 && letterASCII <= 90){
            result += String.fromCharCode(((letterASCII - 65 + offsetValue)%26)+65);
        } else if (letterASCII >= 97 && letterASCII <= 122) {
            result += String.fromCharCode(((letterASCII - 97 + offsetValue)%26)+97);
        }
    }

    window.alert(result);
}

codeBtn.addEventListener('click', caesarCipher)

//function caesarDecipher() {
//  let inputValue = inputMessage.value;
//  let offsetValue = Number(offset.value);
//  let result = "";
    //for (let i=0; i<inputValue.length; i++) {
      //let letterASCII = inputValue[i].charCodeAt();
      //if (letterASCII >= 65 && letterASCII <= 90) {
        //result += String.fromCharCode(((letterASCII - 65 - offsetValue + 26)%26)+65);
      //} else if (letterASCII >= 97 && letterASCII <= 122) {
        //result += String.fromCharCode(((letterASCII - 97 - offsetValue)%26)+97);
      //}
    //}

    //window.alert(result);
//}

decodeBtn.addEventListener('click', function(){
  alert("hola");
});

//OFFICE HOUR LUNES 13
//codeBtn.addEventListener('click', function (){
  //  prueba(offset.value);
//});

//codeBtn.addEventListener('click', function(){
  //  console.log(inputMessage.value)
//})

//OFFICE HOUR LUNES 13
//function prueba(param){
  //  const offsetParam = Number(param);
    //console.log(offsetParam)
//}

//let i=0; i < string.length; i++ es una construcción para iterar sobre todos los caracteres de una cadena de texto. Estamos declarando la variable "i", que debe ser igual a 0 pues ese es el valor o posición inicial. "i < string.length" nos indica que va a iterar siempre y cuando la variable i sea menor que la longitud de string, es decir, se va a detener cuando haya iterado sobre todos los caracteres de string. "i++" es la expresión de incremento, pues en cada iteración el valor de i aumentará uno para así poder avanzar. 
//for (let i=0; i < string.length; i++) {
    //aquí estamos asignando la variable letter para cada letra (caracter) del string, que se define dependiendo de su posición al momento de iterar, eso gracias al i entre corchetes. 
  //  let letter = string[i];
    //como usaremos ASCII para hacer el cifrado, creamos una variable que almacene el valor ASCII de cada letra, que se va a recuperar con el método charCodeAt
    //let letterASCII = letter.charCodeAt();
//}
