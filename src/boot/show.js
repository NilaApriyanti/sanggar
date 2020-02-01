// import something here
import { Notify } from 'quasar'
let show = (message, color) => {
  Notify.create({
    message: message,
    color: color,
    timeout: 2000
  })
}

// "async" is optional
export default async ({ Vue }) => {
  // something to do
  Vue.prototype.$show = show
}

export { show }
