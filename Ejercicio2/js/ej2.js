function capturar(){
    function Producto(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }
    var nombreCapturar = document.getElementById("nombre").value;
     precioCapturar = document.getElementById("precio").value;
    nuevoProd = new Producto(nombreCapturar, precioCapturar);
    agregar();
}
var Datos= [];
function agregar(){
    Datos.push(nuevoProd);
     document.getElementById("tabla").innerHTML += '<tr><td>'+nuevoProd.nombre+'</td><td>'+ '$' +nuevoProd.precio+'</td></tr>';
     var total=0;

     for (var i=0;i<Datos.length; i++){
        total+=parseFloat(Datos[i].precio)
     }
     document.getElementById("total").innerHTML="";
     document.getElementById("total").innerHTML +="$"+total;
}









    






