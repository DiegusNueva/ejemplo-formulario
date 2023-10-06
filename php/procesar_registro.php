<?php
// Verifica si se reciben datos en formato JSON
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_SERVER['CONTENT_TYPE']) && $_SERVER['CONTENT_TYPE'] === 'application/json') {
    // Recibe el contenido JSON
    $json_data = file_get_contents('php://input');

    // Convierte el JSON en un objeto PHP
    $data = json_decode($json_data);

    // Verifica si se pudo decodificar el JSON correctamente
    if ($data !== null) {
        // Aquí puedes realizar la lógica de procesamiento de los datos
        // Por ejemplo, podrías almacenar los datos en una base de datos o realizar otras operaciones
        // En este ejemplo, simplemente los devolveremos tal como los recibimos
        echo json_encode($data);
    } else {
        // Si no se pudo decodificar el JSON correctamente
        echo json_encode(array("error" => "Error al procesar los datos JSON."));
    }
} else {
    // Si no se reciben datos en formato JSON
    echo json_encode(array("error" => "Se esperaba recibir datos en formato JSON."));
}
?>
