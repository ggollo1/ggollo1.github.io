let tmap = L.map('abbysmap').setView([30.323136,	-89.420824], 13)

let base = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
let blueBasemap= L.tileLayer(base).addTo(tmap)

let topographic = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
let topographicBasemap = L.tileLayer(topographic)

let white = 'https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png'
let whiteBasemap= L.tileLayer(white)

let myBase = {
  'Light basemap': blueBasemap,
  'Topographic': topographicBasemap,
  'White basemap': whiteBasemap
}

let myControlOptions = {
  collapsed: false
}

let opLayers= {}

L.control.layers(myBase).addTo(tmap)
