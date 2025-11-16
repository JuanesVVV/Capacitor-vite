import './style.css';

let secreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

document.getElementById('app').innerHTML = `
  <h1>Adivina el número</h1>
  <input id="entrada" type="number" placeholder="Entre 1 y 100" />
  <button id="verificar">Verificar</button>
  <p id="mensaje"></p>
  <p id="intentos">Intentos: 0</p>
  <button id="reiniciar">Reiniciar</button>
`;

document.getElementById('verificar').onclick = () => {
  const valor = parseInt(document.getElementById('entrada').value);
  intentos++;
  document.getElementById('intentos').textContent = `Intentos: ${intentos}`;

  if (valor === secreto) {
    document.getElementById('mensaje').textContent = '¡Correcto! 🎉';
  } else if (valor < secreto) {
    document.getElementById('mensaje').textContent = 'Demasiado bajo ⬇️';
  } else {
    document.getElementById('mensaje').textContent = 'Demasiado alto ⬆️';
  }
};

document.getElementById('reiniciar').onclick = () => {
  secreto = Math.floor(Math.random() * 100) + 1;
  intentos = 0;
  document.getElementById('mensaje').textContent = '';
  document.getElementById('intentos').textContent = 'Intentos: 0';
  document.getElementById('entrada').value = '';
};
