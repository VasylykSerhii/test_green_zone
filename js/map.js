 function initMap() {
     const map = new google.maps.Map(document.getElementById('map'), {
         center: {lat: 39.972879, lng: -102.262814},
         zoom: 5,
         panControl: false,
         zoomControl: false,
         scaleControl: false,
         fullscreenControl: false
     });
 }