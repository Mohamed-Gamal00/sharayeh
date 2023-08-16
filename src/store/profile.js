import { defineStore } from 'pinia'
import axios from 'axios'
export const profileStore = defineStore('profileStore', {
  state: () => ({
    Profile: [],
    MySims: []
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
          // console.log(res)
          this.Profile = res.data.user
        })
        .catch((err) => {
          console.log('profile', err)
        })
    },

    async getMySims() {
      let token = localStorage.getItem('token')
      await axios
        .get(`/my-sims`, {
          headers: {
            Authorization: 'Bearer ' + token,
            accept: 'Application/json'
          }
        })
        .then((res) => {
          console.log('single sim', res)
          this.MySims = res.data.data[0]
          console.log(this.MySims)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
})
