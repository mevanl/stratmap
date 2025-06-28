export function loadPoliticalMapLayer(map) {
    fetch('/data/political.geojson')
    .then(res => res.json())
    .then(data => {
        map.addSource('political', {
            type: 'geojson',
            data
        })
    
        map.addLayer({
            id: 'political-border-line',
            type: 'line',
            source: 'political',
            paint: {
                'line-color': '#000000',
                'line-width': 1
            }
        })
    })
}