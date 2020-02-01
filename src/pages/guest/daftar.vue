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
          <q-page padding class="items-center justify-center">
                <div class="row absolute-center full-width">
                    <div class="col-md-4 offset-md-4 col-xs-12 q-pb-lg q-pl-md q-pr-md q-pt-sm">
          <q-card flat class="my-card bg-white text-black">
            <q-card-section>
              <div class="text-black text-15">DAFTAR AKUN SANGGAR</div>
            </q-card-section>
            <q-card-section>
                <div class="text-blue text-18">Nama Sanggar</div>
                <q-input standout v-model="username"/>
                <div class="text-blue text-18">Email</div>
                <q-input standout v-model="email"/>
                <div class="text-blue text-18">Password</div>
                <q-input standout v-model="password"/>
                <div class="text-blue text-18">Alamat</div>
                <q-input standout v-model="alamat"/>
                <div class="text-blue text-18">Nomor Telepon</div>
                <q-input standout v-model="notelp" >
                <template v-slot:append>
                </template>
              </q-input>
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
export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      alamat: '',
      notelp: '',
      loading: false
    }
  },
  methods: {
    regist () {
      try {
        this.$axios
          .post('user/register', {
            username: this.username,
            email: this.email,
            password: this.password,
            alamat: this.alamat,
            notelp: this.notelp
          })
          .then(res => {
            if (res.data.sukses) {
              this.$show(res.data.msg, 'positive')
            } else {
              this.$show(res.data.msg, 'negative')
            }
          })
          .catch((err) => {
            console.log(err)
          })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
