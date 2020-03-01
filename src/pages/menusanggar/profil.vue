<template>
  <q-page padding class="q-mt-lg q-mb-lg">
    <link rel="stylesheet" href="https://unpkg.com/leaflet-geosearch@2.6.0/assets/css/leaflet.css">
    <div class="row full-width q-mb-md">
      <div class="col-xs-4">
        <q-avatar size="100px" font-size="52px">
          <q-img :src="gambarNow === null || gambarNow === undefined ? 'https://placeimg.com/500/300/nature' : $baseURL + gambarNow" ratio="1">
            <div v-if="isMyProfile" class="absolute-bottom flex flex-center">
              <q-icon @click="modalChangeimageProfile = true" color="white" size="md" name="camera_alt"></q-icon>
            </div>
          </q-img>
        </q-avatar>
      </div>
      <div class="col-xs-8">
        <div class="text-h6">{{ namaSanggar }}</div>
        <div class="text-subtitle1"><q-icon name="fas f-map-marker-alt"></q-icon>{{ alamat }}</div>
        <div class="text-subtitle1"><q-icon name="fas fa-phone-alt"></q-icon> {{ noTelp }}</div>
      </div>
    </div>
    <div class="row q-gutter-md q-mb-md" v-if="isMyProfile">
      <div class="col">
        <q-btn unelevated color="primary" @click="modalUpdate = true" class="full-width q-mt-md">Edit Profile</q-btn>
      </div>
      <div class="col">
        <q-btn unelevated color="primary" @click="logout()" class="full-width q-mt-md">Logout</q-btn>
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
    <vs-prompt
      color="success"
      accept-text="Ubah"
      @accept="sendGambar()"
      title="Ubah Gambar Profile"
      :active.sync="modalChangeimageProfile">
      <div class="con-exemple-prompt">
        <q-file color="teal" ref="file" @input="selectFile" filled v-model="image" label="Label">
          <template v-slot:prepend>
            <q-icon name="cloud_upload" />
          </template>
        </q-file>

        <div class="row q-mt-md items-center justify-center fill-width">
          <q-avatar v-if="preview !== null" size="200px" font-size="52px">
            <q-img :src="preview"></q-img>
          </q-avatar>
        </div>

        <vs-alert color="success" class="q-mt-md" icon="new_releases" >
          Silahkan Ubah Gambar Profil Anda
        </vs-alert>
      </div>
    </vs-prompt>
    <vs-prompt
      color="success"
      accept-text="Ubah"
      @accept="updateProfile()"
      title="Ubah Profile"
      :active.sync="modalUpdate">
      <div class="con-exemple-prompt q-gutter-md">
        <q-input v-model="alamat" filled label="Alamat"></q-input>
        <q-input v-model="noTelp" filled label="No Telp"></q-input>
        <vs-alert color="success" class="q-mt-md" icon="new_releases" >
          Silahkan Ubah Profil Anda
        </vs-alert>
      </div>
    </vs-prompt>
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
      gambarNow: null,
      isMyProfile: false
    }
  },
  created () {
    this.isMyProfile = this.$route.params.id === this.$q.localStorage.getItem('data')._id
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
      let dataSanggar = this.$q.localStorage.getItem('data')
      if (this.$route.params.id === dataSanggar._id) {
        this.namaSanggar = dataSanggar.username
        this.alamat = dataSanggar.alamat.keterangan
        this.noTelp = dataSanggar.notelp
        this.gambarNow = dataSanggar.gambar
        let lat = dataSanggar.alamat.lat
        let long = dataSanggar.alamat.long
        this.markerLatLng = [lat, long]
        this.center = L.latLng(lat, long)
        this.loaded = true
      } else {
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
      }
    },
    getData () {
      try {
        let dataSanggar = this.$q.localStorage.getItem('data')
        let username
        if (this.$route.params.id === dataSanggar._id) {
          username = dataSanggar.username
        } else {
          username = this.$route.params.username
        }
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
      this.$router.push({ name: 'detailPosting', params: { id: id } })
    },
    logout () {
      this.$q.localStorage.clear()
      this.$router.push('/login')
    },
    sendGambar () {
      try {
        const formData = new FormData()
        formData.append('gambar', this.image)
        this.$axios.post('user/uploadprofile/' + this.$q.localStorage.getItem('data')._id, formData)
          .then(res => {
            if (res.data.sukses) {
              this.$q.localStorage.set('data', res.data.user)
              this.$show(res.data.msg, 'positive')
              this.getData()
              this.getProfile()
            } else {
              this.$show(res.data.msg, 'negative')
            }
          })
      } catch (error) {
        this.$show('Gagal Upload Profile', 'negative')
      }
    },
    updateProfile () {
      try {
        let dataSanggar = this.$q.localStorage.getItem('data')
        let lat = dataSanggar.alamat.lat
        let long = dataSanggar.alamat.long
        this.$axios.post('user/updateprofile/' + this.$q.localStorage.getItem('data')._id, {
          alamat: {
            keterangan: this.alamat,
            lat: lat,
            long: long
          },
          notelp: this.notelp
        })
          .then(res => {
            this.loaded = false
            if (res.data.sukses) {
              this.$q.localStorage.clear()
              this.$q.localStorage.set('data', res.data.data)
              this.$show(res.data.msg, 'positive')
              this.getData()
              this.getProfile()
            } else {
              this.$show(res.data.msg, 'negative')
            }
            this.loaded = true
          })
      } catch (error) {
        this.$show('Gagal Upload Profile', 'negative')
      }
    }
  }
}
</script>
<style>
</style>
