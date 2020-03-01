import Vue from 'vue'
import Vuex from 'vuex'
import { Icon } from 'leaflet'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax, {
})
// import example from './module-example'

delete Icon.Default.prototype._getIconUrl

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})
Vue.use(Vuex)

Vue.prototype.$baseURL = 'http://172.32.1.5:5100/'
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
