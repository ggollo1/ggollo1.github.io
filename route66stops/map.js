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
  iconUrl: 'icons/Cadillac-Ranch-1.png',
  iconSize: [130, 130],
  iconAnchor: [35, 35],
  popupAnchor: [-3, -75]
})

let RanchMarker = L.marker([35.188751, -101.986534], {icon:RanchIcon}).addTo(abbyswebmap)
RanchMarker.bindPopup('Cadillac Ranch, Amarillo, TX')

let PaintedIcon = L.icon({
  iconUrl: 'icons/painteddes.png',
  iconSize: [100, 100],
  iconAnchor: [25, 90],
  popupAnchor: [-5, -75]
})

let PaintedMarker = L.marker([35.064307, -109.779466], {icon:PaintedIcon}).addTo(abbyswebmap)
PaintedMarker.bindPopup('Painted Desert, Arizona')

let TotemIcon = L.icon({
  iconUrl: 'totempark.png',
  iconSize: [130, 130],
  iconAnchor: [35, 35],
  popupAnchor: [-3, -75]
})

let TotemMarker = L.marker([36.433139, -95.521671], {icon:TotemIcon}).addTo(abbyswebmap)
TotemMarker.bindPopup('Ed Galloways Totem Pole Park, Foyil, OK')

let GasIcon = L.icon({
  iconUrl: 'gas.png',
  iconSize: [130, 130],
  iconAnchor: [35, 35],
  popupAnchor: [-3, -75]
})

let GasMarker = L.marker([39.829003, -89.638055], {icon:GasIcon}).addTo(abbyswebmap)
GasMarker.bindPopup('Sheas Gas Station Museum, Springfield, IL')

let GrantIcon = L.icon({
  iconUrl: 'grantpark.png',
  iconSize: [130, 130],
  iconAnchor: [35, 35],
  popupAnchor: [-3, -75]
})

let GrantMarker = L.marker([41.240779, -87.644269], {icon:GrantIcon}).addTo(abbyswebmap)
GrantMarker.bindPopup('Grant Park, Chicago, IL')

let MilkIcon = L.icon({
  iconUrl: 'milk.png',
  iconSize: [130, 130],
  iconAnchor: [35, 35],
  popupAnchor: [-3, -75]
})

let MilkMarker = L.marker([35.467181, -97.473348], {icon:MilkIcon}).addTo(abbyswebmap)
MilkMarker.bindPopup('The Milk Bottle Grocery, Oklahoma City, OK')

let ShoeIcon = L.icon({
  iconUrl: 'shoetree.png',
  iconSize: [130, 130],
  iconAnchor: [35, 35],
  popupAnchor: [-3, -75]
})

let ShoeMarker = L.marker([34.557822, -115.752356], {icon:ShoeIcon}).addTo(abbyswebmap)
ShoeMarker.bindPopup('Route 66 Shoe Tree, Amboy, CA')

let LousIcon = L.icon({
  iconUrl: 'loumitch.png',
  iconSize: [130, 130],
  iconAnchor: [35, 35],
  popupAnchor: [-3, -75]
})

let LouMarker = L.marker([41.877638, -87.641541], {icon:LousIcon}).addTo(abbyswebmap)
LouMarker.bindPopup('Lou Mitchells Cafe, Chicago, IL')

let RoyIcon = L.icon({
  iconUrl: 'roys.png',
  iconSize: [130, 130],
  iconAnchor: [35, 35],
  popupAnchor: [-3, -75]
})

let RoyMarker = L.marker([34.558592, -115.744483], {icon:RoyIcon}).addTo(abbyswebmap)
RoyMarker.bindPopup('Roys Motel and Cafe, Amboy, CA')

let SnowIcon = L.icon({
  iconUrl: 'snowcap.png',
  iconSize: [130, 130],
  iconAnchor: [35, 35],
  popupAnchor: [-3, -75]
})

let SnowMarker = L.marker([35.327404, -112.879262], {icon:SnowIcon}).addTo(abbyswebmap)
SnowMarker.bindPopup('Snow Cap Dive-In, Seligman, AZ')

let WigwamIcon = L.icon({
  iconUrl: 'wigwam.png',
  iconSize: [130, 130],
  iconAnchor: [35, 35],
  popupAnchor: [-3, -75]
})

let WigwamMarker = L.marker([34.902497, -110.168356], {icon:WigwamIcon}).addTo(abbyswebmap)
WigwamMarker.bindPopup('Wigwam Motels, Holbrook, AZ')

let JackIcon = L.icon({
  iconUrl: 'jackrabtrading.png',
  iconSize: [130, 130],
  iconAnchor: [35, 35],
  popupAnchor: [-3, -75]
})

let JackMarker = L.marker([34.956747, -110.333598], {icon:JackIcon}).addTo(abbyswebmap)
JackMarker.bindPopup('Jack Rabbit Trading Post, Joseph City, AZ')

let TowIcon = L.icon({
  iconUrl: 'tow tater.png',
  iconSize: [130, 130],
  iconAnchor: [35, 35],
  popupAnchor: [-3, -75]
})

let TowMarker = L.marker([37.074881, -94.639854], {icon:TowIcon}).addTo(abbyswebmap)
TowMarker.bindPopup('Tow Tater, Galena, Kansas')

let GeminiIcon = L.icon({
  iconUrl: 'geminigiant.png',
  iconSize: [130, 130],
  iconAnchor: [35, 35],
  popupAnchor: [-3, -75]
})

let GeminiMarker = L.marker([41.297773, -88.141494], {icon:GeminiIcon}).addTo(abbyswebmap)
GeminiMarker.bindPopup('The Gemini Giant, Wilmington, IL')

let SantaIcon = L.icon({
  iconUrl: 'santamonicapier.png',
  iconSize: [130, 130],
  iconAnchor: [35, 35],
  popupAnchor: [-3, -75]
})

let SantaMarker = L.marker([34.008933, -118.49739], {icon:SantaIcon}).addTo(abbyswebmap)
SantaMarker.bindPopup('Santa Monica Pier, CA')
