import { initMap } from './map/mapManager.js'
import { loadPoliticalMapLayer } from './map/layers/political.js'

// default state
let bordersVisible = true


const map = initMap()

// wait for map to fully load before adding layers 
map.on('load', () => {
  loadPoliticalMapLayer(map)
})

document.getElementById('button_toggle_country_borders').addEventListener('click', () => {
  const visibility = bordersVisible ? 'none' : 'visible'
  map.setLayoutProperty('political-border-line', 'visibility', visibility)
  bordersVisible = !bordersVisible

  document.getElementById('button_toggle_country_borders').innerText =
    bordersVisible ? 'Hide Borders' : 'Show Borders'
})
