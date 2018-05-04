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
  iconSize: [30, 30],
  iconAnchor: [35, 35]
})

let RanchMarker = L.marker([35.188751, -101.986534], {icon:RanchIcon}).addTo(abbyswebmap)
RanchMarker.bindPopup('Cadillac Ranch, Amarillo, TX')

let PaintedIcon = L.icon({
  iconUrl: 'icons/painteddes.png',
  iconSize: [30, 30],
  iconAnchor: [25, 90]
})

let PaintedMarker = L.marker([35.064307, -109.779466], {icon:PaintedIcon}).addTo(abbyswebmap)
PaintedMarker.bindPopup('Painted Desert, Arizona')

let TotemIcon = L.icon({
  iconUrl: 'icons/totempark.png',
  iconSize: [30, 30],
  iconAnchor: [35, 35]
})

let TotemMarker = L.marker([36.433139, -95.521671], {icon:TotemIcon}).addTo(abbyswebmap)
TotemMarker.bindPopup('Ed Galloways Totem Pole Park, Foyil, OK')

let GasIcon = L.icon({
  iconUrl: 'icons/gas.png',
  iconSize: [30, 30],
  iconAnchor: [35, 35]
})

let GasMarker = L.marker([39.829003, -89.638055], {icon:GasIcon}).addTo(abbyswebmap)
GasMarker.bindPopup('Sheas Gas Station Museum, Springfield, IL')

let GrantIcon = L.icon({
  iconUrl: 'icons/grantpark.png',
  iconSize: [30, 30],
  iconAnchor: [35, 35]
})

let GrantMarker = L.marker([41.240779, -87.644269], {icon:GrantIcon}).addTo(abbyswebmap)
GrantMarker.bindPopup('Grant Park, Chicago, IL')

let MilkIcon = L.icon({
  iconUrl: 'icons/milk.png',
  iconSize: [30, 30],
  iconAnchor: [35, 35]
})

let MilkMarker = L.marker([35.467181, -97.473348], {icon:MilkIcon}).addTo(abbyswebmap)
MilkMarker.bindPopup('The Milk Bottle Grocery, Oklahoma City, OK')

let ShoeIcon = L.icon({
  iconUrl: 'icons/shoetree.png',
  iconSize: [30, 30],
  iconAnchor: [35, 35]
})

let ShoeMarker = L.marker([34.557822, -115.752356], {icon:ShoeIcon}).addTo(abbyswebmap)
ShoeMarker.bindPopup('Route 66 Shoe Tree, Amboy, CA')

let LousIcon = L.icon({
  iconUrl: 'icons/loumitch.png',
  iconSize: [30, 30],
  iconAnchor: [35, 35]
})

let LouMarker = L.marker([41.877638, -87.641541], {icon:LousIcon}).addTo(abbyswebmap)
LouMarker.bindPopup('Lou Mitchells Cafe, Chicago, IL')

let RoyIcon = L.icon({
  iconUrl: 'icons/roys.png',
  iconSize: [30, 30],
  iconAnchor: [35, 35]
})

let RoyMarker = L.marker([34.558592, -115.744483], {icon:RoyIcon}).addTo(abbyswebmap)
RoyMarker.bindPopup('Roys Motel and Cafe, Amboy, CA')

let SnowIcon = L.icon({
  iconUrl: 'icons/snowcap.png',
  iconSize: [30, 30],
  iconAnchor: [35, 35]
})

let SnowMarker = L.marker([35.327404, -112.879262], {icon:SnowIcon}).addTo(abbyswebmap)
SnowMarker.bindPopup('Snow Cap Dive-In, Seligman, AZ')

let WigwamIcon = L.icon({
  iconUrl: 'icons/wigwam.png',
  iconSize: [30, 30],
  iconAnchor: [35, 35]
})

let WigwamMarker = L.marker([34.902497, -110.168356], {icon:WigwamIcon}).addTo(abbyswebmap)
WigwamMarker.bindPopup('Wigwam Motels, Holbrook, AZ')

let JackIcon = L.icon({
  iconUrl: 'icons/jackrabtrading.png',
  iconSize: [30, 30],
  iconAnchor: [35, 35]
})

let JackMarker = L.marker([34.956747, -110.333598], {icon:JackIcon}).addTo(abbyswebmap)
JackMarker.bindPopup('Jack Rabbit Trading Post, Joseph City, AZ')

let TowIcon = L.icon({
  iconUrl: 'icons/towtater.png',
  iconSize: [30, 30],
  iconAnchor: [35, 35]
})

let TowMarker = L.marker([37.074881, -94.639854], {icon:TowIcon}).addTo(abbyswebmap)
TowMarker.bindPopup('Tow Tater, Galena, Kansas')

let GeminiIcon = L.icon({
  iconUrl: 'icons/geminigiant.png',
  iconSize: [30, 30],
  iconAnchor: [35, 35]
})

let GeminiMarker = L.marker([41.297773, -88.141494], {icon:GeminiIcon}).addTo(abbyswebmap)
GeminiMarker.bindPopup('The Gemini Giant, Wilmington, IL')

let SantaIcon = L.icon({
  iconUrl: 'icons/santamonicapier.png',
  iconSize: [40, 40],
  iconAnchor: [35, 35]
})

let SantaMarker = L.marker([34.008933, -118.49739], {icon:SantaIcon}).addTo(abbyswebmap)
SantaMarker.bindPopup('Santa Monica Pier, CA')
