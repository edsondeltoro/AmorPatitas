function validarFormulario3() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var nombrePalabras = nombre.trim().split(/\s+/).length;
    var apellidoPalabras = apellido.trim().split(/\s+/).length;
    var telefonoDigitos = telefono.length;
    var patron = /^[a-zA-ZñáéíóúüÁÉÍÓÚÜ\s]+$/;
    var nombreMascota = document.getElementById('nombre_mascota').value;
    var edad = document.getElementById('edad').value;
    var nombreMascota = document.getElementById('nombre_mascota').value;
    var descripcion = document.getElementById('descripcion').value;

    if (nombrePalabras > 2) {
        alert('Favor de ingresar máximo dos nombres.');
        return false;
    }

    if (!patron.test(nombre)) {
        alert('Favor de solo ingresar letras en el nombre.');
        return false;
    }

    if (apellidoPalabras > 4) {
        alert('Favor de no ingresar más de cuatro palabras en el apellido.');
        return false;
    }

    if (!patron.test(apellido)) {
        alert('Favor de solo ingresar letras en el apellido.');
        return false;
    }

    if (telefonoDigitos !== 10) {
        alert('El teléfono debe contener 10 dígitos.');
        return false;
    }

    if (!patron.test(nombreMascota)) {
        alert('Favor de solo ingresar letras en el nombre de la mascota.');
        return false;
    }

    if (isNaN(edad) || edad > 24) {
        alert('La edad debe ser un número de máximo 2 dígitos.');
        return false;
    }

    const palabras = descripcion.split(' ');
    let palabrasValidas = 0;

    palabras.forEach(palabra => {
        if (palabra.length >= 2) {
            palabrasValidas++;
        }
    });

    if (palabrasValidas < 5) {
        alert('Debes escribir al menos 5 palabras en la descripción.');
        return false;
    }

    var imagenInput = document.getElementById('imagen');
    if (imagenInput.files.length === 0) {
        alert('Por favor, sube una imagen de la mascota.');
        return false;
    }

    return true;
}
