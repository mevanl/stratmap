import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
  container: 'map',
  style: "/map_styles/base.json",
  center: [0, 0],
  zoom: 2
});
