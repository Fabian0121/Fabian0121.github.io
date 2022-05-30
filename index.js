/*
Variables 
txtAEntrada
txtARoot
txtAMatriz
txtAMatrizInversa
txtARMatriz
txtARRoot
txtAMO
*/ 
var btnEnviar = document.getElementById('enviar');

var txtEntrada = document.getElementById('txtAEntrada');
var txtRoot13 = document.getElementById('txtARoot');
var txtMatriz = document.getElementById('txtAMatriz');
var txtMatrizInversa = document.getElementById('txtAMatrizInversa');
var txtMatrizReversa = document.getElementById('txtARMatriz');
var txtRoot13reversa = document.getElementById('txtARRoot');
var txtOriginal = document.getElementById('txtAMO');

//var alfabeto = ["0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
//var alfabeto2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alfabetoInverso = "nopqrstuvwxyzabcdefghijklm";
var alfabeto = "abcdefghijklmnopqrstuvwxyz";
alfabeto = alfabeto.split('');
alfabetoInverso = alfabetoInverso.split('');
//
const encriptar = () =>{
    var cadena;
    txtEntrada = document.getElementById('txtAEntrada').value;
    txtEntrada = String(txtEntrada);
    cadena = root13(cadena);
    txtRoot13.textContent = cadena;
    cadena = posicionesArray(cadena);
    for(let b = 0; b < 4; b++)
    {
        cadena = metodoMatriz(cadena);
        cadena = comillas(cadena.split(','));
    }
    txtMatriz.textContent = cadena;
    for(let b = 0; b < 4; b++)
    {
        cadena = metodoMatrizInversa(cadena);
        cadena = comillas(cadena.split(','));
    }
    txtMatrizInversa.textContent = cadena;
    cadena = root13Reversa(cadena);
    txtRoot13reversa.textContent = cadena;
    console.log(cadena);
    cadena = mensajeOriginal(cadena);
    txtOriginal.textContent = cadena
    
}
//Eliminacion d espacios
const espacios = (cadena) =>{
    cadena = txtEntrada.replace(/\s/gi, "0");
    cadena = cadena.split('');
    return cadena;
}
//Nose que para que son dxd
const comillas = (cadena) =>{
    var c = cadena;
    var array = new Array();
    console.log(c.length);
    for(var a = 0; a < c.length; a++)
    {
        if(c[a] != ''){
            array.push(parseInt(c[a]));
        }
    }
    return array;
}
//Conversion a ROOT13
const root13 = (c) =>{
    let posicion;
    var palabra = "";
    var cadena = espacios(c);
    console.log(alfabetoInverso);
    for(var a = 0; a < cadena.length; a++)
    {
        posicion = parseInt(this.alfabetoInverso.indexOf(cadena[a].toLowerCase()));
        if(posicion != -1)
        {
            palabra += this.alfabeto[posicion];
        }
        else{
            palabra += " ";
        }
    }
    return palabra;
}
//Root13 reversa
const root13Reversa = (c) =>{
    let posicion;
    var palabra = "";
    var cadena = espacios(c);
    for(var a = 0; a < cadena.length; a++)
    {
        posicion = parseInt(this.alfabeto.indexOf(cadena[a]));
        if(posicion != -1)
        {
            palabra += this.alfabetoInverso[posicion];
        }
        else{
            palabra += " ";
        }
    }
    return palabra;
}
//Encriptacion por matriz
const metodoMatriz = (txt) => {
    var cadena = txt;
    let matriz = [[1, 2, 1], [0, -1, 3], [2, 1, 0]];
    let resultado = null;
    let aux = 0;
    for (let b = 0; b < cadena.length; b++) {
        for(let a = 0; a < matriz.length; a++)
        {
            aux = (matriz[0][a] * cadena[b]) + (matriz[1][a] * cadena[b + 1]) + (matriz[2][a] * cadena[b + 2]);
            resultado = resultado + aux + ",";
        }
        b+=2;
    }
    return resultado;
}
//Mensaje original
const mensajeOriginal = (c) => {
    let posicion;
    var palabra = "";
    var cadena = espacios(c);
    for(var a = 0; a < cadena.length; a++)
    {
        posicion = parseInt(this.alfabeto.indexOf(cadena[a]));
        console.log(posicion);
        if(posicion != -1)
        {
            palabra += this.alfabeto[posicion];
        }
        else{
            palabra += " ";
        }
    }
    return palabra;
}
//MetodoMatriz inversa
const metodoMatrizInversa = (txt) => {
    var cadena = txt;
    let matriz = [[-3/11, 1/11, 7/11], [6/11, -2/11, -3/11], [2/11, 3/11, -1/11]];
    let resultado = null;
    let aux = 0;
    for (let b = 0; b < cadena.length; b++) {
        for(let a = 0; a < matriz.length; a++)
        {
            aux = (matriz[0][a] * cadena[b]) + (matriz[1][a] * cadena[b + 1]) + (matriz[2][a] * cadena[b + 2]);
            resultado = resultado + aux + ",";
        }
        b+=2;
    }
    return resultado;
}
//Extracion de posiciones
const posicionesArray = (cadena) =>{
    let posicion;
    let arrayVacio = new Array();
    console.log(cadena);
    for (var a = 0; a < cadena.length; a++) {
        posicion = parseInt(this.alfabeto.indexOf(cadena[a].toLowerCase()));
        arrayVacio.push(posicion);
    }
    while(arrayVacio.length % 3 != 0)
    {
        arrayVacio.push(0);
    }
    return arrayVacio;
}
//

btnEnviar.onclick = encriptar;
