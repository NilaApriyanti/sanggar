<template>
  <q-page padding>
      <div class="row full-width">
          <div class="col-xs-12">
              <q-input
              v-model="keywords"
              debounce="500"
              filled
              v-on:keyup.enter="search()"
              placeholder="Masukan Nama Sanggar"
              class="q-mb-md q-mt-md"
            >
              <template v-slot:append>
                <q-icon v-if="keywords === ''" name="search" />
                <q-icon v-else class="cursor-pointer" name="clear" @click="clear()"/>
              </template>
            </q-input>
            <l-map v-if="loaded && !searched" :zoom="zoom" :center="center" style="height: 300px;">
              <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
              <l-marker :lat-lng="[data.alamat.lat, data.alamat.long]" v-for="(data, i) in listData" :key="i">
                <l-popup>{{ data.username }}</l-popup>
              </l-marker>
              <!-- <l-marker :lat-lng="[0,0]">
                <l-popup>sjdfjsdf</l-popup>
              </l-marker> -->
            </l-map>
            <q-list v-if="searched">
              <div v-if="result.length < 1">Nama Sanggar Tidak Ditemukan</div>
              <div v-for="(data, i) in result" :key="i + 787">
                <q-item>
                  <q-item-section>
                    <q-item-label>{{ data.username }}</q-item-label>
                    <q-item-label caption>{{ data.alamat.keterangan }}</q-item-label>
                  </q-item-section>

                  <q-item-section side>
                    <q-item-label caption>
                      <q-btn unelevated color="secondary" @click="goToProfile(data._id), data.username">Lihat Profile</q-btn>
                    </q-item-label>
                  </q-item-section>
                </q-item>
                <q-separator spaced inset />
              </div>
            </q-list>
        </div>
      </div>
  </q-page>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data () {
    return {
      keywords: '',
      markerLatLng: [],
      zoom: 11,
      center: L.latLng(0, 0),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      loaded: false,
      listData: null,
      result: null,
      searched: ''
    }
  },
  created () {
    this.getAllSanggar()
  },
  methods: {
    search () {
      try {
        this.$axios.get('user/search/' + this.keywords)
          .then(res => {
            if (res.data.sukses) {
              this.result = res.data.data
              this.searched = true
            } else {
              this.$show('Gagal Memuat Data', 'negative')
            }
          })
      } catch (error) {
        this.$show('Gagal Mencari Data', 'negative')
      }
    },
    getAllSanggar () {
      try {
        this.$axios.get('user/getall')
          .then(res => {
            if (res.data.sukses) {
              this.listData = res.data.data
              this.center = L.latLng(-5.3773982, 105.2311941)
              this.loaded = true
            } else {
              this.$show('Gagal Memuat Profile', 'negative')
            }
          })
      } catch (error) {
        this.$show('Gagal Memuat Profile', 'negative')
      }
    },
    clear () {
      this.keywords = ''
      this.searched = false
    },
    goToProfile (id, username) {
      this.$router.push({ name: 'profileGuest', params: { id: id, username: username } })
    }
  }
}
</script>
