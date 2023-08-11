<template>
  <div>
    <ClientCom />
  </div>
</template>

<script>
import ClientCom from '../../components/profile/ProfileCom.vue'
export default {
  components: {
    ClientCom
  },
    async mounted() {
    let user = localStorage.getItem('token')
    if (!user) {
      this.$router.push({ name: 'home' })
      alert("قم بتسجيل الدخول")
    }
  }
}
</script>

<style lang="scss" scoped></style>
