let abbyswebmap = L.map('ejmap').setView([46.6891361,	-86.959701], 4)

let basemap1 = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}').addTo(abbyswebmap)
  let basemap2 = L.tileLayer('https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey={apikey}')
  let basemap3 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}')

  let controlOptions = {
  'Watercolor': basemap1,
  'Basic': basemap2,
  'Blue': basemap3
  }

  L.control.layers(controlOptions).addTo(abbyswebmap)

var square = L.square([46.6891361,	-86.959701], {
    color: 'black',
    fillOpacity: 0,

}).addTo(abbyswebmap);
square.bindPopup('This area encompasses all of the currently set locations of the tour.')

function IconStyle(feature, latlng) {
  switch (feature.properties["Location"]) {
    case "Allentown, PA":
      var BurgerSmithIcon = new L.icon({
        iconUrl: 'logos/BurgerSmith.png',
        iconSize: [70, 70],
        iconAnchor: [35, 35]
      });
      return L.marker(latlng, {icon: BurgerSmithIcon});
    case "Raising Cane's Chicken Fingers":
      var CanesIcon = new L.icon({
        iconUrl: 'logos/Canes.png',
        iconSize: [90, 43.2],
        iconAnchor: [45, 21.6]
      });
      return L.marker(latlng, {icon: CanesIcon});
    case "Chipotle":
      var ChipotleIcon = new L.icon({
        iconUrl: 'logos/Chipotle.png',
        iconSize: [70, 70],
        iconAnchor: [35, 35]
      });
      return L.marker(latlng, {icon: ChipotleIcon});
    case "City Pork":
      var CityPorkIcon = new L.icon({
        iconUrl: 'logos/CityPork.png',
        iconSize: [70, 70],
        iconAnchor: [35, 35]
      });
      return L.marker(latlng, {icon: CityPorkIcon});
    case "Fat Cow":
      var FatCowIcon = new L.icon({
        iconUrl: 'logos/FatCow.png',
        iconSize: [90, 64.2],
        iconAnchor: [45, 32.1]
      });
      return L.marker(latlng, {icon: FatCowIcon});
    case "Five Guys":
      var FiveGuysIcon = new L.icon({
        iconUrl: 'logos/Five-Guys.png',
        iconSize: [77.5, 43.6],
        iconAnchor: [38.75, 21.8]
      });
      return L.marker(latlng, {icon: FiveGuysIcon});
    case "Fuzzy's Taco Shop":
      var FuzzysIcon = new L.icon({
        iconUrl: 'logos/Fuzzys.jpg',
        iconSize: [70, 70],
        iconAnchor: [35, 35]
      });
      return L.marker(latlng, {icon: FuzzysIcon});
    case "Izzo's Illegal Burrito":
      var IzzosIcon = new L.icon({
        iconUrl: 'logos/Izzos.png',
        iconSize: [90, 60],
        iconAnchor: [45, 30]
      });
      return L.marker(latlng, {icon: IzzosIcon});
    case "Jimmy John's":
      var JJIcon = new L.icon({
        iconUrl: 'logos/JimmyJohns.png',
        iconSize: [70, 70],
        iconAnchor: [35, 35]
      });
      return L.marker(latlng, {icon: JJIcon});
    case "Lit Pizza":
      var LitIcon = new L.icon({
        iconUrl: 'logos/LitPizza.png',
        iconSize: [70, 70],
        iconAnchor: [35, 35]
      });
      return L.marker(latlng, {icon: LitIcon});
    case "Louie's Cafe":
      var LouiesIcon = new L.icon({
        iconUrl: 'logos/Louies.png',
        iconSize: [70, 70],
        iconAnchor: [35, 35]
      });
      return L.marker(latlng, {icon: LouiesIcon});
    case "Mellow Mushroom":
      var MellowIcon = new L.icon({
        iconUrl: 'logos/MellowMushroom.png',
        iconSize: [90, 54],
        iconAnchor: [45, 27]
      });
      return L.marker(latlng, {icon: MellowIcon});
    case "Pita Pit":
      var PPIcon = new L.icon({
        iconUrl: 'logos/PitaPit.png',
        iconSize: [90, 78],
        iconAnchor: [45, 39]
      });
      return L.marker(latlng, {icon: PPIcon});
    case "Plucker's Wing Bar":
      var PluckersIcon = new L.icon({
        iconUrl: 'logos/Pluckers.png',
        iconSize: [90, 50],
        iconAnchor: [45, 25]
      });
      return L.marker(latlng, {icon: PluckersIcon});
    case "Salad Shop":
      var SaladIcon = new L.icon({
        iconUrl: 'logos/SaladShop.png',
        iconSize: [70, 70],
        iconAnchor: [35, 35]
      });
      return L.marker(latlng, {icon: SaladIcon});
  }
}

function mygeojsonPopup (feature, layer) {
  let name = feature.properties["Name"]
  let type = feature.properties["Type"]
  let offers = feature.properties["Special_Offers"]
  let popup = 'Name: ' + name + '<br>Type: ' + type + '<br>Special Offers: ' + offers
  if (offers === "None") {popup = 'Name: ' + name + '<br>Type: ' + type}
  layer.bindPopup(popup)
}

let myLayerOptions = {
  pointToLayer: IconStyle,
  onEachFeature: mygeojsonPopup
  }

L.geoJSON(restaurantdata, myLayerOptions).addTo(mywebmap)
