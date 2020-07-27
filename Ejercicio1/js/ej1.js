//Variables
var cifras,impares=0, pares=0 ,sumaimpa=0 ,sumapa=0 ,suma=0 ,menor=0 ,mayor=0 ,i;
//Solicitando datos
var numero = prompt('Ingrese un numero','');
document.write("<header>");
document.write("<h1>Su numero: "  , " " + numero , "</h1>");
document.write("</header>");
document.write("<section>");
document.write("<article>");
document.write("<div>");    
document.write("</div>");

for(var i=0; i< numero.length; i++){
    var caracter = numero.charAt(i);
    parseInt(caracter);

    alert(caracter);
    if(caracter % 2 != 0){
        impares++;

        sumaimpa += parseInt(caracter);

    }else if(caracter % 2 == 0){
        pares++;
        sumapa += parseInt(caracter);
    }

    suma += parseInt(caracter);

}


//Evaluacion de cifras 
var cifras = function(numero){
    return numero.toString().length;
}

document.write("<h3>Cifras: " , cifras(numero) , "</h3>");
document.write("<h3>Impares:" + impares , "</h3>");
document.write("<h3>Pares:" + pares , "</h3>");
document.write("<h3>Suma de las cifras: " + suma , "</h3>");





    






