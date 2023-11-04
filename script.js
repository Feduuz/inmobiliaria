const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menu-list');
const tarjetas = document.querySelector('.flexbox');

menuBtn.addEventListener('click', function() {
  menuList.classList.toggle('active');
  tarjetas.classList.toggle('active');
});

document.getElementById("filter-button").addEventListener("click", function () {
  const priceFilter = parseFloat(document.getElementById("price-filter").value);
  const boxes = document.querySelectorAll(".box");

  boxes.forEach(function (box) {
      const priceElement = box.querySelector(".price span:last-child");
      const price = parseFloat(priceElement.innerText.replace("US$", "").replace(",", ""));

      if (!isNaN(priceFilter) && price < priceFilter) {
          box.style.display = "none";
      } else {
          box.style.display = "block";
      } 
  });
}); 

const expresiones = {
  nombres: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

function validarCampo(input, expresion, mensajeError) {
  const valor = input.value.trim(); // Elimina espacios en blanco al principio y al final

  if (!expresion.test(valor)) {
    // La entrada no cumple con la expresión regular
    input.setCustomValidity(mensajeError);
  } else {
    // La entrada es válida, borra el mensaje de error personalizado
    input.setCustomValidity('');
  }
}

const formulario = document.getElementById('tu-formulario'); // Asigna el ID del formulario
const nombreInput = document.getElementById('usuario');
const emailInput = document.getElementById('correo');

nombreInput.addEventListener('change', function() {
  validarCampo(nombreInput, expresiones.nombres, 'El nombre ingresado no es válido. Debe contener solo letras y tener entre 3 y 40 caracteres.');
});

emailInput.addEventListener('change', function() {
  validarCampo(emailInput, expresiones.email, 'El email ingresado no es válido. Debe contener letras o símbolos antes y después del arroba ("@"), seguido de un punto (".").');
});

formulario.addEventListener('submit', function (event) {
  if (!formulario.checkValidity()) {
    event.preventDefault(); // Evita que el formulario se envíe si la validación no pasa
  }
});