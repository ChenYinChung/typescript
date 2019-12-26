let URL = 'https://tcgbusfs.blob.core.windows.net/blobyoubike/YouBikeTP.json';

export default function fetchUBikeData(url = URL) {
    return fetch(url).then(result => result.json())
}