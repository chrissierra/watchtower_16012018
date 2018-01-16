 
 function funcion_fetch(path, array_posting){
     fetch(path, {
	method: 'post',
	body: JSON.stringify(array_posting)
})
.then(function(response)  {
    
  return response.text();
})
.then(function(miBlob) {
    
 console.log(miBlob);



});
 }

function funcion_fetch_json(path, array_posting){
     fetch(path, {
	method: 'post',
	body: JSON.stringify(array_posting)
})
.then(function(response)  {
    
  return response.json();
})
.then(function(miBlob) {
    
 console.log(miBlob);
testing(miBlob);


});
 }





   var miInit = { method: 'POST',
               headers: {'Content-Type':'application/x-www-form-urlencoded'}, // this line is important, if this content-type is not set it wont work
               body:'nombre1='+nombre+"&sexo="+sexo+"&apellido="+apellido+"&direccion="+direccion+"&nacimiento="+nacimiento+"&sueldo="+sueldo+"&nombre_empresa="+nombre_empresa+"&jefatura="+jefatura+"&puesto="+puesto+"&horario="+horario+"&isapre="+isapre+"&afp="+afp+"&edad="+edad+"&rut="+rut
                };

fetch('./model/server.php',miInit)
.then(function(response)  {
    
  return response.text();
})
.then(function(miBlob) {
    
 console.log(miBlob);
});
