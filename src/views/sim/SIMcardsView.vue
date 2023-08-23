<template>
  <div v-if="loading">
    <PageLoder />
  </div>
  <NavBarCom class="mb-5" />
  <div
    class="container-fluid mt-4"
    style="
      background-image: linear-gradient(
        to right,
        rgba(255, 157, 10, 1),
        rgba(46, 155, 232, 0.726),
        rgba(46, 154, 232, 1)
      );
    "
  >
    <div class="row text-white d-flex justify-content-center text-center my-lg-3 py-4 py-lg-5">
      <strong>
        <h2 class="fw-900" style="font-size: 30px">الشرائح</h2>
      </strong>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center my-4">
      <div class="text-end">
        <button class="btn">
          <img width="125" height="84" src="../../assets/images/Mobily.png" alt="mobily" /></button
        >&nbsp;&nbsp;&nbsp;
        <button class="btn">
          <img width="125" height="40" src="../../assets/images/zain.png" alt="zain" />
        </button>
        &nbsp;&nbsp;&nbsp;
        <button class="btn">
          <img
            width="125"
            height="40"
            src="data:image/png;base64,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"
            alt="zain"
          />
        </button>
      </div>
    </div>
  </div>
  <SIMCom :sims="month" title="شهر" />
  <SIMCom :sims="threeMonths" title="3 شهور" />
  <SIMCom :sims="sixmonths" title="6 شهور" />
  <SIMCom :sims="year" v-if="year.length > 0" :title="year[0].period ? 'سنة' : ''" />
  <FooterCom />
</template>

<script>
import PageLoder from '../../components/pageloader/PageLoder.vue'
import NavBarCom from '../../components/layout/NavBarCom.vue'
import SIMCom from '../../components/sim/SIMcards.vue'
import FooterCom from '../../components/layout/FooterCom.vue'
import { simStore } from '../../store/sims'
import { mapActions, mapState } from 'pinia'
export default {
  name: 'HomeCom',
  components: {
    NavBarCom,
    SIMCom,
    FooterCom,
    PageLoder
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState(simStore, ['sixmonths', 'threeMonths', 'year', 'month'])
  },
  methods: {
    ...mapActions(simStore, ['getAllSims'])
  },
  async mounted() {
    this.loading = true
    let user = localStorage.getItem('token')
    if (!user) {
      this.$router.push({ name: 'home' })
      alert('قم بتسجيل الدخول')
    }
    await this.getAllSims()
    this.loading = false
  }
}
</script>

<style scoped>
* {
  /* direction: rtl; */
}
</style>
