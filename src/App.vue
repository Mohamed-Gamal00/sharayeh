<script setup>
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
  <RouterView :key="$route.fullPath" />
</template>

<style scoped>
#layout {
  text-align: center;
  color: rgb(51, 73, 51);
}
nav {
  padding: 30px;
}

nav a.router-link-exact-active {
  color: green;
}

/* nav a.router-link-exact-active:hover {
  background-color: transparent;
} */

nav a {
  display: inline-block;
  /* padding: 0 0.5rem; */
  border-left: 1px solid var(--color-border);
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
