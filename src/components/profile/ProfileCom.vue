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
            <h2 v-if="$route.path === '/profile/mysim'" class="fw-900" style="font-size: 30px">
              شريحتي
            </h2>
            <h2
              v-if="$route.path === '/profile/client-info'"
              class="fw-900"
              style="font-size: 30px"
            >
              البيانات الشخصية
            </h2>
            <h2 v-if="$route.path === '/profile/complaints'" class="fw-900" style="font-size: 30px">
              الشكاوي والإقتراحات
            </h2>
            <h2 v-if="$route.path === '/profile/privacy'" class="fw-900" style="font-size: 30px">
              الشروط والاحكام
            </h2>
            <h2 v-if="$route.path === '/profile/orders'" class="fw-900" style="font-size: 30px">
              طلباتي
            </h2>
            <h2 v-if="$route.path === '/profile/address'" class="fw-900" style="font-size: 30px">
              عنواني
            </h2>
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
                  <div class="col-md-5 col-lg-4 d-flex justify-content-center">
                    <div class="card border-0 rounded-4 shadow" style="width: 18rem">
                      <div class="card-header bg-transparent mt-3 bg-white text-center">
                        <div class="card-body p-0 fw-bold">
                          <div>
                            <img
                              width="100"
                              height="100"
                              style="border: 2px solid #ff9d0a"
                              src="../../assets/images/almona.png"
                              class="rounded-circle bg-dark"
                              alt="img"
                            />
                          </div>

                          <p class="mb-0">mohamed gamal</p>
                          <strong>
                            <p class="mb-0">955664400225485</p>
                          </strong>
                        </div>
                      </div>
                      <div class="card-body mb-1">
                        <div class="card-body py-0">
                          <p class="list-group-item mb-1 fw-bold bg-transparent">
                            <router-link
                              class="btn_btn_link text-decoration-none"
                              :to="{ name: 'client-info' }"
                            >
                              <FontAwesome class="" :icon="['far', 'user']" />
                              البيانات الشخصية</router-link
                            >
                          </p>
                          <p class="list-group-item mb-1 fw-bold bg-transparent">
                            <router-link
                              class="btn_btn_link text-decoration-none"
                              :to="{ name: 'mysim' }"
                            >
                              <FontAwesome class="" :icon="['far', 'credit-card']" />
                              شريحتي</router-link
                            >
                          </p>
                          <p class="list-group-item mb-1 fw-bold bg-transparent">
                            <router-link
                              class="btn_btn_link text-decoration-none"
                              :to="{ name: 'address' }"
                            >
                              <FontAwesome class="" :icon="['far', 'map']" />
                              عناويني
                            </router-link>
                          </p>
                          <p class="list-group-item mb-1 pb-3 fw-bold bg-transparent">
                            <router-link
                              class="btn_btn_link text-decoration-none"
                              :to="{ name: 'orders' }"
                            >
                              <FontAwesome class="" :icon="['far', 'calendar-check']" />
                              طلباتي
                            </router-link>
                          </p>
                          <p class="list-group-item mb-1 fw-bold bg-transparent">
                            <router-link
                              class="btn_btn_link text-decoration-none"
                              :to="{ name: 'complaints' }"
                            >
                              <FontAwesome class="" :icon="['far', 'credit-card']" />
                              الشكاوي والاقتراحات
                            </router-link>
                          </p>
                          <p class="list-group-item mb-2 pb-2 fw-bold bg-transparent">
                            <router-link
                              class="btn_btn_link text-decoration-none"
                              :to="{ name: 'privacy' }"
                            >
                              <FontAwesome class="" :icon="['far', 'chart-bar']" />
                              الشروط والاحكام
                            </router-link>
                          </p>
                          <button style="width: 100%" class="btn text-danger text-end p-0">
                            <FontAwesome class="" :icon="['fas', 'arrow-right-from-bracket']" />
                            تسجيل الخروج
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- nested route -->
                  <div class="col-md-7 col-lg-8 mt-4 mt-lg-0 mt-md-0">
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
export default {
  components: { NavBarCom, FooterCom }
}
</script>

<style scoped>
a {
  color: #5D5D5D !important;
  transition: all 0.2s ease-in-out;
}
a:hover {
  color: #ffbe03 !important;
}
.router-link-exact-active {
  color: #ffbe03 !important;
  padding-bottom: 5px;
}
.shadow {
  box-shadow: 0 0.5rem 1rem rgba(230, 230, 230, 1) !important;
}
</style>
