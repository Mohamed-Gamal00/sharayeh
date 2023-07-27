<template>
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
            <h2 class="fw-900" style="font-size: 30px">الشرائح</h2>
            <!-- <p>هذا النص هو مثال لنص يمكن أن يستبدل</p> -->
          </strong>
        </div>
      </div>

      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-10 col-md-11">
            <div class="row my-4">
              <div>
                <button class="btn">
                  <img
                    width="125"
                    height="84"
                    src="../../assets/images/Mobily.png"
                    alt="mobily"
                  /></button
                >&nbsp;&nbsp;&nbsp;
                <button class="btn">
                  <img width="125" height="40" src="../../assets/images/zain.png" alt="zain" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- شهر -->
        <div class="row justify-content-center">
          <div class="col-md-11">
            <div class="row my-4">
              <div>
                <!-- <span class="float-start fw-bold" style="color: #3aa8f5">عرض الكل</span> -->
                <span class="float-end fw-900" style="color: #000000">شهر</span>
              </div>
            </div>
            <div class="row justify-content-lg-around text-center">
              <div
                class="col-md-3 my-3 my-lg-0 d-flex justify-content-center"
                v-for="news in News"
                :key="news.id"
              >
                <router-link :to="{ name: 'sim-info' }">
                  <div class="card rounded-5 add-News">
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
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- 3 شهور -->
        <div class="row justify-content-center">
          <div class="col-md-11">
            <div class="row my-4">
              <div>
                <!-- <span class="float-start fw-bold" style="color: #3aa8f5">عرض الكل</span> -->
                <span class="float-end fw-900" style="color: #000000">3 شهور</span>
              </div>
            </div>
            <div class="row justify-content-lg-around text-center">
              <div
                class="col-md-3 my-3 my-lg-0 d-flex justify-content-center"
                v-for="news in News"
                :key="news.id"
              >
                <div class="card rounded-5 add-News">
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
                <!-- <div class="text-center position-relative">
                  <div
                    class="mx-auto rounded-4 d-flex align-items-center justify-content-center"
                  >
                    <img loading="lazy" :src="news.image" alt="img" />
                  </div>
                  <p class="fs-18 mt-5">
                    {{ news.title }}
                  </p>
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <!-- 6 شهور -->
        <div class="row justify-content-center">
          <div class="col-md-11">
            <div class="row my-4">
              <div>
                <!-- <span class="float-start fw-bold" style="color: #3aa8f5">عرض الكل</span> -->
                <span class="float-end fw-900" style="color: #000000">6 شهور</span>
              </div>
            </div>
            <div class="row justify-content-lg-around text-center">
              <div
                class="col-md-3 my-3 my-lg-0 d-flex justify-content-center"
                v-for="news in News"
                :key="news.id"
              >
                <div class="card rounded-5 add-News">
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
        <!-- سنة -->
        <div class="row justify-content-center">
          <div class="col-md-11">
            <div class="row my-4">
              <div>
                <!-- <span class="float-start fw-bold" style="color: #3aa8f5">عرض الكل</span> -->
                <span class="float-end fw-900" style="color: #000000">سنة</span>
              </div>
            </div>
            <div class="row justify-content-lg-around text-center">
              <div
                class="col-md-3 my-3 my-lg-0 d-flex justify-content-center"
                v-for="news in News"
                :key="news.id"
              >
                <div class="card rounded-5 add-News">
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
</template>

<script>
import almona from '@/assets/images/almona.png'

export default {
  data() {
    return {
      News: [
        {
          id: 1,
          title: 'رقم الشريحة',
          image: almona,
          number: '955664400225485',
          time: 'شهر'
        },
        {
          id: 2,
          title: 'رقم الشريحة',
          image: almona,
          number: '955664400225485',
          time: 'شهر'
        },
        {
          id: 3,
          title: 'رقم الشريحة',
          image: almona,
          number: '955664400225485',
          time: 'شهر'
        },
        {
          id: 4,
          title: 'رقم الشريحة',
          image: almona,
          number: '955664400225485',
          time: 'شهر'
        }
      ]
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
