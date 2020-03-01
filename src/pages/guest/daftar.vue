<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-btn
                flat
                dense
                to="/login"
                round
                >
                <q-icon name="arrow_back" />
                </q-btn>

                <q-toolbar-title>
                    Daftar
                </q-toolbar-title>
            </q-toolbar>
        </q-header>
        <q-page-container>
          <link rel="stylesheet" href="https://unpkg.com/leaflet-geosearch@2.6.0/assets/css/leaflet.css">
          <q-page padding class="items-center justify-center">
                <div class="row full-width">
                    <div class="col-md-4 col-xs-12 q-pb-lg q-pl-md q-pr-md q-pt-sm">
                      <q-card flat class="my-card bg-white text-black">
                        <q-card-section>
                          <div class="text-blue text-18">Nama Sanggar</div>
                          <q-input standout v-model="username"/>
                          <div class="text-blue text-18">Email</div>
                          <q-input standout v-model="email"/>
                          <div class="text-blue text-18">Password</div>
                          <q-input type="password" standout v-model="password"/>
                          <div class="text-blue text-18">Nomor Telepon</div>
                          <q-input class="q-mb-md" standout v-model="notelp" >
                            <template v-slot:append>
                            </template>
                          </q-input>
                          <div class="text-blue text-18">Alamat</div>
                          <q-input class="q-mb-md" standout v-model="alamat" >
                            <template v-slot:append>
                            </template>
                          </q-input>
                          <div class="text-blue text-18">Titik Lokasi</div>
                          <l-map v-if="loaded" :zoom="zoom"  @click="get" :center="center" style="height: 300px;">
                            <v-geosearch :options="geosearchOptions"></v-geosearch>
                            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                            <l-marker v-if="!search" :lat-lng="markerLatLng">
                              <l-popup>Lokasi Kamu</l-popup>
                            </l-marker>
                          </l-map>
                        </q-card-section>
                        <q-card-section>
                          <div class="row q-col-gutter-xs">
                            <div class="col-md-5 col-xs-12 col-sm-12">
                              <!-- <router-link style="text-decoration:none;color:teal;" to="/register">Lupa Password ?</router-link> -->
                            </div>
                            <div class="col-md-3 col-xs-12 col-sm-12">
                              <q-btn class="full-width" rounded :loading="loading" color="light-blue-7" @click="regist()" label="DAFTAR" />
                            </div>
                          </div>
                        </q-card-section>
                      </q-card>
                    </div>

                </div>
            </q-page>
        </q-page-container>

    </q-layout>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import VGeosearch from 'vue2-leaflet-geosearch'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
let lt = 0, lg = 0
let search = false
export default {
  components: {
    LMap,
    LTileLayer,
    VGeosearch,
    LMarker,
    LPopup
  },
  data () {
    return {
      loaded: false,
      username: '',
      email: '',
      password: '',
      alamat: '',
      notelp: '',
      loading: false,
      markerLatLng: [lt, lg],
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
      center: null,
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      list: null,
      search: search,
      lt: lt,
      lg: lg
    }
  },
  created () {
    navigator.geolocation.getCurrentPosition((data) => {
      lt = data.coords.latitude
      lg = data.coords.longitude
      this.center = L.latLng(lt, lg)
      this.markerLatLng = [lt, lg]
      this.loaded = true
    }, (err) => {
      // if (error) {
      this.$show(err.message, 'negative')
      // }
    }, { enableHighAccuracy: true, timeout: 60000, maximumAge: 10000 })
  },
  methods: {
    get (event) {
      this.markerLatLng = [event.latlng.lat, event.latlng.lng]
    },
    regist () {
      try {
        this.$axios
          .post('user/register', {
            username: this.username,
            email: this.email,
            password: this.password,
            alamat: {
              keterangan: this.alamat,
              lat: lt,
              long: lg
            },
            notelp: this.notelp
          })
          .then(res => {
            if (res.data.sukses) {
              this.$show(res.data.msg, 'positive')
              this.$router.push('/login')
            } else {
              this.$show(res.data.msg, 'negative')
            }
          })
          .catch(() => {
            this.$show('Error', 'negative')
          })
      } catch (error) {
        this.$show('Error', 'negative')
      }
    }
  }
}
</script>
