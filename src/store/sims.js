import { defineStore } from 'pinia'
import axios from 'axios'
export const simStore = defineStore('simsStore', {
  state: () => ({
    HomeSims: [],
    AllRecentlyAdd: [],
    singleSim: {},
    month: [],
    threeMonths: [],
    sixmonths: [],
    year: []
  }),
  actions: {
    async getHomeSims() {
      let token = localStorage.getItem('token')
      await axios
        .get('/recently-added', {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((res) => {
          // console.log(res)
          this.HomeSims = res.data.data.slice(0, 4)
          // console.log('homesims', this.HomeSims)
        })
        .catch((err) => {
          console.log("getHomeSims",err)
        })
    },
    async getRecentlyAdd() {
      let token = localStorage.getItem('token')
      await axios
        .get('/recently-added', {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((res) => {
          console.log(res)
          this.AllRecentlyAdd = res.data.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async getAllSims() {
      let token = localStorage.getItem('token')

      await axios
        .get('/home', {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((res) => {
          console.log(res)
          this.month = res.data.data.sims.filter((el) => el.period === 'month')
          // console.log('month', this.month)
          this.threeMonths = res.data.data.sims.filter((el) => el.period === '3months')
          // console.log('threemonths', this.threeMonths)
          this.sixmonths = res.data.data.sims.filter((el) => el.period === '6months')
          // console.log('sixmonths', this.sixmonths)
          this.year = res.data.data.sims.filter((el) => el.period === 'year')
          // console.log('year', this.year)
        })
        .catch((err) => {
          console.log(err)
          // alert('قم بتسجيل الدخول اولا', err.response.data.message)
        })
    },
    async getSimById(simId) {
      let token = localStorage.getItem('token')
      await axios
        .get(`/get-sim?sim_id=${simId}`, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        .then((res) => {
          console.log('single sim', res)
          this.singleSim = res.data.data
        })
        .catch((err) => {
          console.log(err)
          // alert('قم بتسجيل الدخول اولا', err.response.data.message)
        })
    }
  }
})
