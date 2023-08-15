<template>
  <div>
    <section class="py-5">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="row justify-content-lg-start text-center">
              <div
                class="col-md-4 col-lg-3 my-3 my-lg-3 d-flex justify-content-center"
                v-for="news in sims"
                :key="news.id"
              >
                <div class="card rounded-5 add-News" style="width: 100%">
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
                    <div class="row d-flex justify-content-around align-items-center">
                      <div class="col-6 px-0">
                        <p
                          class="card-text d-inline fw-900"
                          style="font-size: 13px; color: #5d5d5d"
                        >
                          المدة : {{ news.period }}
                        </p>
                      </div>
                      <div class="col-6">
                        <router-link
                          style="cursor: pointer"
                          :to="{ name: 'sim-info', params: { simId: news.id } }"
                        >
                          <button
                            style="
                              width: 100%;
                              height: 50px;
                              border-radius: 16px;
                              font-size: 13px;
                              background-color: #ffbe0333;
                              color: #ff9d0a !important;
                            "
                            class="btn fw-bold"
                          >
                            أضف للعربة
                          </button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import almona from '@/assets/images/almona.png'
export default {
  props: {
    sims: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped></style>
