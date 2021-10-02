function validar_nombre_usuario(nombre){
    var exp = /[A-Z]([a-z]+)?/; //Expresion regular que cumple los requisitos
    return exp.test(nombre);
}

function validar_anoNacimiento_usuario(anio){
    var exp = /(19[0-9][0-9]|20[0-2][0-1])/; //Expresion regular con los requisitos
    return exp.test(anio);
}

function validar_contrasena(contrasena){
    var exp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*)[A-Za-z\d$@$!%*?&]{6,20}$/;
    return exp.test(contrasena);
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;