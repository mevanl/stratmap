export function loadPoliticalMapLayer(map) {
    Promise.all([
        fetch('/data/political.geojson').then(res => res.json()),
        fetch('/data/countries.json').then(res => res.json())
    ]).then(([geoData, countryMeta]) => {
        map.addSource('political', {
            type: 'geojson',
            data: geoData
        })

        // match for country.json colors
        const matchExpr = ['match', ['get', 'name']]
        for (const [country, data] of Object.entries(countryMeta)) {
            matchExpr.push(country, data.color)
        }
        // add the default color
        matchExpr.push('#000000')

        // add country colors
        map.addLayer({
            id: 'country-colors',
            type: 'fill',
            source: 'political',
            paint: {
                'fill-color': matchExpr,
                'fill-opacity': 1
            }
        })

        map.addLayer({
            id: 'country-borders',
            type: 'line',
            source: 'political',
            paint: {
                'line-color': '#000000',
                'line-width': 2
            }
        })

        // check for future me 
        // const countriesWithDefaultColor = geoData.features
        //     .map(f => f.properties.name)
        //     .filter(name => !countryMeta.hasOwnProperty(name))

        // console.log('Countries using default color:', countriesWithDefaultColor)

    })

}