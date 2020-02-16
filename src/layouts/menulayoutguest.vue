<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white" elevated>
      <q-toolbar>
        <q-toolbar-title class="text-grey-10">
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
      <q-route-tab to="/menuutamaguest" name="explore" icon="home" label="Home"/>
      <q-route-tab to="/cariguest" name="cari" icon="fas fa-search" label="Search">
      </q-route-tab>
      <q-route-tab to="/wardrobeguest" icon="fas fa-tshirt" label="Wardrobe"/>
      <q-route-tab to="/dancerguest" name="dancer" icon="fas fa-users" label="Dancer"/>
    </q-tabs>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
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
