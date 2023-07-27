<template>
  <div>
    <NavBarCom />
    <ContactCom />
    <FooterCom />
  </div>
</template>

<script>
import NavBarCom from '../../components/layout/NavBarCom.vue'
import ContactCom from '../../components/contact/ContactCom.vue'
import FooterCom from '../../components/layout/FooterCom.vue'
export default {
  name: 'ContactView',
  components: { NavBarCom, ContactCom, FooterCom }
}
</script>

<style lang="scss" scoped></style>
