<template>
  <q-page padding class="q-mt-lg q-mb-lg">
    <link rel="stylesheet" href="https://unpkg.com/leaflet-geosearch@2.6.0/assets/css/leaflet.css">
    <div class="row full-width q-mb-lg">
      <div class="col-xs-4">
        <q-avatar size="100px" font-size="52px">
          <q-img src="https://placeimg.com/500/300/nature" ratio="1"/>
        </q-avatar>
      </div>
      <div class="col-xs-8">
        <div class="text-h6">{{ namaSanggar }}</div>
        <div class="text-subtitle1"><q-icon name="fas fa-map-marker-alt"></q-icon>{{ alamat }}</div>
        <div class="text-subtitle1"><q-icon name="fas fa-phone-alt"></q-icon> {{ noTelp }}</div>
      </div>
    </div>
    <div class="map"></div>
    <q-card style="flex:3">
      <l-map :zoom="zoom"  @click="get" :center="center" style="height: 300px;">
        <v-geosearch :options="geosearchOptions"></v-geosearch>
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker v-if="!search" :lat-lng="markerLatLng">
          <l-popup>Lokasi Kamu</l-popup>
        </l-marker>
      </l-map>
      <q-btn>Pilih Dari Map</q-btn>
      <q-btn>Cari Lokasi</q-btn>
      <q-btn @click="send()">submit</q-btn>
    </q-card>
    <div class="row full-width q-mt-md">
      <div class="col-xs-4" v-for="(data, i) in list" :key="i">
        <q-card flat class="my-card q-pa-xs bg-white text-black">
          <q-img
            :src="$baseURL + data.gambar"
            :ratio="1"
          />
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import VGeosearch from 'vue2-leaflet-geosearch'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
let lat = -5.3753367, lng = 105.2440603
let lt = 0, lg = 0
let search = false
export default {
  name: 'Map',
  components: {
    LMap,
    LTileLayer,
    VGeosearch,
    LMarker,
    LPopup
  },
  data () {
    return {
      list: null,
      search: search,
      lt: lt,
      lg: lg,
      markerLatLng: [lat, lng],
      geosearchOptions: { // Important part Here
        provider: new OpenStreetMapProvider(),
        autocomplete: true,
        popupFormat: ({ query, result }) => {
          search = true
          lt = result.y
          lg = result.x
        },
        showMarker: true,
        showPopup: true,
        keepResult: true
      },
      zoom: 15,
      center: L.latLng(lat, lng),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      namaSanggar: '',
      alamat: '',
      noTelp: '',
      loaded: false
    }
  },
  created () {
    this.getData()
    this.getProfile()
  },
  methods: {
    get (event) {
      this.markerLatLng = [event.latlng.lat, event.latlng.lng]
    },
    send () {
      lt = 1
    },
    getProfile () {
      let dataSanggar = this.$q.localStorage.getItem('data')
      this.namaSanggar = dataSanggar.username
      this.alamat = dataSanggar.alamat.keterangan
      this.noTelp = dataSanggar.notelp
    },
    getData () {
      try {
        this.$axios('gambar/getdatabyuser/' + this.$q.localStorage.getItem('data').username)
          .then((res) => {
            if (res.data.sukses) {
              this.list = res.data.data
            } else {
              this.$show(res.data.msg, 'negative')
            }
          })
      } catch (error) {
        this.$show('Terjadi Kesalahan', 'negative')
      }
    }
  }
}
</script>
<style>
</style>
