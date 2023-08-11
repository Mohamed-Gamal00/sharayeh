<template>
  <div class="style">
    <nav
      class="navbar navbar-expand-lg navbar-light p-0 mb-lg-4"
      style="position: relative; top: 20px"
    >
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'home' }">
          <img loading="lazy" src="@/assets/images/logo.png" width="50" height="50" alt="img" />
        </router-link>
        <span
          style="background-color: #a7976800; color: white"
          class="navbar-toggler p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- <span class="p-2"><FontAwesome icon="caret-down" /></span> -->
          <span class="navbar-toggler-icon"></span>
        </span>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav nav mx-auto mb-2 mb-lg-0 p-0">
            <router-link class="m-2 ms-lg-4 me-lg-4" :to="{ name: 'home' }" exact
              ><span class="fw-bold">الرئيسة</span></router-link
            >

            <router-link class="m-2 ms-lg-4 me-lg-4" :to="{ name: 'basket' }"
              ><span class="fw-bold">السلة</span></router-link
            >

            <router-link class="m-2 ms-lg-4 me-lg-4" :to="{ name: 'sim' }"
              ><span class="fw-bold">الشرائح</span></router-link
            >
            <router-link class="m-2 ms-lg-4 me-lg-4" :to="{ name: 'profile' }"
              ><span class="fw-bold">خاصة بي</span></router-link
            >

            <router-link class="m-2 ms-lg-4 me-lg-4" :to="{ name: 'contact' }"
              ><span class="fw-bold">تواصل معنا</span></router-link
            >
          </div>

          <!-- <LoginComVue /> -->
          <button
            v-if="!user"
            @click="this.$router.push({ name: 'login' })"
            type="button"
            style="background-color: #ffbe03; width: 160px; height: 50px; border-radius: 12px"
            class="btn fw-bold mb-4 border-0 text-dark"
          >
            تسجيل الدخول
          </button>
          <button
            v-if="user"
            @click="Logout()"
            type="button"
            style="background-color: #ffbe03; width: 160px; height: 50px; border-radius: 12px"
            class="btn fw-bold mb-4 border-0 text-dark"
          >
            تسجيل الخروج
          </button>
          <!-- <button
              style="background-color: #ffbe03; width: 160px; height: 50px; border-radius: 12px"
              class="btn fw-bold mb-4 text-dark shadow"
            >
              تسجيل دخول
            </button> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import LoginComVue from '../auth/LoginCom.vue'

export default {
  components: {
    // LoginComVue
  },
  name: 'NavBarCom',
  data() {
    return {
      user: null
    };
  },
  methods: {
    Logout() {
      localStorage.clear()
      this.$router.push({ name: 'home' })
    }
  },
  mounted() {
    this.user = localStorage.getItem('token')
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped>
.style {
  direction: rtl;
}

.nav a {
  text-decoration: none;
  color: #353536 !important;
  font-weight: 900 !important;
  transition: all 0.2s ease-in-out;
}
.nav a:hover {
  color: #ffbe03 !important;
}
.nav .router-link-active {
  color: #ffbe03 !important;
}
.nav .router-link-exact-active {
  color: #ffbe03 !important;
}
.navbar-toggler {
  padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
  font-size: var(--bs-navbar-toggler-font-size);
  line-height: 1;
  color: rgb(203 21 21 / 55%);
  background-color: transparent;
  border: 0;
  border-radius: var(--bs-navbar-toggler-border-radius);
  transition: var(--bs-navbar-toggler-transition);
}
</style>
