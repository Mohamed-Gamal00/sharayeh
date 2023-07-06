<template>
  <div>
    <section class="py-5">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="row justify-content-center text-center my-4">
              <div>
                <strong>
                  <h3 class="fw-900" style="color: #3aa8f5; font-size: 30px">المضافة حديثاً</h3>
                </strong>
                <span class="text-center float-lg-start fw-bold" style="color: #3aa8f5"
                  >عرض الكل</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-11">
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

<style lang="scss" scoped></style>
