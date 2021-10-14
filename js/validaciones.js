function validar_nombre_usuario(nombre){
    var exp = /[A-Z]([a-z]+)?/; //Expresion solo letras la primera en mayuscula
    if (!exp.test(nombre)) {
        alert('El usuario debe tener la primer letra mayuscula');
    }
    return exp.test(nombre);
}

function validar_anoNacimiento_usuario(anio){
    var exp = /(19[0-9][0-9]|20[0-2][0-1])/; //Expresion rango 1900 hasta 2021
    if (!exp.test(anio)) {
        alert('El año de nacimiento debe estar entre 1900 - 2021');
    }
    return exp.test(anio);
}

function validar_contrasena(contrasena){
    var exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*)[A-Za-z\d$@$!%*?&]{6,20}$/; //Expresion contraseña
    if (!exp.test(contrasena)) {
        alert('La contraseña debe tener entre 6 y 20 caracteres, una minuscula y una mayuscula');
    }
    return exp.test(contrasena);
}

/* module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario; */

let registros = []; 

function agregarRegistro(){
    var name = document.getElementById("nombre_usuario").value;
    var password = document.getElementById("contrasena_usuario").value;
    var year = document.getElementById("anoNacimiento_usuario").value;
    registros.push({usuario: name, anoNacimiento: year, contrasena: password});
}

function EncontrarUsuarioPorEdad(arreglo){
    var age = 2022;
    var position = 0;
    for (var index = 0; index < arreglo.length; index++) {
        if (arreglo[index].anoNacimiento <= age ) {
            age = arreglo[index].anoNacimiento;
            position = index;
        }
    }
    var usuariomayor = registros[position];
    console.log(usuariomayor);
    return usuariomayor;
}

/* module.exports.registros = registros;
module.exports.EncontrarUsuarioPorEdad = EncontrarUsuarioPorEdad;
module.exports.agregarRegistro = agregarRegistro; */