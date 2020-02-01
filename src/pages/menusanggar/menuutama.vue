<template>
    <q-page padding>
        <div class="row q-col-gutter-md">
          <div v-for="(data, i) in list" :key="i" class="q-mt-md">
            <q-card>
              <q-card-section class="text-grey-10 row q-gutter-md">
                <q-icon name="fas fa-user" style="font-size: 1.5rem;"/>
                <div class="text-h6">{{ data.nama }}</div>
              </q-card-section>
              <img src="https://cdn.quasar.dev/img/mountains.jpg">

              <q-card-actions align="around">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="message" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
        <q-page-sticky position="bottom-right" :offset="[18, 80]">
            <q-btn fab icon="add" color="secondary" />
          </q-page-sticky>
    </q-page>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          nama: 'Nila'
        },
        {
          nama: 'fdfs'
        },
        {
          nama: 'fdsd'
        },
        {
          nama: 'trert'
        }
      ]
    }
  }
}
</script>
