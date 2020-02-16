<template>
  <q-page-container>
      <q-page padding class="items-center justify-center">
          <div class="row absolute full-width">
              <div class="col-md-4 offset-md-4 col-xs-12 q-pb-lg q-pl-md q-pr-md q-pt-sm">
    <q-card flat class="my-card bg-white text-black">
        <q-input
        v-model="search"
        debounce="500"
        filled
        placeholder="Search"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </q-card>
  </div>

          </div>
      </q-page>
  </q-page-container>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
