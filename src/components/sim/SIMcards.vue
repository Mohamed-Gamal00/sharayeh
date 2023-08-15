<template>
  <div dir="rtl">
    <section class="pt-4">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <!-- 6 شهور -->
          <div class="row justify-content-center">
            <div class="col-md-12">
              <div class="row my-4 px-4 px-lg-3 px-md-4 d-flex justify-content-between">
                <div class="col-6">
                  <span class="fw-900" style="color: #000000">{{ title }}</span>
                </div>
              </div>
              <div class="sims" style="position: relative">
                <Swiper
                  :modules="modules"
                  :pagination="{ el: '.swiper-pagination', clickable: true }"
                  :slides-per-view="1"
                  :space-between="35"
                  :navigation="{ prevIcon: '.swiper-prev', nextIcon: '.swiper-next' }"
                  :autoplay="{ delay: 3000 }"
                  class="pb-9"
                  :breakpoints="{
                    '640': {
                      slidesPerView: 1,
                      spaceBetween: 20
                    },
                    '768': {
                      slidesPerView: 3,
                      spaceBetween: 40
                    },
                    '1024': {
                      slidesPerView: 4,
                      spaceBetween: 50
                    }
                  }"
                >
                  <swiper-slide v-for="sim in sims" :key="sim.id">
                    <div class="card text-center rounded-4">
                      <div class="card-body">
                        <div>
                          <div class="rounded-4 d-flex align-items-center justify-content-center">
                            <img loading="lazy" src="@/assets/images/almona.png" alt="img" />
                          </div>
                          <div class="my-2"></div>
                          <p class="fs-18 mb-0">
                            {{ sim.type }}
                          </p>
                          <div class="my-2"></div>
                          <p class="mb-0" style="font-size: 14px">رقم الشريحة</p>
                          <p class="fs-18" style="font-weight: 900" dir="ltr">
                            {{ sim.number }}
                          </p>
                        </div>
                        <div>
                          <p class="card-text d-inline" style="font-size: 15px; color: #5d5d5d">
                            المدة : {{ sim.period }}
                          </p>
                          <router-link
                            style="cursor: pointer"
                            :to="{ name: 'sim-info', params: { simId: sim.id } }"
                          >
                            <button
                              style="
                                width: 131px;
                                height: 50px;
                                border-radius: 16px;
                                background-color: #ffbe0333;
                                color: #ff9d0a !important;
                              "
                              class="btn me-2"
                            >
                              أضف للعربة
                            </button>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                  <div class="swiper-prev"></div>
                  <div class="swiper-next"></div>
                  <div class="swiper-pagination"></div>
                </Swiper>
                <!-- <swiper
                  :slidesPerView="1"
                  :spaceBetween="30"
                  :slidesPerGroup="1"
                  :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                  }"
                  :modules="modules"
                  class="mySwiper"
                  :breakpoints="{
                    '640': {
                      slidesPerView: 1,
                      spaceBetween: 20
                    },
                    '768': {
                      slidesPerView: 2,
                      spaceBetween: 40
                    },
                    '1024': {
                      slidesPerView: 4,
                      spaceBetween: 30
                    }
                  }"
                >
                  <swiper-slide v-for="sim in sims" :key="sim.id">
                    <div class="card text-center rounded-4">
                      <div class="card-body">
                        <router-link class="" :to="{ name: 'sim-info' }">
                          <div class="rounded-4 d-flex align-items-center justify-content-center">
                            <img loading="lazy" src="@/assets/images/almona.png" alt="img" />
                          </div>
                          <p class="fs-18 mb-0">
                            {{ sim.type }}
                          </p>
                          <p class="mb-0" style="font-size: 14px">رقم الشريحة</p>
                          <p class="fs-18" style="font-weight: 900" dir="ltr">
                            {{ sim.number }}
                          </p>
                        </router-link>
                        <div>
                          <p class="card-text d-inline" style="font-size: 15px; color: #5d5d5d">
                            المدة : {{ sim.period }}
                          </p>
                          <button
                            style="
                              width: 131px;
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
                  </swiper-slide>
                </swiper> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

export default {
  props: {
    sims: {
      type: Array
    },
    title: {
      type: String
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation]
    }
  }
}
</script>

<style scoped>
button {
  outline: 0;
  border: 0;
}
</style>
