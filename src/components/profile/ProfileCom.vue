<template>
  <NavBarCom />
  <div dir="rtl">
    <section class="pt-4">
      <div
        class="container-fluid"
        style="
          background-image: linear-gradient(
            to right,
            rgba(255, 157, 10, 1),
            rgba(46, 155, 232, 0.726),
            rgba(46, 154, 232, 1)
          );
        "
      >
        <div class="row text-white d-flex justify-content-center text-center my-lg-3 py-4 py-lg-5">
          <strong>
            <h2 class="fw-900" style="font-size: 30px">البيانات الشخصية</h2>
            <p>هذا النص هو مثال لنص يمكن أن يستبدل</p>
          </strong>
        </div>
      </div>
      <!-- content -->
      <div class="container mt-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-12 justify-content-center">
            <div class="row">
              <div class="card border-0">
                <div class="row">
                  <!-- settings -->
                  <div class="col-md-4">
                    <div class="row d-flex justify-content-center">
                      <div
                        class="card border-0 text-center"
                        style="width: 18rem; background-color: #f6fafc"
                      >
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item bg-transparent">
                            <router-link
                              class="btn_btn_link text-decoration-none"
                              :to="{ name: 'client-info' }"
                              >البيانات الشخصية</router-link
                            >
                          </li>
                          <li class="list-group-item bg-transparent">
                            <router-link
                              class="btn_btn_link text-decoration-none"
                              :to="{ name: 'change-pass' }"
                              >شريحتي</router-link
                            >
                          </li>
                          <li class="list-group-item bg-transparent">عناويني</li>
                          <li class="list-group-item bg-transparent">طلباتي</li>
                          <li class="list-group-item bg-transparent">الشكاوي والاقتراحات</li>
                          <li class="list-group-item bg-transparent">الشروط والاحكام</li>
                          <li class="list-group-item bg-transparent text-danger">Delete Account</li>
                          <li class="list-group-item bg-transparent text-danger">
                            <button style="width: 100%" class="btn text-danger" @click="Logout()">
                              تسجيل الخروج
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <!-- nested route -->
                  <div class="col-md-8 ">
                    <router-view></router-view>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <FooterCom />
</template>

<script>
import NavBarCom from '../layout/NavBarCom.vue'
import FooterCom from '../layout/FooterCom.vue'

import axios from 'axios'
export default {
  components: { NavBarCom, FooterCom },
  data() {
    return {
      user: []
    }
  },
  mounted() {
    let user = localStorage.getItem('user')
    if (!user) {
      this.$router.push({ name: 'login' })
    }
    this.fetchclient()
  },
  methods: {
    async fetchclient() {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      await axios
        .get('http://lawyer.phpv8.aait-d.com/api/client_web/profile', config)
        .then((res) => {
          this.user = res.data.data
          console.log(this.user)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    Logout() {
      localStorage.clear()
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
a:hover {
  color: #ffbe03 !important;
}
/* .router-link-active {
  color: #ffbe03 !important;
} */
.router-link-exact-active {
  color: #ffbe03 !important;
}
</style>
