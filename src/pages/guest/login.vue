<template>
    <q-layout view="lHh Lpr lFf">
        <q-page-container>
            <q-page padding class="items-center justify-center">
                <div class="row absolute-center full-width">
                    <div class="col-md-4 offset-md-4 col-xs-12 q-pb-lg q-pl-md q-pr-md q-pt-sm">
          <q-card class="my-card bg-white text-black">
            <q-card-section class="text-center">
              <img src="statics/nila.png" style="height: 100px;max-width: 150px;"/>
            </q-card-section>
            <q-card-section>
              <div class="text-black text-center text-h4">LETS DANCE</div>
            </q-card-section>
            <q-card-section>
              <q-input rounded outlined v-model="username" label="Username">
                <template v-slot:append>
                  <q-icon name="fas fa-user" />
                </template>
              </q-input>
              <q-input rounded outlined v-on:keyup.enter="login()" type="password" class="q-pt-lg" v-model="password" label="Password">
                <template v-slot:append>
                  <q-icon name="lock" />
                </template>
              </q-input>
            </q-card-section>
            <q-card-section>
              <div class="row q-col-gutter-xs">
                <div class="col-md-5 col-xs-12 col-sm-12">
                  <!-- <router-link style="text-decoration:none;color:teal;" to="/register">Lupa Password ?</router-link> -->
                </div>
                <div class="col-md-4 col-xs-12 col-sm-12">
                  <q-btn class="full-width" rounded :loading="loading" @click="login()" color="light-blue-7" label="Login" />
                </div>
                <div class="col-md-3 col-xs-12 col-sm-12">
                  <q-btn class="full-width" rounded :loading="loading" to="/menuutamaguest" color="light-blue-7" label="Masuk Sebagai Guest" />
                </div>
                <div class="col-md-3 col-xs-12 col-sm-12">
                  <q-btn class="full-width" no-caps flat :loading="loading" to="/daftar" label="Tdak Punya Akun? Daftar Disini" />
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
      password: '',
      loading: false
    }
  },
  methods: {
    login () {
      try {
        this.$axios
          .post('user/login', {
            username: this.username,
            password: this.password
          })
          .then(res => {
            if (res.data.sukses) {
              this.$q.localStorage.set('data', res.data.user)
              this.$router.push({ name: 'menuutama' })
              // this.$show(res.data.msg, 'positive')
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
