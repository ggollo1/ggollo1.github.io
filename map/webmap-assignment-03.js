let tmap = L.map('abbysmap').setView([30.323136,	-89.420824], 13)
let base = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
L.tileLayer(base).addTo(tmap)

let myGreenIcon = L.icon({
  iconUrl: 'leaf-green.png',
  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

let mark = L.marker([30.26,	-89.388052], {icon: myGreenIcon}).addTo(tmap)

let poly = L.polygon([
  [30.25,	-89.398],
  [30.32,	-89.396],
  [30.31,	-89.456]
]).addTo(tmap);
