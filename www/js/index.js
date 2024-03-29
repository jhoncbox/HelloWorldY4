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
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
// adding the calculator
function add(){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    
    var result = num1 + num2;


    document.getElementById("placeholder").innerHTML = result;   
}
//adding the camera function
function pics(){
    navigator.camera.getPicture(cameraCallBack, onError,);
}
function cameraCallBack(imageData){
    var image = document.getElementById("myImage")
    image.src = imageData;
}
function onError(message){
    console.log('program crashed because: ' + message)
}

// adding the Location to the application
function getLocation(){
    navigator.geolocation.getCurrentPosition(geoCallback, onError)
}
function geoCallback(position){
    var lat = position.coords.latitude
    var lon = position.coords.longitude

    document.getElementById("myPosition").innerHTML = lat + " , " + lon

}

function initMap() {
    var cct = {lat: 53.346, lng: -6.2588};
    var map = new
    google.maps.Map(document.getElementById('map'), {   
        zoom: 8,
        center: cct
    });
    
    var marker = new google.maps.Marker({
        position: cct,
        map: map
    });

    var marker2 = new google.maps.Marker({
        position: {lat: 53.3458, lng: -6.2557},
        map: map
    });

    updateMap(lat,lon);
}
function updateMap(latitude, longitude){
    var location = {lat: latitude, lgn:longitude};
    var map = new
    google.maps.Map(document.getElementById('map'), {   
        zoom: 8,
        center: cct
    });
    
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
//adding the vibratin function
function vibration(){
    var vibrationNum = Number(document.getElementById('vibrationNum').value);
    navigator.vibrate(vibrationNum);
    console.log("vibrating for" + (vibrationNum/1000)+ "seconds")
}
//adding external API
function openGateAPI(){
    var http = new XMLHttpRequest();
    const url ="https://api.opencagedata.com/geocode/v1/json?q=53.346+-6.2588&key=7281aaf002ec4fe88734b4d64d6e9c69";
    http.open("GET", url);
    http.send();
    http.onreadystatechange = (e) => {
            var response = http.responseText;
            var responseJSON = JSON.parse(response); 
            console.log(response);
            console.log(responseJSON)

            // printing attributes in the front end
            var country = responseJSON.results[0].components.country;
            document.getElementById("myPosition").innerHTML = country

    }

}