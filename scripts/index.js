document.getElementById("registroForm").addEventListener("submit", function (event) {
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!nombre || !apellidos || !email || !password) {
        alert("Por favor, complete todos los campos.");
        event.preventDefault(); // Evita que el formulario se envíe
    }
});
