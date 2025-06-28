// mapManager.js controls the map

import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import mapStyle from './config/mapStyle.json'; // this is the base map style

let map; 

// initMap returns the base map, containerID is 
// the div it will look for
export function initMap(containerId = 'map'){
    return map = new maplibregl.Map({
        container: containerId,
        style: mapStyle,
        center: [0, 0],
        zoom: 2
    })
}