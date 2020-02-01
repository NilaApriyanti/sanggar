import axios from 'axios'

const axiosinstance = axios.create({
  baseURL: 'http://192.168.1.21:5100'
})

export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosinstance
}

export { axiosinstance }
