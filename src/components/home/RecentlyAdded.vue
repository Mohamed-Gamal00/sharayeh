<template>
  <div>
    <section class="py-5">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-11">
            <div class="row justify-content-lg-start text-center">
              <div
                class="col-md-4 col-lg-3 my-3 my-lg-3 d-flex justify-content-center"
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

  // data() {
  //   return {
  //     News: [
  //       {
  //         id: 1,
  //         title: 'رقم الشريحة',
  //         image: almona,
  //         number: '955664400225485',
  //         time: 'شهر'
  //       },
  //       {
  //         id: 2,
  //         title: 'رقم الشريحة',
  //         image: almona,
  //         number: '955664400225485',
  //         time: 'شهر'
  //       },
  //       {
  //         id: 3,
  //         title: 'رقم الشريحة',
  //         image: almona,
  //         number: '955664400225485',
  //         time: 'شهر'
  //       },
  //       {
  //         id: 4,
  //         title: 'رقم الشريحة',
  //         image: almona,
  //         number: '955664400225485',
  //         time: 'شهر'
  //       }
  //     ]
  //   }
  // }
}
</script>

<style lang="scss" scoped></style>
