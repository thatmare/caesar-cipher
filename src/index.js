import cipher from './cipher.js';

console.log(cipher);

const encodeBtn = document.getElementById('codeBtn');
encodeBtn.addEventListener('click', function(){
  const string = document.getElementById('inputMessage').value;
  const offset = document.getElementById('offset').value;
  const resultSpan = document.getElementById('resultSpan');

  resultSpan.textContent = cipher.encode (offset, string);
})

const decodeBtn = document.getElementById('decodeBtn');
decodeBtn.addEventListener('click', function(){
  const string = document.getElementById('inputMessage').value;
  const offset = document.getElementById('offset').value;
  const resultSpan = document.getElementById('resultSpan');

  resultSpan.textContent = cipher.decode(offset, string);
})