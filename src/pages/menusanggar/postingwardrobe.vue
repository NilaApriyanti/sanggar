<template>
    <q-page padding class="items-center justify-center">
                <div class="row absolute-center full-width">
                    <div class="col-md-4 offset-md-4 col-xs-12 q-pb-lg q-pl-md q-pr-md q-pt-sm">
          <q-card flat class="my-card bg-white text-black">
            <q-card-section>
              <div class="text-black text-15">Unggah</div>
            </q-card-section>
            <q-card-section>
                <q-uploader
                    url="http://localhost:4444/upload"
                        label="Upload File"
                        color="Secondary"
                        square
                        flat
                        bordered
                        style="max-width: 300px"
                    />
                <div class="text-blue text-18">Caption</div>
                <q-input standout v-model="caption">
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
                  <q-btn class="full-width" rounded :loading="loading" color="light-blue-7" @click="posting()" label="Post" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

                </div>
            </q-page>
</template>
