<template>
  <NavBarCom />
  <InfoCom />
  <FooterCom />
</template>

<script>
import NavBarCom from '../../components/layout/NavBarCom.vue'
import InfoCom from '../../components/sim/InfoCom.vue'
import FooterCom from '../../components/layout/FooterCom.vue'
export default {
  name: 'HomeCom',
  components: {
    NavBarCom,
    InfoCom,
    FooterCom
  }
}
</script>
