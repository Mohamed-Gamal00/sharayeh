<template>
  <NavBarCom />
  <div>
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
        <div class="row justify-content-center mt-5">
          <div class="col-md-11">
            <div class="row justify-content-lg-end text-center">
              <div
                class="col-md-3 my-3 my-lg-0 d-flex justify-content-center"
                v-for="news in News"
                :key="news.id"
              >
                <div class="card mt-4 rounded-5 add-News">
                  <div
                    class="mx-auto rounded-4 mt-3 d-flex align-items-center justify-content-center"
                  >
                    <img loading="lazy" :src="news.image" alt="img" />
                  </div>
                  <div class="card-body">
                    <p class="fs-18 mb-0">
                      {{ news.title }}
                    </p>
                    <p class="fs-18">
                      {{ news.number }}
                    </p>
                    <p class="card-text d-inline ms-4">المدة : {{ news.time }}</p>
                    <button
                      style="
                        width: 125px;
                        height: 50px;
                        border-radius: 16px;
                        background-color: #ffbe0333;
                        color: #ff9d0a !important;
                      "
                      class="btn me-4"
                    >
                      أضف للعربة
                    </button>
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
import NavBarCom from '../../components/layout/NavBarCom.vue'
import FooterCom from '../../components/layout/FooterCom.vue'
export default {
  components: {
    NavBarCom,
    FooterCom
  },
  props: ['News']
}
</script>

<style lang="scss" scoped></style>
