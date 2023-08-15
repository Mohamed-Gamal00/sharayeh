import { defineStore } from 'pinia'
import axios from 'axios'
export const profileStore = defineStore('profileStore', {
  state: () => ({
    Profile: []
  }),
  actions: {
    async getProfile() {
      let token = localStorage.getItem('token')
      await axios
        .get('/profile', {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((res) => {
          console.log(res)
          this.Profile = res.data.user
        })
        .catch((err) => {
          console.log('profile', err)
        })
    }
  }
})
