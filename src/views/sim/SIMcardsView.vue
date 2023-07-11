<template>
  <NavBarCom />
  <SIMCom />
  <FooterCom />
</template>

<script>
import NavBarCom from '../../components/layout/NavBarCom.vue'
import SIMCom from '../../components/sim/SIMcards.vue'
import FooterCom from '../../components/layout/FooterCom.vue'
export default {
  name: 'HomeCom',
  components: {
    NavBarCom,
    SIMCom,
    FooterCom
  }
}
</script>
