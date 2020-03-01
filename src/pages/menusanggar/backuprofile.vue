<template>
  <q-page padding class="q-mt-lg q-mb-lg">
    <div class="row full-width q-mb-lg">
      <div class="col-xs-4">
        <q-avatar size="100px" font-size="52px">
          <q-img src="https://placeimg.com/500/300/nature" ratio="1"/>
        </q-avatar>
      </div>
      <div class="col-xs-8">
        <div class="text-h6">Nila Apriyanti</div>
        <div class="text-subtitle1"><q-icon name="fas fa-map-marker-alt"></q-icon> Jalan Apa Aja</div>
        <div class="text-subtitle1"><q-icon name="fas fa-phone-alt"></q-icon> 0823234234</div>
      </div>
    </div>
    <div class="map"></div>
    <q-card style="flex:3">
      <l-map :zoom="zoom" @click="get" :center="center" style="height: 200px;">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="markerLatLng">
          <l-popup>Lokasi Kamu</l-popup>
        </l-marker>
      </l-map>
    </q-card>
    <div class="row full-width q-mt-md">
              <div class="col-xs-4">
                <q-card flat class="my-card q-pa-xs bg-white text-black">
                  <q-img
                    src="https://placeimg.com/500/300/nature"
                    :ratio="1"
                  />
                </q-card>
              </div>
              <div class="col-xs-4">
                <q-card flat class="my-card q-pa-xs bg-white text-black">
                  <q-img
                    src="https://placeimg.com/500/300/nature"
                    :ratio="1"
                  />
                </q-card>
              </div>
              <div class="col-xs-4">
                <q-card flat class="my-card q-pa-xs bg-white text-black">
                  <q-img
                    src="https://placeimg.com/500/300/nature"
                    :ratio="1"
                  />
                </q-card>
              </div>
          </div>
          <div class="row full-width">
              <div class="col-xs-4">
                <q-card flat class="my-card q-pa-xs bg-white text-black">
                  <q-img
                    src="https://placeimg.com/500/300/nature"
                    :ratio="1"
                  />
                </q-card>
              </div>
              <div class="col-xs-4">
                <q-card flat class="my-card q-pa-xs bg-white text-black">
                  <q-img
                    src="https://placeimg.com/500/300/nature"
                    :ratio="1"
                  />
                </q-card>
              </div>
              <div class="col-xs-4">
                <q-card flat class="my-card q-pa-xs bg-white text-black">
                  <q-img
                    src="https://placeimg.com/500/300/nature"
                    :ratio="1"
                  />
                </q-card>
              </div>
          </div>
  </q-page>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
let lat = -5.3753367, lng = 105.2440603
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch'
const provider = new OpenStreetMapProvider()

const searchControl = new GeoSearchControl({
  provider: provider
})

const map = new L.Map('map')
map.addControl(searchControl)
export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data () {
    return {
      markerLatLng: [lat, lng],
      zoom: 15,
      center: L.latLng(lat, lng),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  },
  methods: {
    get (event) {
      console.log(event)
      this.markerLatLng = [event.latlng.lat, event.latlng.lng]
    }
  }
}
</script>
<style>
</style>
