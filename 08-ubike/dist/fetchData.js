var URL = 'https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json';
export default function fetchUBikeData(url) {
    if (url === void 0) { url = URL; }
    return fetch(url).then(function (result) { return result.json(); });
}
