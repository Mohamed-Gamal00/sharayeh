<template>
  <div>
    <div class="wrapper">
      <main role="main" class="main-content">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="row align-items-center mb-2">
                <div class="col">
                  <button
                    @click="openModal()"
                    type="button"
                    class="btn rounded-3 fw-900"
                    style="background-color: rgba(255, 190, 3, 0.2); color: #ff9d0a; width: 100%"
                  >
                    اطلب الان
                  </button>
                  <!-- modal paymaent -->
                  <transition name="fade">
                    <!-- personal info -->
                    <div class="modalpopup" v-if="show">
                      <!-- <div class="modal__backdrop" @click="closeModal()"> -->
                      <div class="modal__backdrop">
                        <div class="modal__dialog">
                          <div class="modal__body">
                            <slot name="body" />
                            <div class="">
                              <!-- body -->
                              <div>
                                <!-- البيانات الشخصية -->
                                <form v-if="phonInput">
                                  <!-- header -->
                                  <div class="d-inline">
                                    <h5 class="fw-bold text-center" style="color: #1176c9">
                                      البيانات الشخصية
                                    </h5>
                                    <p class="text-center text-dark" style="font-weight: 400">
                                      ادخل البيانات الشخصية الخاصه بك لاتمام طلب الدفع
                                    </p>
                                  </div>
                                  <!-- الاسم -->
                                  <div class="row g-3 align-items-center justify-content-center">
                                    <div class="col-auto m-3" style="width: 100%">
                                      <label class="mb-2" for="name">الاسم</label>
                                      <input
                                        dir="rtl"
                                        v-model="name"
                                        type="text"
                                        id="name"
                                        class="form-control"
                                      />
                                    </div>
                                  </div>
                                  <!-- رقم الهاتف -->
                                  <div class="row g-3 align-items-center justify-content-center">
                                    <div class="col-auto m-3" style="width: 100%">
                                      <label class="mb-2" for="phone">رقم الهاتف</label>
                                      <input
                                        dir="rtl"
                                        type="text"
                                        v-model="phone"
                                        id="phone"
                                        class="form-control"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>
                                  <!-- العنوان -->
                                  <div class="row g-3 align-items-center justify-content-center">
                                    <div class="col-auto m-3" style="width: 100%">
                                      <label for="address" class="mb-2">العنوان</label>
                                      <input
                                        dir="rtl"
                                        type="text"
                                        v-model="address"
                                        id="address"
                                        class="form-control"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>
                                  <!-- footer -->
                                  <div class="modal__footer text-center mt-3">
                                    <button
                                      class="btn"
                                      type="button"
                                      @click="Payment()"
                                      style="
                                        background: #ffbe03;
                                        color: black;
                                        width: 100%;
                                        border-radius: 12px;
                                        border: 0;
                                      "
                                    >
                                      <span
                                        v-if="loading"
                                        class="spinner-border spinner-border-sm"
                                        role="status"
                                        aria-hidden="true"
                                        disabled
                                      ></span>
                                      تأكيد الطلب
                                    </button>
                                    <button
                                      class="btn border-0 mt-2"
                                      type="button"
                                      :disabled="disabled"
                                      @click="closeModal()"
                                    >
                                      اغلاق
                                    </button>
                                    <br />
                                  </div>
                                </form>

                                <form v-if="Pay">
                                  <!-- header -->
                                  <div class="d-inline">
                                    <div class="d-inline">
                                      <h5 class="fw-bold text-center mb-3" style="color: #1176c9">
                                        طرق الدفع
                                      </h5>
                                    </div>
                                  </div>
                                  <!-- تحويل بنكي -->
                                  <div class="row g-3 align-items-center justify-content-center">
                                    <div class="col-auto m-3" style="width: 100%">
                                      <p class="fw-bold">تحويل بنكي</p>
                                      <div class="radio-group">
                                        <input
                                          class="radio-input"
                                          name="radio-group"
                                          id="radio1"
                                          value="0"
                                          type="radio"
                                          v-model="userType"
                                        />
                                        <label class="radio-label" for="radio1">
                                          <span class="radio-inner-circle"></span>
                                          <img src="../../../assets/images/bank1.png" alt="" />
                                          البنك الأهلي
                                        </label>
                                        <input
                                          class="radio-input"
                                          name="radio-group"
                                          id="radio2"
                                          value="1"
                                          type="radio"
                                          v-model="userType"
                                        />
                                        <label class="radio-label" for="radio2">
                                          <span class="radio-inner-circle"></span>
                                          <img src="../../../assets/images/bank2.png" alt="" />
                                          بنك فيصل الاسلامي
                                        </label>
                                      </div>
                                    </div>
                                  </div>

                                  <p class="fw-bold">اضافة بطاقة</p>
                                  <div class="row g-3 align-items-center justify-content-center">
                                    <div class="col-6">
                                      <input
                                        dir="rtl"
                                        type="text"
                                        placeholder="الاسم"
                                        class="form-control"
                                      />
                                    </div>
                                    <div class="col-6">
                                      <input
                                        dir="rtl"
                                        type="text"
                                        placeholder="رقم البطاقة"
                                        class="form-control"
                                      />
                                    </div>
                                    <div class="col-6">
                                      <input
                                        dir="rtl"
                                        type="text"
                                        placeholder="رمز التحقق خلف البطاقة"
                                        class="form-control"
                                      />
                                    </div>
                                    <div class="col-6">
                                      <input
                                        dir="rtl"
                                        type="text"
                                        placeholder="تاريخ الإنتهاء"
                                        class="form-control"
                                      />
                                    </div>
                                  </div>
                                  <!-- footer -->
                                  <div class="modal__footer text-center mt-4">
                                    <button
                                      class="btn fw-bold m-2"
                                      type="button"
                                      @click="Payment()"
                                    >
                                      تأكيد الدفع
                                    </button>
                                    <button
                                      class="btn fw-bold m-2"
                                      type="button"
                                      @click="closeModal()"
                                    >
                                      الدفع عند الاستلام
                                    </button>
                                    <br />
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PersonalInfo',
  data() {
    return {
      userType: '',
      disabled: false,
      name: '',
      phone: '',
      address: '',
      loading: false,
      show: false,
      phonInput: false,
      Pay: false
    }
  },
  /* get */
  methods: {
    closeModal() {
      this.show = false
      document.querySelector('body').classList.remove('overflow-hidden')
    },
    openModal() {
      this.show = true
      this.phonInput = true
      this.Pay = false
      document.querySelector('body').classList.add('overflow-hidden')
    },
    async Payment() {
      this.loading = true
      this.disabled = true
      console.log('payment run')
      let token = localStorage.getItem('token')
      await axios
        .post(
          `/checkout`,
          {
            name: this.name,
            address: this.address,
            phone: this.phone
          },
          {
            headers: {
              Authorization: 'Bearer ' + token,
              accept: 'Application/json'
            }
          }
        )
        .then((res) => {
          console.log(res)
          alert(res.data.message)

          // this.$emit('update:profileData', {
          //   ...this.profileData,
          //   name: this.name
          // })
        })
        .catch((err) => {
          console.log(err)
        })
      this.loading = false
      this.disabled = false
      // this.loading = true
      // this.disabled = true
      // setTimeout(() => {
      //   this.Pay = false
      //   this.phonInput = false
      //   ;(this.show = false), (this.loading = false)
      //   this.disabled = false
      // }, 500)
    }
    // async insertData() {
    //   this.loading = true
    //   console.log('insert user data')
    //   let token = localStorage.getItem('token')
    //   await axios
    //     .post(
    //       `/insertData`,
    //       {
    //         name: this.name,
    //         image: this.image
    //       },
    //       {
    //         headers: {
    //           Authorization: 'Bearer ' + token,
    //           'Content-Type': 'multipart/form-data',
    //           accept: 'Application/json'
    //         }
    //       }
    //     )
    //     .then((res) => {
    //       console.log(res)
    //       alert(res.data.message)

    //       this.$emit('update:profileData', {
    //         ...this.profileData,
    //         name: this.name
    //       })
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //       alert(err.response.data.message)
    //       this.Error = err.response.data.message
    //       setTimeout(() => {
    //         this.Error = ''
    //       }, 3000)
    //     })
    //   this.loading = false
    // }
  }
}
</script>


