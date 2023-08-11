<template>
  <div>
    <div>
      <section class="py-5" dir="rtl">
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
                class="row text-white d-flex justify-content-center text-center my-lg-3 py-3 py-lg-5"
              >
                <strong>
                  <h2 class="fw-900" style="font-size: 30px">بيانات الشريحة</h2>
                </strong>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-5">
            <div class="col-md-11">
              <!-- content -->
              <div class="container">
                <div class="row d-flex justify-content-center align-items-center">
                  <div
                    class="col-md-12 col-lg-6 d-flex justify-content-center mt-4 mt-lg-4 mb-lg-4"
                  >
                    <div class="">
                      <h5 class="card-title fw-900">وصف المنتج</h5>
                      <ul class="px-5 py-3">
                        <li>
                          <p class="card-text fs-16" style="color: #787878">
                            شريحة {{ SingleSim.type }}
                          </p>
                        </li>
                        <li>
                          <p class="card-text fs-16" style="color: #787878">
                            تجديد لمرة {{ SingleSim.period }}
                          </p>
                        </li>
                        <li>
                          <p class="card-text fs-16" style="color: #787878">
                            السعر مميز <span class="fw-900">{{ SingleSim.price }}</span> ر.س
                          </p>
                        </li>
                        <li>
                          <p class="card-text fs-16" style="color: #787878">
                            تواصل معنا الاًن +966 5 65553390
                          </p>
                        </li>
                      </ul>
                      <div class="my-3">
                        <button
                          class="btn my-lg-3 my-2 mx-1 border-0"
                          style="background-color: #ebecf0cc; border-radius: 8px; font-size: 18px"
                        >
                          <FontAwesome class="ms-2" :icon="['fas', 'cash-register']" />
                          <small>اسعار وسهولة الدفع</small>
                        </button>
                        <button
                          class="btn my-lg-3 mx-1 border-0"
                          style="background-color: #ebecf0cc; border-radius: 8px; font-size: 18px"
                        >
                          <FontAwesome class="ms-2" :icon="['fas', 'truck']" />
                          <small> الشحن السريع </small>
                        </button>
                      </div>
                      <p>تم شراءه {{ parseInt(SingleSim['selling-count']) }} مرة</p>
                      <!-- الكمية -->
                      <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-md-6 col-6">
                          <p class="mb-0 fw-900">الكمية</p>
                        </div>
                        <div class="col-md-6 col-6" dir="rtl">
                          <div class="quantity-field">
                            <button
                              @click="decrement()"
                              class="value-button decrease-button rounded-0"
                              title="Azalt"
                            >
                              -
                            </button>
                            <input class="number" v-model="qty" />
                            <button
                              @click="increment()"
                              class="value-button increase-button rounded-0"
                              title="Arrtır"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <!-- السعر -->
                      <div
                        class="row d-flex justify-content-lg-center mt-lg-2 justify-content-center align-items-center"
                      >
                        <div class="col-6 col-md-6 col-lg-4">
                          <p class="mb-0">السعر</p>
                          <p class="mb-0 fw-900">{{ total }} ر.س</p>
                        </div>
                        <div class="col-6 col-md-6 col-lg-8" dir="ltr">
                          <button
                            class="btn my-3 mx-1 border-0"
                            @click="AddToCart()"
                            style="
                              background-color: #ffbe03;
                              border-radius: 12px;
                              width: 100%;
                              font-size: 18px;
                            "
                          >
                            اضف الي العربة
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- img -->
                  <div
                    class="col-md-12 col-lg-6 d-flex justify-content-center mt-4 mt-lg-4 mb-lg-4"
                  >
                    <div class="text-center">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="@/assets/images/info-img.png"
                        alt="privacy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
export default {
  props: {
    SingleSim: Object
  },
  data() {
    return {
      qty: ref(0),
      price: this.SingleSim.price,
      sim_id: '' // Initialize sim_id to null
    }
  },
  computed: {
    total() {
      return this.qty * this.price
    }
  },
  watch: {
    SingleSim: {
      immediate: true, // Run the watcher immediately on component mount
      handler(newVal) {
        if (newVal) {
          this.price = newVal.price
          this.sim_id = this.SingleSim.id
        }
      }
    }
  },
  methods: {
    increment() {
      console.log('run')
      this.qty += 1
    },
    decrement() {
      console.log('run')
      if (this.qty === 0) {
        alert('no result')
      } else {
        this.qty -= 1
      }
    },
    async AddToCart() {
      let token = localStorage.getItem('token')
      console.log('add to cart process')
      await axios
        .post(
          `/add-cart`,
          {
            qty: this.qty,
            sim_id: this.sim_id
          },
          {
            headers: {
              Authorization: 'Bearer ' + token
            }
          }
        )
        .then((res) => {
          console.log(res)
          alert('add to card success')
        })
        .catch((err) => {
          console.log(err)
          alert('some thing went wrong')
        })
      // setTimeout(() => {
      //   this.name = "";
      //   this.number = "";
      //   this.v$.number.$errors[0].$message = "";
      //   this.v$.name.$errors[0].$message = "";
      // });
      // if (!this.v$.$error) {
      //   if (result.data.success == true) {
      //     console.log('data true provider added success')
      //     this.$swal.fire({
      //       toast: true,
      //       icon: 'success',
      //       title: 'تم الاضافة بنجاح ',
      //       animation: false,
      //       position: 'top-right',
      //       showConfirmButton: false,
      //       timer: 3000,
      //       timerProgressBar: true,
      //       didOpen: (toast) => {
      //         toast.addEventListener('mouseenter', this.$swal.stopTimer)
      //         toast.addEventListener('mouseleave', this.$swal.resumeTimer)
      //       }
      //     })
      //     this.AddDoctorOpen = false
      //     this.loadproviders()
      //   } else {
      //     console.log('data false')
      //   }
      // }
      //  else {
      //   console.log('form validated faild')
      // }
    }
  },
  created() {
    if (this.SingleSim && this.SingleSim.id) {
      this.sim_id = this.SingleSim.id
    }
  }
}
</script>

<style scoped>
.quantity-field {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  /* margin: 0 auto; */
}

.quantity-field .value-button {
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 100%;
  padding: 0;
  background: #eee;
  outline: none;
  cursor: pointer;
}

.quantity-field .value-button:hover {
  background: rgb(230, 230, 230);
}

.quantity-field .value-button:active {
  background: rgb(210, 210, 210);
}

.quantity-field .decrease-button {
  margin-right: -4px;
  border-radius: 8px 0 0 8px;
}

.quantity-field .increase-button {
  margin-left: -4px;
  border-radius: 0 8px 8px 0;
}

.quantity-field .number {
  display: inline-block;
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 100%;
  line-height: 40px;
  font-size: 11pt;
  box-sizing: border-box;
  background: white;
  font-family: calibri;
}

.quantity-field .number::selection {
  background: none;
}
</style>
