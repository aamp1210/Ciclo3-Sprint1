/* function validar_nombre_usuario(nombre){
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
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario; */

let registros = []; 

function obtenerNombre(){
    var name = document.getElementById("nombre_usuario").value;
    return name;
}

function obtenerContraseña(){
    var password = document.getElementById("contrasena_usuario").value;
    return password;
}

function obtenerAño(){
    var year = document.getElementById("anoNacimiento_usuario").value;
    return year;
}

function Usuario(name,password,year){
    this.name = name;
    this.password = password;
    this.year = year;
}

function agregarRegistro(){
    var user = new Usuario(obtenerNombre(),obtenerContraseña(),obtenerAño());
    registros.push(user);
}

function EncontrarUsuarioPorEdad(arreglo){
    var edad;
    for (let index = 0; index < arreglo.length(); index++) {
        aux_user = arreglo[index];
        edad = aux_user.year;
        
    }
}