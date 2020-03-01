<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="light-blue-7" elevated>
      <q-toolbar>
        <q-toolbar-title class="white">
          Akun Sanggar
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <br>
    <q-tabs
      v-model="tab"
      active-color="primary"
      no-caps
      shrink
      class="bg-white text-blue-grey-14 fixed-bottom visible mobile-only"
      >
      <q-route-tab :to="{ name: 'menuutama' }" dense name="explore" icon="home"/>
      <q-route-tab to="/carisanggar" dense name="cari" icon="fas fa-search">
      </q-route-tab>
      <q-route-tab to="/wardrobesanggar" dense icon="fas fa-tshirt" label=""/>
      <q-route-tab to="/dancers" dense name="dancer" icon="fas fa-users"/>
      <q-route-tab :to="'/profil/' + id + '/' + username" dense name="profil" icon="far fa-user"/>
    </q-tabs>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      tab: 'explore',
      id: this.$q.localStorage.getItem('data')._id,
      username: this.$q.localStorage.getItem('data').username,
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
