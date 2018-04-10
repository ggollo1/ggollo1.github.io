let tmap = L.map('abbysmap').setView([30.323136,	-89.420824], 13)
let base = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
L.tileLayer(base).addTo(tmap)
let mark = L.marker([30.266954	-89.388052]).addTo(tmap)
let poly = L.polygon([
  [30.259313,	-89.398349],
  [30.321865,	-89.395774],
  [30.305564,	-89.444869]
]).addTo(tmap);

poly.bindPopup('Waveland')
mark.bindPopup('Home')


tmap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})
