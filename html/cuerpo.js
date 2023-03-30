

document.getElementById("boton1").onclick = function () {
    console.log("este funciona");
    document.getElementById("dato1").innerHTML ="Gerardo Fernandez" ;
}
document.getElementById("boton2").onclick = function () {
    console.log("este 2 funciona");
    document.getElementById("dato2").innerHTML ="18/11/90" ;
}
document.getElementById("boton3").onclick = function () {
    console.log("este 3 funciona");
    document.getElementById("dato3").innerHTML ="Newman 44" ;

}
document.getElementById("boton3").addEventListener("click",function () {
    document.getElementById("email").innerHTML ="matthew.henry@example.com"  

    document.getElementById("telefono").innerHTML ="(796) 616-8994"  
}

)