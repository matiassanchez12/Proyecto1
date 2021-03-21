
var map = L.map('mapid').setView([-34.824680, -58.445341], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

$.ajax({
    dataType: "json",
    url: "bicicletas",
    success: function(result){
     result.bicicletas.forEach(function(bici){
         L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
     })
    }
})
