const sekolahGroup = L.layerGroup();
const masjidGroup = L.layerGroup();
const pasarGroup = L.layerGroup();
const kantordesaGroup = L.layerGroup();

const iconSekolah = L.icon({
  iconUrl: "asset/leaflet/images/sekolah.png",
  iconSize: [50, 50], // size of the icon
  iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -26], // point from which the popup should open relative to the iconAnchor
});
const iconmasjid = L.icon({
  iconUrl: "asset/leaflet/images/masjid.png",
  iconSize: [50, 50], // size of the icon
  iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -26], // point from which the popup should open relative to the iconAnchor
});
const iconpasar = L.icon({
  iconUrl: "asset/leaflet/images/pasar.png",
  iconSize: [50, 50], // size of the icon
  iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -26], // point from which the popup should open relative to the iconAnchor
});
const iconkantordesa = L.icon({
  iconUrl: "asset/leaflet/images/kantordesa.png",
  iconSize: [50, 50], // size of the icon
  iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -26], // point from which the popup should open relative to the iconAnchor
});

var masjid = [
  L.marker([-8.720406186747141, 116.37052413858295], { icon: iconmasjid })
    .addTo(masjidGroup)
    .bindPopup(` <img src="asset/leaflet/images/masjidlangko.jpg">`),
  // Tambahkan Kornat jika lebih dari 1
];

var sekolah = [
  L.marker([-8.710541469589733, 116.36423396997247], { icon: iconSekolah })
    .addTo(sekolahGroup)
    .bindPopup(` <img src="asset/leaflet/images/sdteres.jpg">`),
  L.marker([-8.710731375608834, 116.36339337841666], { icon: iconSekolah })
    .addTo(sekolahGroup)
    .bindPopup(` <img src="asset/leaflet/images/smp3janapria.jpg">`),
  // Tambahkan Kornat jika lebih dari 1
];

var pasar = [
  L.marker([-8.730784201063496, 116.37599355739269], { icon: iconpasar })
    .addTo(pasarGroup)
    .bindPopup(` <img src="asset/leaflet/images/pasar.jpg">`),
  // Tambahkan Kornat jika lebih dari 1
];

var kantordesa = [
  L.marker([-8.720531076571936, 116.37130031966797], { icon: iconkantordesa })
    .addTo(kantordesaGroup)
    .bindPopup(` <img src="asset/leaflet/images/kantordesa.jpg">`),
  // Tambahkan Kornat jika lebih dari 1
];

var layer1 = L.tileLayer(
  "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
  {
    maxZoom: 20,
    attribution:
      '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
);

var layer2 = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

const map = L.map("map", {
  center: [-8.805767160537458, 116.4695320549471],
  zoom: 13,
  layers: [layer2, sekolahGroup, masjidGroup, pasarGroup, kantordesaGroup],
});
var layer3 = L.tileLayer(
  "https://data.geopf.fr/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE={style}&TILEMATRIXSET=PM&FORMAT={format}&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",
  {
    attribution:
      '<a target="_blank" href="https://www.geoportail.gouv.fr/">Geoportail France</a>',
    bounds: [
      [-75, -180],
      [81, 180],
    ],
    minZoom: 2,
    maxZoom: 19,
    format: "image/jpeg",
    style: "normal",
  }
);

const baseLayers = {
  "Layer 1": layer1,
  "Layer 2": layer2,
  "Layer 3": layer3,
};

const overlays = {
  Sekolah: sekolahGroup,
  Masjid: masjidGroup,
  pasar: pasarGroup,
  kantordesa: kantordesaGroup,
};

const layerControl = L.control.layers(baseLayers, overlays).addTo(map);

//  Menampilkan geojSON
L.geoJSON(gis).addTo(map);
