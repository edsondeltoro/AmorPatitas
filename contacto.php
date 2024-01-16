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
    $motivo = $_POST["motivo"];
    $comentarios = $_POST["comentarios"];

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
        $mail->Subject = "$motivo";
        $mail->Body = "Nombre: $nombre\n\nApellido: $apellido\n\nTelefono: $telefono\n\nCorreo: $correo\n\nMotivo: $motivo\n\nComentarios: $comentarios";
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
    <title>Contáctanos</title>
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

        <form onsubmit="return validarFormulario()" id="FormLogin" name="FormLogin" method="POST">

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
                    <div class="form-group col-md-4">
                        <p style="color: #cf964d;"><label for="motivo">Motivo del contacto</label></p>
                        <select id="motivo" name ="motivo" class="form-control">
                            <option value="">Seleccionar...</option>
                            <option value="Contacto general">Contacto general</option>
                            <option value="Duda, queja o sugerencia">Tengo una duda, queja o sugerencia</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <p style="color: #cf964d;"><label for="comentarios">Comentarios...</label></p>
                        <textarea class="form-control" id="comentarios" name ="comentarios" rows="3"></textarea>
                    </div>
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
<script src="js/validaciones.js"></script>
</body>
</html>
