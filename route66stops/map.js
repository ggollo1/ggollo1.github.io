let abbyswebmap = L.map('routemap').setView([40.02144, -93.947006], 4)

let mymap1 = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png').addTo(abbyswebmap)
let mymap2 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(abbyswebmap)
let mymap3 = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(abbyswebmap)

let MapDisplay = {
  'Blue': mymap1,
  'Brown': mymap2,
  'Standard': mymap3
}

L.control.layers(MapDisplay).addTo(abbyswebmap)

let RanchIcon = L.icon({
  iconUrl: 'Cadillac-Ranch-1.png',
  iconSize: [130, 130],
  iconAnchor: [35, 35],
  popupAnchor: [-3, -75]
})

let RanchMarker = L.marker([35.188751, -101.986534], {icon:RanchIcon}).addTo(abbyswebmap)
RanchMarker.bindPopup('Cadillac Ranch, Amarillo, TX')
