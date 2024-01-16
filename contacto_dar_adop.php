<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $telefono = $_POST["telefono"];
    $correo = $_POST["correo"];
    $especie = $_POST["especie"];
    $genero = $_POST["genero"];
    $esterilizado = $_POST["esterilizado"];
    $nombre_mascota = $_POST["nombre_mascota"];
    $edad = $_POST["edad"];
    $unidad = $_POST["unidad"];
    $convive = $_POST["convive"];
    $descripcion = $_POST["descripcion"];
    $comentarios = $_POST["comentarios"];

    // Obtener información sobre la imagen cargada
    $imagen_nombre = $_FILES["imagen"]["name"];
    $imagen_temp = $_FILES["imagen"]["tmp_name"];

    try {
        $mail->isSMTP();
        $mail->Host = 'inserthost';
        $mail->SMTPAuth = true;
        $mail->Username = 'insertmail';
        $mail->Password = 'insertpassword';
        $mail->SMTPSecure = 'insertSTMP';
        $mail->Port = 0;

        // Configurar otros detalles del correo
        $mail->setFrom('insertmail', 'Amor Patitas');
        $mail->addAddress('insertmail', 'Administrador 1');
        $mail->addAddress('insertmail', 'Administrador 2');
        $mail->Subject = "Adoptar";
        $mail->Body = "Nombre: $nombre\n\nApellido: $apellido\n\nTeléfono: $telefono\n\nCorreo: $correo\n\nEspecie: $especie\n\nGénero: $genero\n\n¿Está esterilizado?: $esterilizado
\nNombre de la mascota: $nombre_mascota\n\nEdad de la mascota: $edad $unidad\n\nConvive con: $convive\n\nDescripción de la mascota: $descripcion\n\nComentarios: $comentarios";

        // Adjuntar la imagen al correo
        $mail->addAttachment($imagen_temp, $imagen_nombre);

        // Enviar el correo
        $mail->send();
        header("Location: exito");
    } catch (Exception $e) {
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Dar en adopción</title>
    <link rel="icon" type="image/x-icon" href="assets/img/huella.ico" />
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i" rel="stylesheet" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="css/styles.css" rel="stylesheet" />
</head>
<body>
<header>
    <a class="nav-link text-uppercase" href="inicio">
        <h1 class="site-heading text-center text-faded d-none d-lg-block">
            <span class="site-heading-upper text-primary mb-3">Amor y patitas felices</span>
            <span class="site-heading-lower">Amor Patitas</span>
        </h1>
    </a>
</header>
<!-- Navigation-->
<nav class="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
    <div class="container">
        <a class="navbar-brand text-uppercase fw-bold d-lg-none" href="inicio">Amor Patitas</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="inicio">Inicio</a></li>
                <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="sobre_amor_patitas">Sobre nosotros</a></li>
                <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="perritos">Perros</a></li>
                <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="gatitos">Gatos</a></li>
                <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="contacto">Contacto</a></li>
                <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="chat">Chat</a></li>
                <li class="nav-item px-lg-4"><a class="nav-link text-uppercase" href="test">Test</a></li>
            </ul>
        </div>
    </div>
</nav>

<section class="page-section">
    <main class="container">

        <form onsubmit="return validarFormulario3()" id="FormLogin" name="FormLogin" method="POST" enctype="multipart/form-data" >

            <div class="form-row">
                <div class="form-group col-md-6">
                    <p style="color: #cf964d;"><label for="nombre">Nombre(s)</label></p>
                    <input type="text" class="form-control" id="nombre" name ="nombre" placeholder="Nombre(s)" required>
                </div>
                <div class="form-group col-md-6">
                    <p style="color: #cf964d;"><label for="apellido">Apellido(s)</label></p>
                    <input type="text" class="form-control" id="apellido" name ="apellido" placeholder="Apellido(s)" required>
                </div>
            </div>
            <div class="form-group">
                <p style="color: #cf964d;"><label for="telefono">Teléfono/Celular</label></p>
                <input type="number" class="form-control" id="telefono" name ="telefono" placeholder="Telefono de contacto" required>
            </div>
            <div class="form-group">
                <p style="color: #cf964d;"><label for="correo">Correo electrónico</label></p>
                <input type="email" class="form-control" id="correo" name ="correo" placeholder="correo@ejemplo.com" required>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <div class="form-group">
                    <p style="color: #cf964d;">Datos de la mascota</p>
                    <p style="color: #cf964d;">¿De qué especie es la mascota?</p>
                    <label style="color: black;">
                        <input type="radio" id="especie" name="especie" value="perro" required> Perro
                    </label>
                    <label style="color: black;">
                        <input type="radio" id="especie" name="especie" value="gato" required> Gato
                    </label>
                    </div>
                    <div class="form-group">
                        <div class="form-group">
                        <p style="color: #cf964d;">Género</p>
                        <label style="color: black;">
                            <input type="radio" id="genero" name="genero" value="macho" required> Macho
                        </label>
                        <label style="color: black;">
                            <input type="radio" id="genero" name="genero" value="hembra" required> Hembra
                        </label>
                        </div>
                        <div class="form-group">
                        <p style="color: #cf964d;">Esta estrilizado/a:</p>
                        <label style="color: black;">
                            <input type="radio" id="esterilizado" name="esterilizado" value="si" required> Si
                        </label>
                        <label style="color: black;">
                            <input type="radio" id="esterilizado" name="esterilizado" value="no" required> No
                        </label>
                        </div>
                        <div class="form-group">
                        <p style="color: #cf964d;"><label for="nombre_mascota">Nombre de la mascota:</label></p>
                        <input type="text" class="form-control" id="nombre_mascota" name ="nombre_mascota" placeholder="Nombre" required>
                        </div>

                        <p style="color: #cf964d;"><label for="edad">Edad (Aproximada): </label></p>
                        <label for="edad"></label><input type="number" id="edad" name="edad" required min="0" max="24" placeholder="Edad">
                    <label for="unidad">:</label>
                    <select id="unidad" name="unidad">
                        <option value="anios">Años</option>
                        <option value="meses">Meses</option>
                    </select>
                    </div>
                    <div class="form-group">
                    <p style="color: #cf964d;"><label for="convive">Convive con: </label></p>
                        <select id="convive" name="convive">
                            <option value="ninguno">Ninguno</option>
                            <option value="perros">Perros</option>
                            <option value="gatos">Gatos</option>
                            <option value="ninios">Niños</option>
                            <option value="perros y gatos">Perros y gatos</option>
                            <option value="perros y ninios">Perros y niños</option>
                            <option value="gatos y ninios">Gatos y niños</option>
                            <option value="perros, gatos y ninios">Perros, gatos y niños</option>
                        </select>
                    </div>
                    <div class="form-group">
                    <p style="color: #cf964d;"><label for="descripcion">Escribe una breve descripción de la mascota:</label></p>
                    <textarea class="form-control" id="descripcion" name ="descripcion" rows="3" required></textarea>
                    </div>
                    <p style="color: #cf964d;"><label for="imagen">Por favor sube una foto de la mascota</label></p>
                    <form method="post" enctype="multipart/form-data">
                        <p style="color: black;"><label for="imagen">Selecciona una imagen:</label></p>
                        <input type="file" id="imagen" name="imagen" accept="image/*">
                    </form>

                    <div class="form-group">
                        <p style="color: #cf964d;"><label for="comentarios">Comentarios...</label></p>
                        <textarea class="form-control" id="comentarios" name ="comentarios" rows="3"></textarea>
                    </div>
                </div>
            <div>
                <label><input type="checkbox" id="cbox1" value="first_checkbox" required> Acepto los </label>
                <a href="terminos_y_condiciones">Términos y condiciones</a>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>

    </main>
</section>

<footer class="footer text-faded text-center py-5">
    <div class="container"><p class="m-0 small">Copyright &copy; Amor Patitas 2023</p></div>
</footer>

<!-- Bootstrap core JS-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
<!-- Core theme JS-->
<script src="js/scripts.js"></script>
<!-- Form validation script -->
<script src="js/validaciones3.js"></script>
</body>
</html>
