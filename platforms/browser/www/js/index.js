/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
        var notificationOpenedCallback = function(jsonData) {
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
          };
        
          window.plugins.OneSignal
            .startInit("6fdf5ca9-9486-4724-b4b9-87edf8f50934")
            .handleNotificationOpened(notificationOpenedCallback)
            .endInit();
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

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

        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
