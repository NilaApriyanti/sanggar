<template>
  <q-page padding class="q-mt-lg q-mb-lg">
    <link rel="stylesheet" href="https://unpkg.com/leaflet-geosearch@2.6.0/assets/css/leaflet.css">
    <div class="row full-width q-mb-md">
      <div class="col-xs-4">
        <q-avatar size="100px" font-size="52px">
          <q-img :src="$baseURL + gambarNow" ratio="1">
          </q-img>
        </q-avatar>
      </div>
      <div class="col-xs-8">
        <div class="text-h6">{{ namaSanggar }}</div>
        <div class="text-subtitle1"><q-icon name="fas f-map-marker-alt"></q-icon>{{ alamat }}</div>
        <div class="text-subtitle1"><q-icon name="fas fa-phone-alt"></q-icon> {{ noTelp }}</div>
      </div>
    </div>
    <div class="map"></div>
    <q-card style="flex:3">
      <l-map v-if="loaded" :zoom="zoom" :center="center" style="height: 300px;">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-marker :lat-lng="markerLatLng">
          <l-popup>Lokasi Kamu</l-popup>
        </l-marker>
      </l-map>
    </q-card>
    <div class="row full-width q-mt-md">
      <div class="col-xs-4" v-for="(data, i) in list" :key="i">
        <q-card flat class="my-card q-pa-xs bg-white text-black">
          <q-img
            @click="goToDetail(data._id)"
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
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
let search = false
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
      modalUpdate: false,
      list: null,
      search: search,
      markerLatLng: [],
      zoom: 15,
      center: null,
      image: null,
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      namaSanggar: '',
      alamat: '',
      noTelp: '',
      loaded: false,
      modalChangeimageProfile: false,
      preview: null,
      gambarNow: null
    }
  },
  created () {
    this.isMyProfile = this.$route.params.id
    this.getData()
    this.getProfile()
  },
  methods: {
    selectFile (event) {
      const preview = event
      const url = URL.createObjectURL(preview)

      this.preview = url
    },
    get (event) {
      this.markerLatLng = [event.latlng.lat, event.latlng.lng]
    },
    getProfile () {
      try {
        this.$axios.get('user/getprofile/' + this.$route.params.id)
          .then(res => {
            if (res.data.sukses) {
              let user = res.data.data
              this.namaSanggar = user.username
              this.alamat = user.alamat.keterangan
              this.gambarNow = user.gambar
              this.noTelp = user.notelp
              let lat = user.alamat.lat
              let long = user.alamat.long
              this.markerLatLng = [lat, long]
              this.center = L.latLng(lat, long)
              this.loaded = true
            } else {
              this.$show('Gagal Memuat Profile', 'negative')
            }
          })
      } catch (error) {
        this.$show('Gagal Memuat Profile', 'negative')
      }
    },
    getData () {
      try {
        let username = this.$route.params.username
        this.$axios('gambar/getdatabyuser/' + username)
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
    },
    goToDetail (id) {
      this.$router.push({ name: 'detailPostingGuest', params: { id: id } })
    },
    logout () {
      this.$q.localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style>
</style>
