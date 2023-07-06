<template>
  <NavBarCom />
  <ChipsetCom />
  <FooterCom />
</template>

<script>
import NavBarCom from '../../components/layout/NavBarCom.vue'
import ChipsetCom from '../../components/chipset/ChipsetCom.vue'
import FooterCom from '../../components/layout/FooterCom.vue'
export default {
  name: 'HomeCom',
  components: {
    NavBarCom,
    ChipsetCom,
    FooterCom
  }
}
</script>
