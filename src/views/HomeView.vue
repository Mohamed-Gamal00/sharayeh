<template>
  <div v-if="loading">
    <PageLoder />
  </div>
  <div class="bg-header" style="direction: rtl">
    <!-- text and image -->
    <NavBarCom />

    <div class="container-fluid">
      <div class="row align-items-center m-0 p-0">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <div class="row mt-lg-5 align-items-center justify-content-between">
              <div class="col-lg-5 fw-bold align-middle text-end text-lg-end">
                <h1 class="pb-3 lh-lg" style="color: #1f1e1e">
                  <strong>
                    سجل الأن واحصل علي
                    <span style="color: #3aa8f5">شريحتك</span>
                  </strong>
                </h1>
                <p class="pb-3" style="color: #1f1e1e">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                  النص العربى
                </p>
                <!-- <LoginComVue /> -->
                <button
                  @click="this.$router.push({ name: 'contact' })"
                  type="button"
                  style="background-color: #ffbe03; width: 160px; height: 50px; border-radius: 12px"
                  class="btn fw-bold mb-4 border-0 text-dark"
                >
                  تواصل معنا
                </button>
                <!-- <button
                  style="background-color: #ffbe03; width: 160px; height: 50px; border-radius: 12px"
                  class="btn fw-bold mb-4 border-0 text-dark"
                >
                </button> -->
              </div>
              <div class="col-lg-6 text-center mt-sm-4 text-lg-start">
                <!-- <img loading="lazy"
                  class="img-fluid rounded-3"
                  src="../../assets/images/img1.png"
                  alt="img"
                /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="home" style="direction: rtl" id="home">
    <!-- section 2 -->
    <FeaturesCom />
    <!-- section 3 الإشتراكات -->
    <SubscriptionsCom />
    <!-- text and image -->
    <div class="container-fluid py-5" style="position: relative">
      <div class="row d-flex justify-content-center">
        <div class="col-md-11">
          <div class="row align-items-center justify-content-around mb-2">
            <div class="col-lg-5 col-md-5 fw-bold text-end text-lg-end">
              <div class="circleshape"></div>
              <div class="circle"></div>

              <h4 class="pb-3 fw-bold lh-custom" style="color: #1f1e1e">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
              </h4>
              <p class="pb-3" style="color: #1f1e1e; line-height: 1.65rem">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                النص العربى، حيث يمكنك أن تولد مثل هذا النص
              </p>
            </div>
            <div class="col-lg-5 col-md-6 text-center my-3 text-lg-start">
              <img
                loading="lazy"
                class="img-fluid rounded-3"
                src="@/assets/images/card.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- section 3 المضافة حديثاً -->
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="row justify-content-center text-center my-4">
            <div>
              <strong>
                <h3 class="fw-900" style="color: #3aa8f5; font-size: 30px">المضافة حديثاً</h3>
              </strong>
              <router-link :to="{ name: 'RecentlyAdded' }">
                <span class="text-center float-lg-start fw-bold" style="color: #3aa8f5"
                  >عرض الكل</span
                >
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <RecentlyAdded :sims="HomeSims" />
    </div>
    <!-- بانر -->
    <section class="pt-5">
      <div class="container-fluid bg-img">
        <div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <div class="row align-items-center justify-content-between mb-2">
              <div class="col-lg-5 fw-bold align-middle text-center text-lg-end">
                <h2 class="mb-4 font_h1 fw-bold btn-gradient-1" style="font-weight: 900 !important">
                  حمل التطبيق واحصل علي شريحتك
                </h2>
                <p class="pb-3" style="color: #1f1e1e">
                  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                </p>
                <div class="text-center text-lg-end">
                  <!-- Google Play button -->

                  <a
                    class="market-btn google-btn"
                    :href="SiteSetting.google_play"
                    target="_blank"
                    role="button"
                  >
                    <span class="market-button-subtitle fs-10">GET IT ON</span>
                    <span class="market-button-title">Google Play</span>
                  </a>
                  <!-- App Store button -->
                  <a
                    class="market-btn apple-btn"
                    target="_blank"
                    :href="SiteSetting.app_store"
                    role="button"
                    style="width: 160.72px"
                  >
                    <span class="market-button-subtitle fs-10">Download on the</span>
                    <span class="market-button-title">App Store</span>
                  </a>
                </div>
              </div>
              <div class="col-lg-5 fw-bold align-middle text-center text-lg-end">
                <img loading="lazy" class="img-fluid" src="@/assets/images/mobile.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- تواصل -->
    <section>
      <div
        class="container-fluid py-5"
        style="background-image: linear-gradient(to right, #1176c9, #3aa8f5)"
      >
        <div class="row d-flex justify-content-center">
          <div class="col-md-10">
            <div class="row align-items-center justify-content-between mb-2">
              <div class="text-center">
                <h3>كيف يمكننا مساعدتك ؟</h3>
                <a
                  class="btnn btn-outline-light btn-social"
                  target="_blank"
                  aria-label="whatsapp"
                  :href="SiteSetting.whatsapp"
                >
                  <button
                    class="btn my-3 whatsbtn text-dark"
                    style="background-color: #e2e2e2; border-radius: 12px; font-size: 18px"
                  >
                    <img
                      loading="lazy"
                      width="50"
                      height="50"
                      src="@/assets/images/whatsapp.png"
                      alt="whatsapp"
                    />
                    للطلب عبر الواتساب
                  </button>
                </a>
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
import axios from 'axios'
import PageLoder from '../components/pageloader/PageLoder.vue'
import NavBarCom from '../components/layout/NavBarCom.vue'
import FeaturesCom from '../components/home/FeaturesCom.vue'
import SubscriptionsCom from '../components/home/SubscriptionsCom.vue'
import RecentlyAdded from '../components/home/RecentlyAdded.vue'
// import LoginComVue from '../components/auth/LoginCom.vue'
import FooterCom from '../components/layout/FooterCom.vue'
import { simStore } from '../store/sims'
import { mapActions, mapState } from 'pinia'

