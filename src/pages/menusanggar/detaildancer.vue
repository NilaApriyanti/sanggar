<template>
  <q-page padding class="text-blue-grey-14">
    <div class="row">
      <div class="col-xs-12 q-pt-sm">
        <vs-card actionable class="text-blue-grey-14">
          <div slot="media">
            <img :src="$baseURL + data.gambar">
          </div>
          <div>
            <span>{{ data.caption }}</span>
          </div>
        </vs-card>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      data: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      try {
        this.$axios.get('dancer/getdetail/' + this.$route.params.id)
          .then(res => {
            if (!res.data.sukses) {
              this.$show(res.data.msg, 'negative')
            } else {
              this.data = res.data.data
            }
          })
      } catch (error) {
        this.$show('Terjadi Error', 'negative')
      }
    }
  }
}
</script>
