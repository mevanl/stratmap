import { initMap } from './map/mapManager.js'
import { loadPoliticalMapLayer } from './map/layers/political.js'

const map = initMap()

// wait for map to fully load before adding layers 
map.on('load', () => {
  loadPoliticalMapLayer(map)
})