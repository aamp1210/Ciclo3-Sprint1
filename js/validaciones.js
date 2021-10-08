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

/* function obtenerNombre(){
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
} */

function agregarRegistro(){
    var name = document.getElementById("nombre_usuario").value;
    var password = document.getElementById("contrasena_usuario").value;
    var year = document.getElementById("anoNacimiento_usuario").value;
    var user = {name: name, password: password, year: year};
    registros.push(user);
}

function EncontrarUsuarioPorEdad(arreglo){
    var edad = 2022;
    var count = 0;
    var posicion = 0;
    for (let index = 0; index < arreglo.length; index++) {
        if (arreglo[index].year <= edad ) {
            edad = arreglo[index].year;
            count++;
            posicion = index;
        }
    }
    if (count === 1){
        console.log(arreglo[posicion]);
        return arreglo[posicion];
    }else{
        arreglo.reverse();
        var user = arreglo.find(Usuario => Usuario.year === edad)
        console.log(user);
        return user;
    }
}

module.exports.registros = registros;
module.exports.EncontrarUsuarioPorEdad = EncontrarUsuarioPorEdad;
module.exports.agregarRegistro = agregarRegistro;