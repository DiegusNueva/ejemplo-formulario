/**
 *  Autor: Diego Alonso Molina (Full Stack Developer)
 *  GitHub: 
 */

// Validar que el nombre no esté vacío
function validarNombre(nombre) {
    if (nombre === "") {
        alert("El nombre no puede estar vacío.");
        return false;
    }
    return true;
}

// Validar que la dirección de correo electrónico sea válida
function validarEmail(email) {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regex.test(email)) {
        alert("La dirección de correo electrónico no es válida.");
        return false;
    }
    return true;
}

// Validar que la contraseña tenga al menos 8 caracteres
function validarContraseña(contraseña) {
    if (contraseña.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return false;
    }
    return true;
}

// Validar todos los campos del formulario
function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let contraseña = document.getElementById("password").value;

    return validarNombre(nombre) && validarEmail(email) && validarContraseña(contraseña);
}

// Asignar la función enviarFormulario al evento onsubmit del formulario
document.getElementById("registroForm").onsubmit = function () {
    return validarFormulario();
};

// Enviar el formulario si todos los campos son válidos
function enviarFormulario() {
    if (validarFormulario()) {
        return true; // Permite que el formulario se envíe
    } else {
        return false; // Evita que el formulario se envíe si la validación falla
    }
}

