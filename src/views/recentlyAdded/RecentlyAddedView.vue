<template>
  <NavBarCom />
  <section class="py-5">
    <div class="container-fluid">
      <div class="row justify-content-center">
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
          <div
            class="row text-white d-flex justify-content-center text-center my-lg-3 py-3 py-lg-3"
          >
            <strong>
              <h2 class="fw-900" style="font-size: 30px">المضافة حديثا</h2>
              <p>هذا النص هو مثال لنص يمكن أن يستبدل</p>
            </strong>
          </div>
        </div>
      </div>
      <!-- <div class="row justify-content-center mt-5">
        <div class="col-md-11">
          <div class="row justify-content-lg-end text-center">
            <div
                class="col-md-4 col-lg-3 my-3 my-lg-0 d-flex justify-content-center"
                v-for="news in sims"
                :key="news.id"
              >
                <div class="card rounded-5 add-News py-3" style="width: 100%">
                  <div
                    class="mx-auto rounded-4 mt-3 d-flex align-items-center justify-content-center"
                  >
                    <img loading="lazy" src="@/assets/images/almona.png" alt="almona" />
                  </div>
                  <div class="card-body">
                    <p class="fs-18 mb-0">
                      {{ news.title }}
                    </p>
                    <p class="fs-18">
                      {{ news.number }}
                    </p>
                    <div>
                      <p class="card-text d-inline fw-bold ms-1" style="font-size: 16px">
                        المدة : {{ news.period }}
                      </p>
                      <button
                        style="
                          width: 125px;
                          height: 50px;
                          border-radius: 16px;
                          background-color: #ffbe0333;
                          color: #ff9d0a !important;
                        "
                        class="btn me-2"
                      >
                        أضف للعربة
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div> -->
    </div>
  </section>
  <RecentlyAdded :sims="AllRecentlyAdd" />
  <FooterCom />
</template>

<script>
import NavBarCom from '../../components/layout/NavBarCom.vue'
import FooterCom from '../../components/layout/FooterCom.vue'
import RecentlyAdded from '../../components/home/RecentlyAdded.vue'
import { simStore } from '../../store/sims'
import { mapActions, mapState } from 'pinia'
export default {
  components: { NavBarCom, RecentlyAdded, FooterCom },
  computed: {
    ...mapState(simStore, ['AllRecentlyAdd'])
  },
  methods: {
    ...mapActions(simStore, ['getRecentlyAdd'])
  },
  async mounted() {
    let user = localStorage.getItem('token')
    if (!user) {
      this.$router.push({ name: 'home' })
      alert('قم بتسجيل الدخول')
    }
    await this.getRecentlyAdd()
  }
}
</script>

<!-- <style scoped>
* {
  direction: rtl;
}
</style> -->
