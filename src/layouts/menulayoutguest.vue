<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="light-blue-7" elevated>
      <q-toolbar>
        <q-toolbar-title class="white">
          Akun Guest
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container class="q-mb-xl">
      <router-view />
    </q-page-container>
    <br>
    <q-tabs
      v-model="tab"
      active-color="primary"
      no-caps
      dense
      shrink
      class="bg-white text-blue-grey-14 fixed-bottom visible mobile-only"
      >
      <q-route-tab to="/menuutamaguest" name="explore" icon="home"/>
      <q-route-tab to="/cariguest" name="cari" icon="fas fa-search"/>
      <q-route-tab to="/wardrobeguest" icon="fas fa-tshirt"/>
      <q-route-tab to="/dancerguest" name="dancer" icon="fas fa-users"/>
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
