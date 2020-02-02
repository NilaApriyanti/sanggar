<template>
  <q-page-container>
      <q-page padding>
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
  </q-page-container>
</template>

<script>
export default {
  data () {
    return {
      polygon: {
        latlngs: [[-5.3816465, 105.0450325], [-5.3829207, 105.0471148], [-5.3832334, 105.0452895], [-5.3766795, 105.0482254]],
        color: 'red',
        fill: true
      },
      markerLatLng: [-5.3816465, 105.0450325],
      zoom: 11,
      center: L.latLng(-5.3816465, 105.0450325),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  }
}
</script>
