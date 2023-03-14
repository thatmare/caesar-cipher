import cipher from './cipher.js';

console.log(cipher);

const inputMessage = document.getElementById('inputMessage');
const offset = document.getElementById('offset');
const codeBtn = document.getElementById('codeBtn');
const decodeBtn = document.getElementById('decodeBtn');
const resultSpan = document.getElementById('resultSpan');

function caesarCipher() {
  let inputValue = inputMessage.value; //recuperamos el valor ingresada por la usuaria en el área de texto
  let offsetValue = Number(offset.value); //recuperamos el valor de desplazamiento en el input number, lo convertimos a valor numérico porque es string
  let result = ""; //es un valor vacío porque aquí almacenaremos el resultado
    for (let i=0; i<inputValue.length; i++) { //es un bucle nos sirve para iterar o recorrer los valores que recibiremos (los caracteres de la cadena de texto) siempre y cuando se cumplan las condiciones siguientes. Declaramos la variable i, que inicialmente está en la posición 0 (i=0); la variable i no deberá sobrepasar la longitud de la cadena de texto (i<inputValue.length); y la variable i, que inicialmente es 0, va a ir avanzando una posición cada bucle
        let letterASCII = inputValue[i].charCodeAt(); //declaro la variable letterASCII para almacenar el código ASCII de cada caracter, con el método charCodeAt()
        if (letterASCII >= 65 && letterASCII <= 90){ //empiezan las condiciones: si la variable ASCII es igual o menor a 65 (A en ASCII) e igual o mayor a 90 (Z en ASCII), se ejecutará lo siguiente...
            result += String.fromCharCode(((letterASCII - 65 + offsetValue)%26)+65); //se le va a agregar el valor a la variable de result que va a ser igual a el caracter recuperado de la operación (((x-65+n)%26)+65)
        } else if (letterASCII >= 97 && letterASCII <= 122) { 
            result += String.fromCharCode(((letterASCII - 97 + offsetValue)%26)+97); //repetimos lo anterior, pero para minúsculas (a es 97 en ASCII y z es 122 en ASCII)
        }
    }

    resultSpan.textContent = result;
}

codeBtn.addEventListener('click', caesarCipher) //Aquí se ejecuta la función, al hacer clic en el botón.

function caesarDecipher() {
  let inputValue = inputMessage.value;
  let offsetValue = Number(offset.value);
  let result = "";
    for (let i=0; i<inputValue.length; i++) {
      let letterASCII = inputValue[i].charCodeAt();
      if (letterASCII >= 65 && letterASCII <= 90) {
        result += String.fromCharCode(((letterASCII - 65 - offsetValue + 26)%26)+65);
      } else if (letterASCII >= 97 && letterASCII <= 122) {
      result += String.fromCharCode(((letterASCII - 97 - offsetValue)%26)+97);
      }
    }

    window.alert(result);
}

decodeBtn.addEventListener('click', caesarDecipher)