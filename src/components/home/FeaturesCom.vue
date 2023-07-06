<template>
  <section class="py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="row justify-content-center text-center">
            <div>
              <strong>
                <h3 class="fw-900" style="color: #3aa8f5; font-size: 30px">ما يميزنا</h3>
              </strong>
              <!-- <h3 class="fw-bold fs-20">ما يميزنا</h3> -->
              <p class="fs-30 fw-bold">هذا النص هو مثال لنص يمكن أن يستبدل</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="row justify-content-around text-center">
            <div class="col-md-3" v-for="card in features" :key="card.id">
              <div class="text-center position-relative">
                <div
                  class="mx-auto rounded-4 d-flex align-items-center justify-content-center"
                  style="
                    width: 100px;
                    height: 100px;
                    border-radius: 16px;
                    background-color: #fde7d4;
                    color: #ffbe03;
                  "
                >
                  <img loading="lazy" :src="card.image" alt="img" />
                </div>
                <p class="fs-18g my-3">
                  {{ card.title }}
                </p>
                <p class="fs-18g my-3">
                  {{ card.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import trusted from '@/assets/images/trusted.png'
import fast from '@/assets/images/fast.png'
import withyou from '@/assets/images/withyou.png'
export default {
  data() {
    return {
      features: [
        {
          id: 1,
          title: 'موثوق و مضمون',
          desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة',
          image: trusted
        },
        {
          id: 2,
          title: 'سريع وموفر',
          desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة',
          image: fast
        },
        {
          id: 3,
          title: 'معك دائما',
          desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة',
          image: withyou
        }
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