<style scoped>
.modalpopup {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(27, 27, 27, 0.212);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.modalpopup > div {
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
  margin: 10px;
}
.modalpopup > div .form-control {
  color: #000000;
  background-color: #ffffff;
  border-radius: 12px;
  border: 1;
}
.modalpopup > div .form-control:focus {
  background-color: #ffffff;
  border-color: #8a877b;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(173, 157, 91, 0);
}
.modal__footer button {
  background-color: #ffbe0333;
  width: 150px;
  font-size: 15px;
  transition: all 0.3s ease-in-out;
}
.modal__footer button:hover {
  background-color: #ffbe03;
  width: 150px;
  font-size: 15px;
}
.modal__footer button:focus {
  background-color: #ffbe03;
}
input::placeholder {
  font-weight: bold;
  opacity: 0.5;
  color: #221f1f;
  font-size: 12px;
}
form label {
  font-weight: bold;
  font-size: 12px;
}
@media only screen and (max-width: 600px) {
  input::placeholder {
    font-size: 10px;
  }
}
@media only screen and (min-width: 1200px) {
  .modalpopup > div {
    background-color: #fff;
    padding: 50px;
    border-radius: 10px;
    width: 34%;
  }
  /* .modal__footer button {
    background-color: #ffbe03;
    width: 150px;
    font-size: 15px;
  } */
}

/* radio buttom */
.radio-group {
  display: flex;
  flex-direction: column;
}
.radio-group label {
  font-weight: bold;
  color: #a7a7a7;
  font-size: 12px;
}

.radio-label {
  display: flex;
  align-items: center;
  padding: 0.5em;
  margin-bottom: 0.5em;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 0;
  transition: background-color 0.2s, border-color 0.2s;
}

.radio-label:hover {
  background-color: #e6e6e6;
}

.radio-input {
  position: absolute;
  opacity: 0;
}

.radio-input:checked + .radio-label {
  border-color: #ffbe03;
  border-radius: 12px;
  padding: 0;
}

.radio-input:focus + .radio-label {
  outline: 1px solid rgba(10, 8, 3, 0);
}

.radio-inner-circle {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid #888;
  border-radius: 50%;
  margin-right: 0.5em;
  transition: border-color 0.2s;
  position: relative;
}

.radio-label:hover .radio-inner-circle {
  border-color: #555;
}

.radio-input:checked + .radio-label .radio-inner-circle {
  border-color: #ffbe03;
}

.radio-input:checked + .radio-label .radio-inner-circle::after {
  content: '';
  display: block;
  width: 0.5em;
  height: 0.5em;
  background-color: #ffbe03;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
