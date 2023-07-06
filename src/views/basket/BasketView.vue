<template>
  <NavBarCom />
  <BasketCom />
  <FooterCom />
</template>

<script>
import NavBarCom from '../../components/layout/NavBarCom.vue'
import BasketCom from '../../components/basket/BasketCom.vue'
import FooterCom from '../../components/layout/FooterCom.vue'
export default {
  name: 'HomeCom',
  components: {
    NavBarCom,
    BasketCom,
    FooterCom
  }
}
</script>
