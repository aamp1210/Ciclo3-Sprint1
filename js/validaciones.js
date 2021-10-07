function validar_nombre_usuario(nombre){
    var exp = /[A-Z]([a-z]+)?/; //Expresion solo letras la primera en mayuscula
    return exp.test(nombre);
}

function validar_anoNacimiento_usuario(anio){
    var exp = /(19[0-9][0-9]|20[0-2][0-1])/; //Expresion rango 1900 hasta 2021
    return exp.test(anio);
}

function validar_contrasena(contrasena){
    var exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*)[A-Za-z\d$@$!%*?&]{6,20}$/; //Expresion contraseña
    return exp.test(contrasena);
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;