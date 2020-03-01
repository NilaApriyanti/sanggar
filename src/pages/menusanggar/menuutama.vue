<template>
    <q-page padding>
        <div class="row">
          <div v-for="(data, i) in list" :key="i" class="col-xs-12 q-pt-md">
            <vs-card actionable class="text-blue-grey-14">
            <div slot="header" class="row">
              <vs-avatar/>
              <h6 class="q-mt-xs">
                {{ data.username }}
              </h6>
            </div>
              <div slot="media">
                <img :src="$baseURL + data.gambar">
              </div>
              <div>
                <span>{{ data.caption }}</span>
              </div>
              <div slot="footer">
                <vs-row vs-justify="flex-start">
                  <vs-button @click="goToDetail(data._id)" type="gradient" class="q-mr-sm" color="danger" icon="info"></vs-button>
                  <vs-button @click="goToProfile(data.user._id, data.user.username)" color="primary" icon="person"></vs-button>
                </vs-row>
              </div>
            </vs-card>
          </div>
        </div>
        <q-page-sticky position="bottom-right" :offset="[18, 80]">
            <q-btn fab icon="add" color="secondary"
                to="/inputposting" />
          </q-page-sticky>
    </q-page>
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
        this.$axios('gambar/all')
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
    goToProfile (id, username) {
      this.$router.push({ name: 'goToProfile', params: { id: id, username: username } })
    }
  }
}
</script>
