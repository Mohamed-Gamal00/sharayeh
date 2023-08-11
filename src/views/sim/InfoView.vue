<template>
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
export default {
  name: 'HomeCom',
  components: {
    NavBarCom,
    InfoCom,
    FooterCom
  },
  computed: {
    ...mapState(simStore, ["singleSim"]),
  },
  methods: {
    ...mapActions(simStore, ["getSimById"]),
  },
  async mounted() {
    await this.getSimById(this.$route.params.simId);
  },
}


</script>
