<template>
  <q-page padding class="text-blue-grey-14">
    <banner msg="Posting Gambar" class="q-mt-md"></banner>
    <div class="row full-width">
      <div class="col-xs-12">
        <q-card flat class="my-card bg-white text-black">
          <q-card-section>
            <q-file color="teal" filled v-model="gambar" label="Upload Gambar">
              <template v-slot:prepend>
                <q-icon name="cloud_upload" />
              </template>
            </q-file>
            <q-input label="Caption" class="q-mt-md q-mb-md" filled type="text" v-model="caption">
              <template v-slot:append>
              </template>
            </q-input>
            <vs-button block class="full-width" @click="upload()" color="primary">
              <i class='bx bxs-paint-roll' ></i> Upload
            </vs-button>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import banner from '../../components/banner'
export default {
  components: {
    banner
  },
  data () {
    return {
      gambar: null,
      caption: null
    }
  },
  methods: {
    upload () {
      const formData = new FormData()
      formData.append('gambar', this.gambar)
      formData.append('caption', this.caption)
      formData.append('username', this.$q.localStorage.getItem('data').username)

      try {
        this.$axios.post('dancer/upload', formData)
          .then(res => {
            if (res.data.sukses) {
              this.$show(res.data.msg, 'positive')
              this.$router.push({ name: 'dancers' })
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
<style lang="stylus" scoped>
  .left {
    background-color: #DC143C;
    width: 5px;
    height: 100%;
  }
  .red {
    background-color: rgb(15, 238, 171);
  }
</style>
