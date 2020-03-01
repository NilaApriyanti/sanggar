import axios from 'axios'

const axiosinstance = axios.create({
  baseURL: 'http://172.32.1.5:5100'
})

export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosinstance
}

export { axiosinstance }
