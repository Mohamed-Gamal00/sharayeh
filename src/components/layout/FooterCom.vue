<template>
  <div class="container-fluid mt-5" style="background-color: #ffffff; direction: rtl">
    <div class="row d-flex justify-content-center">
      <div class="col-md-12">
        <div class="row">
          <footer>
            <!-- Footer Start -->
            <div class="text-light" style="margin-top: 2rem">
              <div class="container-fluid">
                <div class="row d-flex justify-content-lg-around mb-4">
                  <!--sharayeh-->
                  <div class="col-md-12 col-lg-3 text-center text-md-center text-lg-end">
                    <div>
                      <!-- <div class="my-4">
                        <img
                          loading="lazy"
                          src="@/assets/images/logofooter.png"
                          width="80"
                          height="80"
                          alt="img"
                        /> -->
                      <div class="my-4">
                        <img
                          loading="lazy"
                          :src="SiteSetting.logo"
                          width="80"
                          height="80"
                          alt="img"
                        />
                      </div>
                      <p>
                        {{ SiteSetting.desc }}
                      </p>
                    </div>
                  </div>
                  <!-- أقسام الموقع -->
                  <div class="col-md-12 col-lg-2 text-md-center text-lg-end">
                    <p class="text-black text-center text-lg-end my-4 fs-20 fw-900">أقسام الموقع</p>
                    <router-link
                      class="btn_btn_link text-decoration-none fw-bold text-lg-end"
                      :to="{ name: 'home' }"
                      >الرئيسية</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none fw-bold text-lg-end"
                      :to="{ name: 'basket' }"
                      >السلة</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none fw-bold text-lg-end"
                      :to="{ name: 'sim' }"
                      >الشرائح</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none fw-bold text-lg-end"
                      :to="{ name: 'profile' }"
                      >خاص بي</router-link
                    >
                    <router-link
                      class="btn_btn_link text-decoration-none fw-bold text-lg-end"
                      :to="{ name: 'contact' }"
                    >
                      تواصل معنا
                    </router-link>
                  </div>
                  <!-- تواصل معنا -->
                  <div class="col-md-12 col-lg-3 text-lg-end text-center">
                    <p class="text-black text-center text-lg-end my-4 fs-20 fw-900">تواصل معنا</p>

                    <div class="card bg-transparent border-0 rounded-5 mt-2" style="width: 100%">
                      <div class="card-body py-0 text-black bg-transparent">
                        <div>
                          <p class="card-title mb-0 fs-16 fw-bold">
                            <FontAwesome class="ms-2" :icon="['far', 'envelope']" />البريد
                            الالكتروني
                          </p>
                          <small class="card-text fs-14 p-0 me-md-4" style="color: #787878">
                            <a :href="'mailto:' + SiteSetting.email">{{ SiteSetting.email }}</a>
                          </small>
                        </div>
                        <div class="mt-3">
                          <p class="card-title mb-0 fs-16 fw-bold">
                            <FontAwesome class="ms-2 fs-16" icon="phone-volume" />
                            رقم الجوال
                          </p>
                          <small class="card-text fs-14 me-md-4" style="color: #787878">{{
                            SiteSetting.phone
                          }}</small>
                        </div>
                        <div class="d-flex justify-content-center justify-content-lg-start pt-2">
                          <a
                            v-if="SiteSetting.facebook"
                            class="btnn btn-outline-light btn-social"
                            target="_blank"
                            aria-label="facebook"
                            :href="SiteSetting.facebook"
                            ><FontAwesome :icon="['fab', 'facebook']"
                          /></a>
                          <a
                            v-if="SiteSetting.twitter"
                            class="btnn btn-outline-light btn-social"
                            target="_blank"
                            aria-label="Twitter"
                            :href="SiteSetting.twitter"
                            ><FontAwesome :icon="['fab', 'twitter']"
                          /></a>
                          <a
                            v-if="SiteSetting.instagram"
                            class="btnn btn-outline-light btn-social"
                            target="_blank"
                            aria-label="instagram"
                            :href="SiteSetting.instagram"
                            ><FontAwesome :icon="['fab', 'instagram']"
                          /></a>
                          <a
                            v-if="SiteSetting.linkedin"
                            class="btnn btn-outline-light btn-social"
                            target="_blank"
                            aria-label="linkedin"
                            :href="SiteSetting.linkedin"
                            ><FontAwesome :icon="['fab', 'tiktok']"
                          /></a>
                          <a
                            v-if="SiteSetting.snapchat"
                            class="btnn btn-outline-light btn-social"
                            target="_blank"
                            aria-label="snapchat"
                            :href="SiteSetting.snapchat"
                            ><FontAwesome :icon="['fab', 'tiktok']"
                          /></a>
                        </div>
                      </div>
                    </div>

                    <!-- <p>سياسة الخصوصية</p>
                    <p>الشروط والاحكام</p> -->
                  </div>
                  <!-- زر التواصل -->
                  <div class="col-md-12 text-center col-lg-1">
                    <div
                      class="card border-0 rounded-5 mt-2 bg-black"
                      style="width: 100%; background-color: transparent !important"
                    >
                      <div class="card-body border-0 text-black">
                        <div class="d-grid justify-content-center justify-content-lg-end pt-2">
                          <div class="d-block">
                            <!-- <a href="tel:123-456-7890">123-456-7890</a> -->
                            <a
                              class="btnn btn-outline-light btn-social"
                              target="_blank"
                              aria-label="facebook"
                              :href="'tel:' + SiteSetting.phone"
                              style="background-color: #2e9ae8; color: white !important"
                              ><FontAwesome icon="phone-volume"
                            /></a>
                          </div>
                          <div class="d-block">
                            <a
                              class="btnn btn-outline-light btn-social my-2"
                              target="_blank"
                              aria-label="whatsapp"
                              :href="SiteSetting.whatsapp"
                              style="background-color: #ffbe03"
                              ><FontAwesome :icon="['fab', 'whatsapp']"
                            /></a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- <p>سياسة الخصوصية</p>
                    <p>الشروط والاحكام</p> -->
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="row">
                  <div class="col-md-12 text-center mb-3 mb-md-0">
                    <p style="color: #787878 !important">
                      جميع الحقوق محفوظة&copy; {{ new Date().getFullYear() }} لموقع My SIM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!-- Footer End -->
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { profileStore } from '../../store/profile'
import { mapActions, mapState } from 'pinia'
export default {
  computed: {
    ...mapState(profileStore, ['SiteSetting'])
  },
  methods: {
    ...mapActions(profileStore, ['siteSetting'])
  },
  mounted() {
    this.siteSetting()
  }
}
</script>
<style scoped>
a,
p {
  color: #292929 !important;
}
:root {
  --primary: #2380be;
  --light: #05121b;
  --dark: #0e2e50;
}
.btnn.btn-social {
  margin-right: 5px;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #ffbe03; */
  border: 1px solid rgb(0 0 0 / 10%) !important;
  transition: 0.5s;
}

.btnn.btn-social:hover {
  background-color: #ffbe03;
  color: black;
}
.btnn.btn-social:focus {
  background-color: #ffbe03;
}

.btn_btn_link {
  display: block;
  margin-bottom: 10px;
  padding: 0;
  text-align: center;
  color: var(--light);
  font-weight: normal;
  transition: 0.3s;
  color: white;
}
.btn_btn_link:hover {
  letter-spacing: 0.5px;
  box-shadow: none;
  color: #0099ff;
}

.btn_btn_link::before {
  position: relative;
  content: '';
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-right: 10px;
}
</style>
