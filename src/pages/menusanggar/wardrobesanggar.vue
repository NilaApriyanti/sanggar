<template>
  <q-page-container>
      <q-page>
          <div class="row full-width">
              <div class="col-xs-4">
                <q-card flat class="my-card q-pa-xs bg-white text-black">
                  <q-img
                    src="https://placeimg.com/500/300/nature"
                    :ratio="1"
                  />
                </q-card>
              </div>
              <div class="col-xs-4">
                <q-card flat class="my-card q-pa-xs bg-white text-black">
                  <q-img
                    src="https://placeimg.com/500/300/nature"
                    :ratio="1"
                  />
                </q-card>
              </div>
              <div class="col-xs-4">
                <q-card flat class="my-card q-pa-xs bg-white text-black">
                  <q-img
                    src="https://placeimg.com/500/300/nature"
                    :ratio="1"
                  />
                </q-card>
              </div>
          </div>
          <div class="row full-width">
              <div class="col-xs-4">
                <q-card flat class="my-card q-pa-xs bg-white text-black">
                  <q-img
                    src="https://placeimg.com/500/300/nature"
                    :ratio="1"
                  />
                </q-card>
              </div>
              <div class="col-xs-4">
                <q-card flat class="my-card q-pa-xs bg-white text-black">
                  <q-img
                    src="https://placeimg.com/500/300/nature"
                    :ratio="1"
                  />
                </q-card>
              </div>
              <div class="col-xs-4">
                <q-card flat class="my-card q-pa-xs bg-white text-black">
                  <q-img
                    src="https://placeimg.com/500/300/nature"
                    :ratio="1"
                  />
                </q-card>
              </div>
          </div>
          <q-page-sticky position="bottom-right" :offset="[18, 80]">
            <q-btn fab icon="add" color="secondary"
                to="/postingwardrobe" />
          </q-page-sticky>
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
