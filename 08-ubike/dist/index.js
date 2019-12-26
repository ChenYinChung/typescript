/**
 * 1.npm init -y
 * 2.tsc --init
 * 3.npm install webpack webpack-cli --save-dev
 * 4.npm install typescript ts-loader --save-dev
 *
 * 5.mkdir src
 * 6.mkdir dist
 * 7.touch ./src/index.ts
 *
 * 8. tsConfig.json
 *   "target":"es5"
 *   "module":"es6"
 *   "outDir":"./dist/"
 *   "rootDir":"./src/"
 *   "strict":"true"
 *   "noImplictAny":true
 *   "strictNullChecks":true
 *
 * 8. touch webpack.config.js
 * 9. npm install lite-server concurrently --save-dev
 * 10. touch index.html
 *
 * 11. npm install leaflet @types/leaflet
 */
console.log('Hello World');
//第一個版
// import L ,{LatLngExpression}from 'leaflet'
// //台北市座標
//  const taipeiCoord:LatLngExpression =[25.0330,121.5654];
// //地圖預設縮放等級
//  const zoom = 13;
// // 建立Leaflet 地圖個體 ， 'map' 代表選擇id為map的html element
// const map=L.map('map');
// //設定地圖要聚焦座標及縮放等級
// map.setView(taipeiCoord,zoom);
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
//共用抽離
// import L from 'leaflet'
// import mapConfig from './map.config';
import fetchData from './fetchData';
fetchData().then(function (data) {
    console.log(data);
});
// const {
//     coordinate,
//     zoomLevel,
//     tileLayerURL,
//     containerID
// } = mapConfig;
// // 建立Leaflet 地圖個體 ， 'map' 代表選擇id為map的html element
// const map=L.map(containerID);
// //設定地圖要聚焦座標及縮放等級
// map.setView(coordinate,zoomLevel);
// L.tileLayer(tileLayerURL).addTo(map)
