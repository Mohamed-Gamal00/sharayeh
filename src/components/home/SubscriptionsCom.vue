<template>
  <div>
    <section class="py-5">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="row justify-content-center text-center">
              <div>
                <strong>
                  <h3 class="fw-900" style="color: #ffbe03; font-size: 30px">الإشتراكات</h3>
                </strong>
                <p class="fs-30 fw-bold">هذا النص هو مثال لنص يمكن أن يستبدل</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-lg-4">
          <div class="col-md-10">
            <div class="row justify-content-start text-center">
              <div class="col-md-4 col-lg-3 my-3" v-for="subscrip in subscriptions" :key="subscrip.id">
                <div class="card border text-center subscriptions">
                  <div class="mx-auto d-flex align-items-center justify-content-center">
                    <img loading="lazy" class="img-fluid" :src="subscrip.image" alt="img" />
                  </div>
                  <p class="fs-18 my-3 fw-900" style="color: #1176c9">
                    {{ subscrip.title }}
                  </p>
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
import SubscriptionsImage from '@/assets/images/Subscriptions.png'
export default {
  data() {
    return {
      subscriptions: [
        {
          id: 1,
          title: 'شهرية',
          image: SubscriptionsImage
        },
        {
          id: 2,
          title: '3 شهور',
          image: SubscriptionsImage
        },
        {
          id: 3,
          title: '6 شهور',
          image: SubscriptionsImage
        },
        {
          id: 4,
          title: 'سنة',
          image: SubscriptionsImage
        }
      ]
    }
  }
}
</script>

<style scoped>
.border {
  /* border: 1px solid #CDCDCD !important; */
  border-top-left-radius: 26px;
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 25px;
  transition: all 0.3s ease-in-out;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #1176c9cf, #1176c921) border-box;
  border: 1px solid transparent !important;
}
/* .border:hover {
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #1176c9cf, #1176c921) border-box;
  border: 1px solid transparent !important;
} */
</style>