export default {
  name: 'HomeView',
  components: {
    NavBarCom,
    FeaturesCom,
    SubscriptionsCom,
    RecentlyAdded,
    PageLoder,
    // LoginComVue,
    FooterCom
  },
  data() {
    return {
      user: null,
      loading: false,
      SiteSetting: []
    }
  },
  computed: {
    ...mapState(simStore, ['HomeSims'])
  },
  methods: {
    ...mapActions(simStore, ['getHomeSims']),
    async sitesetting() {
      let token = localStorage.getItem('token')
      await axios
        .get(`/siteSetting`, {
          headers: {
            Authorization: 'Bearer ' + token,
            accept: 'Application/json'
          }
        })
        .then((res) => {
          console.log('HomeSiteSetting', res)
          {
            this.SiteSetting = res.data.settings[0]
            console.log(this.SiteSetting)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  async mounted() {
    this.loading = true
    await this.getHomeSims()
    await this.sitesetting()
    this.user = localStorage.getItem('token')
    this.loading = false
  }
}
</script>

<style scoped>
@media only screen and (max-width: 600px) {
  .bg-header {
    background-image: url('@/assets/images/header.png');
    background-position: right; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: initial;
  }
}
@media only screen and (min-width: 1200px) {
  .bg-header {
    background-image: url('@/assets/images/header.png');
    background-position: left; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: initial;
    height: 100vh;
  }
  .circleshape {
    z-index: 1;
    position: absolute;
    left: 0px;
    right: 60px;
    top: 35%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border: 1px dashed #ffb4052e;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background: #ffb4052e;
  }
  .circle {
    z-index: 1;
    position: absolute;
    left: 0px;
    right: 40%;
    top: 75%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border: 1px dashed #ffb4052e;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ffb505;
  }
  .bg-img {
    background-image: url('@/assets/images/bannar.png');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }
  .whatsbtn {
    width: 30%;
  }
}

.home {
  direction: rtl;
  color: #1f1e1e !important;
}
a {
  color: #212a34 !important;
  font-weight: bold !important;
  text-decoration: none !important;
}

/* app store */
.market-btn {
  display: inline-block;
  padding: 0.3125rem 0.875rem;
  padding-left: 2.8125rem;
  -webkit-transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  -webkit-transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  -o-transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  transition: border-color 0.25s ease-in-out, background-color 0.25s ease-in-out;
  border: 1px solid #e7e7e7;
  background-position: center left 0.75rem;
  background-color: #ebebec;
  background-size: 1.5rem 1.5rem;
  background-repeat: no-repeat;
  text-decoration: none;
  margin: 2px 2px;
  -webkit-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  border-radius: 12px;
}
.market-btn .market-button-title {
  display: block;
  color: #222;
  font-size: 1.125rem;
}
/* .market-btn:hover .market-button-title {
  color: rgb(0, 0, 0);
} */
.market-btn .market-button-subtitle {
  display: block;
  margin-bottom: -0.25rem;
  color: #888;
  font-size: 0.75rem;
}
/* .market-btn:hover .market-button-subtitle {
  color: rgb(255, 255, 255);
} */
.apple-btn {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMDUgMzA1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMDUgMzA1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCI+CjxnIGlkPSJYTUxJRF8yMjhfIj4KCTxwYXRoIGlkPSJYTUxJRF8yMjlfIiBkPSJNNDAuNzM4LDExMi4xMTljLTI1Ljc4NSw0NC43NDUtOS4zOTMsMTEyLjY0OCwxOS4xMjEsMTUzLjgyQzc0LjA5MiwyODYuNTIzLDg4LjUwMiwzMDUsMTA4LjIzOSwzMDUgICBjMC4zNzIsMCwwLjc0NS0wLjAwNywxLjEyNy0wLjAyMmM5LjI3My0wLjM3LDE1Ljk3NC0zLjIyNSwyMi40NTMtNS45ODRjNy4yNzQtMy4xLDE0Ljc5Ny02LjMwNSwyNi41OTctNi4zMDUgICBjMTEuMjI2LDAsMTguMzksMy4xMDEsMjUuMzE4LDYuMDk5YzYuODI4LDIuOTU0LDEzLjg2MSw2LjAxLDI0LjI1Myw1LjgxNWMyMi4yMzItMC40MTQsMzUuODgyLTIwLjM1Miw0Ny45MjUtMzcuOTQxICAgYzEyLjU2Ny0xOC4zNjUsMTguODcxLTM2LjE5NiwyMC45OTgtNDMuMDFsMC4wODYtMC4yNzFjMC40MDUtMS4yMTEtMC4xNjctMi41MzMtMS4zMjgtMy4wNjZjLTAuMDMyLTAuMDE1LTAuMTUtMC4wNjQtMC4xODMtMC4wNzggICBjLTMuOTE1LTEuNjAxLTM4LjI1Ny0xNi44MzYtMzguNjE4LTU4LjM2Yy0wLjMzNS0zMy43MzYsMjUuNzYzLTUxLjYwMSwzMC45OTctNTQuODM5bDAuMjQ0LTAuMTUyICAgYzAuNTY3LTAuMzY1LDAuOTYyLTAuOTQ0LDEuMDk2LTEuNjA2YzAuMTM0LTAuNjYxLTAuMDA2LTEuMzQ5LTAuMzg2LTEuOTA1Yy0xOC4wMTQtMjYuMzYyLTQ1LjYyNC0zMC4zMzUtNTYuNzQtMzAuODEzICAgYy0xLjYxMy0wLjE2MS0zLjI3OC0wLjI0Mi00Ljk1LTAuMjQyYy0xMy4wNTYsMC0yNS41NjMsNC45MzEtMzUuNjExLDguODkzYy02LjkzNiwyLjczNS0xMi45MjcsNS4wOTctMTcuMDU5LDUuMDk3ICAgYy00LjY0MywwLTEwLjY2OC0yLjM5MS0xNy42NDUtNS4xNTljLTkuMzMtMy43MDMtMTkuOTA1LTcuODk5LTMxLjEtNy44OTljLTAuMjY3LDAtMC41MywwLjAwMy0wLjc4OSwwLjAwOCAgIEM3OC44OTQsNzMuNjQzLDU0LjI5OCw4OC41MzUsNDAuNzM4LDExMi4xMTl6IiBmaWxsPSIjMmUyZTJlIi8+Cgk8cGF0aCBpZD0iWE1MSURfMjMwXyIgZD0iTTIxMi4xMDEsMC4wMDJjLTE1Ljc2MywwLjY0Mi0zNC42NzIsMTAuMzQ1LTQ1Ljk3NCwyMy41ODNjLTkuNjA1LDExLjEyNy0xOC45ODgsMjkuNjc5LTE2LjUxNiw0OC4zNzkgICBjMC4xNTUsMS4xNywxLjEwNywyLjA3MywyLjI4NCwyLjE2NGMxLjA2NCwwLjA4MywyLjE1LDAuMTI1LDMuMjMyLDAuMTI2YzE1LjQxMywwLDMyLjA0LTguNTI3LDQzLjM5NS0yMi4yNTcgICBjMTEuOTUxLTE0LjQ5OCwxNy45OTQtMzMuMTA0LDE2LjE2Ni00OS43N0MyMTQuNTQ0LDAuOTIxLDIxMy4zOTUtMC4wNDksMjEyLjEwMSwwLjAwMnoiIGZpbGw9IiMyZTJlMmUiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K);
}
.google-btn {
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzVDREFERDsiIHBvaW50cz0iMjkuNTMsMCAyOS41MywyNTEuNTA5IDI5LjUzLDUxMiAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNCREVDQzQ7IiBwb2ludHM9IjM2OS4wNjcsMTgwLjU0NyAyNjIuMTc1LDExOS40NjcgMjkuNTMsMCAyOTkuMDA0LDI1MS41MDkgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNEQzY4QTE7IiBwb2ludHM9IjI5LjUzLDUxMiAyOS41Myw1MTIgMjYyLjE3NSwzODMuNTUxIDM2OS4wNjcsMzIyLjQ3IDI5OS4wMDQsMjUxLjUwOSAiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0E5NjsiIGQ9Ik0zNjkuMDY3LDE4MC41NDdsLTcwLjA2Myw3MC45NjFsNzAuMDYzLDcwLjk2MWwxMDguNjg4LTYyLjg3N2M2LjI4OC0zLjU5Myw2LjI4OC0xMS42NzcsMC0xNS4yNyAgTDM2OS4wNjcsMTgwLjU0N3oiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
}
.btn-gradient-1 {
  border-width: 4px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-style: solid;
  -o-border-image: -o-linear-gradient(left, darkblue, darkorchid) 1;
  border-image: -webkit-gradient(linear, left top, right top, from(#ffffff05), to(white)) 1;
  border-image: linear-gradient(to right, #ffffff05, white) 1;
  padding-bottom: 10px; /* Add padding to create space below the text */
}
.subscriptions ::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 26px 0px 26px 26px !important;
  border: 1px solid transparent;
  background: -webkit-gradient(linear, right top, left top, from(#1176c921), to(#1176c9cf))
    border-box;
  background: -o-linear-gradient(right, #1176c921, #1176c9cf) border-box;
  background: linear-gradient(270deg, #1176c921, #1176c9cf) border-box;
  -webkit-mask: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff)) padding-box,
    -webkit-gradient(linear, left top, left bottom, color-stop(0, #fff));
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}
</style>
