import { Component, onMount } from 'solid-js';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import olms from 'ol-mapbox-style';

const App: Component = () => {
  const apiKey = import.meta.env.VITE_ARCGIS;
  const basemapId = 'ArcGIS:Topographic';
  const basemapURL = `https://basemaps-api.arcgis.com/arcgis/rest/services/styles/${basemapId}/?type=style&token=${apiKey}`;
  let m: HTMLDivElement | undefined;
  onMount(() => {
    console.log(import.meta.env);
    console.log(m);
    const map = new Map({
      target: m
    });
    map.setView(
      new View({
        center: fromLonLat([-118.805, 34.027]),
        zoom: 13 // scale: 72223.819286
      })
    );
    olms(map, basemapURL);
  });
  return <div style={{ width: '100vw', height: '100vh' }} ref={m} />;
};

export default App;
