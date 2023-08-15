<template>
  <div v-if="loading">
    <InfoCartLoadingVue />
  </div>
  <NavBarCom />
  <InfoCom :SingleSim="singleSim" />
  <FooterCom />
</template>

<script>
import NavBarCom from '../../components/layout/NavBarCom.vue'
import InfoCom from '../../components/sim/InfoCom.vue'
import FooterCom from '../../components/layout/FooterCom.vue'
import { simStore } from '../../store/sims'
import { mapActions, mapState } from 'pinia'
import InfoCartLoadingVue from '../../components/pageloader/InfoCartLoading.vue'
export default {
  name: 'HomeCom',
  components: {
    InfoCartLoadingVue,
    NavBarCom,
    InfoCom,
    FooterCom
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState(simStore, ['singleSim'])
  },
  methods: {
    ...mapActions(simStore, ['getSimById'])
  },
  async mounted() {
    this.loading = true
    await this.getSimById(this.$route.params.simId)
    this.loading = false
  }
}
</script>
