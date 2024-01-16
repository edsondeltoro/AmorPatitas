function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var motivo = document.getElementById('motivo').value;
    var nombrePalabras = nombre.trim().split(/\s+/).length;
    var apellidoPalabras = apellido.trim().split(/\s+/).length;
    var telefonoDigitos = telefono.length;
    var patron = /^[a-zA-ZñáéíóúüÁÉÍÓÚÜ\s]+$/;

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

    if (motivo === '') {
        alert('Favor de seleccionar un motivo de contacto.');
        return false;
    }

    return true;
}
