function validarFormulario2() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var nombrePalabras = nombre.trim().split(/\s+/).length;
    var apellidoPalabras = apellido.trim().split(/\s+/).length;
    var telefonoDigitos = telefono.length;
    var patron = /^[a-zA-ZñáéíóúüÁÉÍÓÚÜ\s]+$/;
    var nombreMascota = document.getElementById('nombre_mascota').value;
    var motivo = document.getElementById('motivo').value;

    if (nombrePalabras > 2) {
        alert('Favor de ingresar máximo dos nombres.');
        return false;
    }

    if (!patron.test(nombre)){
        alert('Favor de solo ingresar letras en el nombre.');
        return false;
    }

    if (apellidoPalabras > 4) {
        alert('Favor de no ingresar más de cuatro palabras en el apellido.');
        return false;
    }

    if (!patron.test(apellido)){
        alert('Favor de solo ingresar letras en el apellido.');
        return false;
    }

    if (telefonoDigitos != 10) {
        alert('El télefono debe contener 10 dígitos.');
        return false;
    }

    if (!patron.test(nombreMascota)){
        alert('Favor de solo ingresar letras en el nombre.');
        return false;
    }

    const palabras = motivo.split(' ');
    let palabrasValidas = 0;

    palabras.forEach(palabra => {
        if (palabra.length >= 2) {
            palabrasValidas++;
        }
    });

    if (palabrasValidas < 5) {
        alert('Debes escribir al menos 5 palabras en el motivo de adopción.');
        return false;
    }

    return true;
}
