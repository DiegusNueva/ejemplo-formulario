<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Recuperar los datos del formulario
        $nombre = $_POST["nombre"];
        $apellidos = $_POST["apellidos"];
        $email = $_POST["email"];
        $password = $_POST["password"];

        // Mostrar los datos en el navegador
        echo "<p><strong>Nombre:</strong> $nombre</p>";
        echo "<p><strong>Apellidos:</strong> $apellidos</p>";
        echo "<p><strong>Correo electrónico:</strong> $email</p>";
        // La contraseña no se muestra por razones de seguridad
    } else {
        echo "<p>No se han recibido datos del formulario.</p>";
    }
?>
