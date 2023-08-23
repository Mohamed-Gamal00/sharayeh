<script setup>
import WhatsappCom from './components/whatsapp/WhatsappCom.vue'
import { watch, onMounted } from 'vue'
import { useRoute, RouterView } from 'vue-router'
// import NavBarCom from './components/layout/NavBarCom.vue'
// import FooterCom from './components/layout/FooterCom.vue'

const route = useRoute()
const scroll = () => {
  window.scrollTo(0, 0)
}

onMounted(() => {
  scroll() // Scroll to top when the component is initially mounted
})

watch(
  () => route.path,
  () => {
    scroll() // Scroll to top when the router path changes
  }
)
</script>

<template>
  <WhatsappCom />
  <RouterView :key="$route.fullPath" />
</template>

<style scoped></style>
