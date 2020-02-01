<template>
  <q-page class="flex flex-center">
    <q-toolbar>
        <q-tabs
        v-model="tab"
        no-caps
        class="bg-pink text-black shadow-2"
      >
        <q-tab name="mails" label="Mails" />
        <q-tab name="alarms" label="Alarms" />
        <q-tab name="movies" label="Movies" />
      </q-tabs>

        <q-toolbar-title>Nila</q-toolbar-title>
      </q-toolbar>
    <q-avatar>
      <img src="https://cdn.quasar.dev/img/avatar.png">
    </q-avatar>
  </q-page>
</template>
<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
