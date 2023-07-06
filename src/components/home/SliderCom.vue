<template>
  <div class="container criminals my-5" style="position: relative">
    <div class="row mt-lg-5">
      <div class="col-12 col-md-6">
        <div>
          <h2 class="mb-0 fw-bold" style="font-weight: 900 !important">
            <span class="text-yellow">Law Solutions</span>
          </h2>
          <h2 class="mb-4 fw-bold" style="font-weight: 900 !important">to solve your problems</h2>
        </div>
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="float-end swiper-button-container">
          <div class="swiper-button-prev swiper-button-custom">
            <img src="../../assets/images/arrow-left.png" loading="lazy" alt="prev" />
          </div>
          &nbsp; &nbsp;
          <div class="swiper-button-next swiper-button-custom">
            <img src="../../assets/images/arrow-right.png" loading="lazy" alt="next" />
          </div>
        </div>
      </div>
    </div>
    <swiper
      :slidesPerView="1"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }"
      :spaceBetween="30"
      :slidesPerGroup="1"
      :pagination="{
        clickable: true
      }"
      :loop="true"
      :loopFillGroupWithBlank="true"
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
          spaceBetween: 50
        }
      }"
    >
      <swiper-slide v-for="criminal in criminals" :key="criminal">
        <div class="card our-criminals" style="width: 100%; border: none">
          <div class="card" style="width: 100%">
            <div class="card-body">
              <!-- <h5 class="card-title">Card title</h5> -->
              <img :src="criminal.img" alt="icon" />
              <h6 class="card-subtitle mb-2 fw-bold my-3 mt-lg-5">criminal</h6>
              <p class="my-2 text-muted fs-14">benefits beyond legal support</p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import criminalIcon1 from '../../assets/images/criminal-icon1.png'
import criminalIcon2 from '../../assets/images/criminal-icon2.png'
import criminalIcon3 from '../../assets/images/criminal-icon3.png'
import CriminalIcon4 from '../../assets/images/Criminal-Icon4.png'

// import SwiperCore, { Autoplay } from 'swiper/core'
// SwiperCore.use([Autoplay])

// import axios from 'axios'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'

export default {
  name: 'PrtnersCom',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      criminals: [
        { id: 1, img: criminalIcon1 },
        { id: 2, img: criminalIcon2 },
        { id: 3, img: criminalIcon3 },
        { id: 4, img: CriminalIcon4 },
        { id: 5, img: criminalIcon2 },
        { id: 6, img: criminalIcon3 },
      ]
    }
  },
  setup() {
    return {
      modules: [Navigation]
    }
  }
  // async mounted() {
  //   let result = await axios
  //     .get(`https://admin.almonaoffice.sa/api/partners`)
  //     .catch(() => this.$router.push({ path: '/servererror' }))
  //   if (result.status == 200) {
  //     this.partners = result.data.partners
  //   }
  // }
}
</script>

<style>
.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  color: #333333;
}

.criminals .swiper {
  width: 100%;
  height: 100%;
}

.criminals .swiper-slide {
  font-size: 18px;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  height: 250px;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.criminals .swiper-slide img {
  object-fit: contain;
}

.criminals .swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: rgba(0, 0, 0, 0.2);
}

.criminals .swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff;
}
.our-criminals {
  /* padding: 1.2rem 0.75rem;
    background: #fff;
    border-radius: 1rem;
    text-align: center;
    border: 0.5px solid #60c5a8;
    box-shadow: rgba(0, 0, 0, 0.185) 0px 2px 10px 0px,
      rgba(0, 0, 0, 0.151) 0px 2px 25px 0px; */
}
.our-criminals .pic {
  display: inline-block;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
}
.our-criminals .pic img {
  object-fit: contain;
}
.our-criminals .title {
  display: block;
  font-size: 1.5rem;
  font-weight: 600;
  color: #008ab8;
  margin: 0 0 7px 0;
}
.swiper-button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.swiper-button-next,
.swiper-button-prev {
  position: relative;
  width: 44px;
  height: 44px;
  background-color: #ffffff;
  border-radius: 50%;
  color: white;
  border: 1px solid #c8a45d;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.swiper-button-next {
  margin-left: 10px;
}

.swiper-button-prev {
  margin-right: 10px;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  content: '';
  font-family: swiper-icons;
  font-size: var(--swiper-navigation-size);
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}
@media screen and (min-width: 992px) {
  .swiper-button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    position: relative;
    width: 44px;
    height: 44px;
    background-color: #ffffff;
    border-radius: 50%;
    color: white;
    border: 1px solid #c8a45d;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .swiper-button-next {
    margin-left: 10px;
  }

  .swiper-button-prev {
    margin-right: 10px;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    content: '';
    font-family: swiper-icons;
    font-size: var(--swiper-navigation-size);
    text-transform: none !important;
    letter-spacing: 0;
    font-variant: initial;
    line-height: 1;
  }
}
</style>
