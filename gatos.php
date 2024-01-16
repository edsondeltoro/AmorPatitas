<?php
include 'db.php';
$sql = "SELECT image, name, id FROM gatos";
$result = $conn->query($sql);
$id_cat = 1;
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Gatitos :3</title>
    <link rel="icon" type="image/x-icon" href="assets/img/huella.ico" />
    <!-- Google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i" rel="stylesheet" />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="css/styles.css" rel="stylesheet" />
    <!-- Lightbox CSS-->
    <link href="css/styles2.css" rel="stylesheet" />
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
<section class="page-section about-heading">

    <!-- contenido aqui-->
    <div class="gallery">
        <?php
        while ($row = $result->fetch_assoc()) {
            echo '<img src="' . $row['image'] . '" alt="Gatito en adopción." id= "'. $id_cat .'"data-text="' . $row['name'] . '" onclick="openLightbox(' . $id_cat . ')">';
            $id_cat++;
        }

        $id_cat --;

        $conn->close();
        ?>
    </div>

    <div id="lightbox" class="lightbox">
        <span class="close" onclick="closeLightbox()">&times;</span>
        <img id="lightbox-image" src="">
        <p id="lightbox-text"  style="color: white; font-size: 19px; margin: 0; line-height: 2;"></p>
        <span class="prev" onclick="changeImage(-1, <?php echo $id_cat; ?>)">&#10094;</span>
        <span class="next" onclick="changeImage(1, <?php echo $id_cat; ?>)">&#10095;</span>
    </div>

</section>
<footer class="footer text-faded text-center py-5">
    <div class="container"><p class="m-0 small">Copyright &copy; Amor Patitas 2023</p></div>
</footer>
<!-- Bootstrap core JS-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
<!-- Core theme JS-->
<script src="js/scripts.js"></script>
<!-- Lightbox JS-->
<script src="js/lightbox.js"></script>
</body>
</html>
