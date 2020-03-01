<template>
  <q-page-container>
      <q-page>
          <div class="row full-width">
              <div class="col-xs-4" v-for="(data, i) in list" :key="i">
                <q-card flat class="my-card q-pa-xs bg-white text-black">
                  <q-img
                    :src="$baseURL + data.gambar"
                    :ratio="1"
                    @click="goToDetail(data._id)"
                  />
                </q-card>
              </div>
          </div>
          <q-page-sticky position="bottom-right" :offset="[18, 80]">
            <q-btn fab icon="add" color="secondary"
                to="/postingdancer" />
          </q-page-sticky>
      </q-page>
  </q-page-container>
</template>

<script>
export default {
  data () {
    return {
      list: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      try {
        this.$axios('dancer/getbyuser/' + this.$q.localStorage.getItem('data').username)
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
      this.$router.push({ name: 'detaildancer', params: { id: id } })
    }
  }
}
</script>
