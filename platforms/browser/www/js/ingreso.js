setTimeout(abriendo, 300)

function abriendo(){
  var boton= document.getElementById("submit");
  boton.addEventListener("click", funcion_fetch, false);
}



function funcion_fetch(e){
e.preventDefault();

 var rut=document.getElementById("rut").value;
 var nombre= document.getElementById("nombre").value;




var miInit = { method: 'POST',
               headers: {'Content-Type':'application/x-www-form-urlencoded'}, // this line is important, if this content-type is not set it wont work
               body:'nombre='+nombre+"&rut="+rut
                };



fetch('./src/js/ingreso_seguridad.php',miInit)
.then(function(response)  {

  return response.text();
  
}).then(function(miBlob) {

  if(miBlob==0){
    alert("Ingresa una cuenta válida");
  }else{
    location.href="./menu.html";
  }
   
 console.log(miBlob);




});


}

