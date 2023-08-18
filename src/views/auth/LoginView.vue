<template>
  <div>
    <div class="bg-header" style="direction: rtl">
      <div class="container-fluid">
        <div class="row align-items-center m-0 p-0">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper login">
      <main role="main" class="main-content">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="row align-items-center mb-2">
                <div class="col">
                  <!-- modal login -->
                  <transition name="fade">
                    <div class="modalpopup" v-if="show">
                      <!-- <div class="modal__backdrop" @click="closeModal()"> -->
                      <div class="modal__backdrop">
                        <div class="modal__dialog">
                          <div class="modal__body">
                            <slot name="body" />
                            <div>
                              <!-- body -->
                              <div>
                                <!-- LOGIN -->
                                <form v-if="phonInput">
                                  <!-- header -->
                                  <div class="d-inline">
                                    <h5 class="fw-bold text-center" style="color: #1176c9">
                                      هيا لنبدأ
                                    </h5>
                                    <p class="text-center text-dark">
                                      ادخل رقم الهاتف لتسجيل الدخول
                                    </p>
                                  </div>
                                  <!-- رقم الهاتف -->
                                  <div class="row g-3 align-items-center justify-content-center">
                                    <div class="col-auto m-3" style="width: 100%">
                                      <div dir="ltr">
                                        <!-- <vue-tel-input
                                          v-model="number"
                                          :defaultCountry="'eg'"
                                          mode="international"
                                          @input="number = $event"
                                          class="form-control"
                                        ></vue-tel-input> -->
                                        <MazPhoneNumberInput
                                          v-model="number"
                                          show-code-on-list
                                          :translations="{
                                            countrySelector: {
                                              placeholder: '',
                                              error: 'Choose country',
                                              searchPlaceholder: 'Search a country'
                                            },
                                            phoneInput: {
                                              placeholder: '',
                                              example: ''
                                            }
                                          }"
                                          color="info"
                                          :preferred-countries="['EG', 'SA', 'TR', 'US', 'GB']"
                                          :ignored-countries="['AC']"
                                          default-country-code="EG"
                                          @update="results = $event"
                                          :success="results?.isValid"
                                        />
                                        <!-- <button @click="submitPhoneNumber">Submit</button>
                                        <p>Results: {{ results }}</p> -->
                                      </div>
                                      <!-- <input
                                        dir="rtl"
                                        type="text"
                                        v-model="number"
                                        class="form-control"
                                        placeholder="رقم الهاتف"
                                      /> -->
                                      <span class="text-danger">{{ ErrorMsg }}</span>
                                    </div>
                                  </div>
                                  <!-- footer -->
                                  <div class="modal__footer text-center">
                                    <button
                                      class="btn"
                                      type="button"
                                      @click="Login()"
                                      style="background: #ffbe03; color: black"
                                    >
                                      <span
                                        v-if="loading"
                                        class="spinner-border spinner-border-sm"
                                        role="status"
                                        aria-hidden="true"
                                        disabled
                                      ></span>
                                      تسجيل دخول
                                    </button>
                                    <button
                                      class="btn border-0"
                                      type="button"
                                      :disabled="disabled"
                                      @click="closeModal()"
                                    >
                                      اغلاق
                                    </button>
                                    <br />
                                  </div>
                                </form>

                                <!-- OTP -->
                                <form v-if="OTP">
                                  <!-- header -->
                                  <div class="d-inline">
                                    <h5 class="fw-bold text-center" style="color: #322a7d">
                                      <!-- header -->
                                      <div class="d-inline">
                                        <h5 class="fw-bold text-center" style="color: #322a7d">
                                          هيا لنبدأ
                                        </h5>
                                        <p class="text-center">تم ارسال الكود الي الرقم المسجل</p>
                                        <input
                                          class="text-center"
                                          style="outline: none; border: none; direction: rtl"
                                          type="text"
                                          v-model="number"
                                        /><br />
                                        <!-- <input
                                          style="outline: none; border: none; direction: rtl"
                                          type="text"
                                          v-model="push_token"
                                        /> -->
                                      </div>
                                    </h5>
                                    <p class="text-end">رمز التأكيد</p>
                                  </div>
                                  <!-- OTP -->
                                  <div class="row g-3 align-items-center justify-content-center">
                                    <div class="col-auto m-3" style="width: 100%">
                                      <div class="d-flex justify-content-center">
                                        <v-otp-input
                                          ref="otpInput"
                                          v-model:value="verification_code"
                                          input-classes="otp-input"
                                          separator="-"
                                          :num-inputs="4"
                                          :should-auto-focus="true"
                                          input-type="letter-numeric"
                                          :conditionalClass="['one', 'two', 'three', 'four']"
                                          :placeholder="['*', '*', '*', '*']"
                                          @on-change="handleOnChange"
                                          @on-complete="handleOnComplete"
                                        />
                                      </div>
                                      <!-- <input
                                        type="text"
                                        dir="rtl"
                                        class="form-control"
                                        placeholder="تاكيد رقم الهاتف"
                                        v-model="verification_code"
                                      /> -->
                                    </div>
                                  </div>
                                  <!-- footer -->
                                  <div class="modal__footer text-center">
                                    <button class="btn" type="button" @click="Verify()">
                                      تاكيد
                                    </button>
                                    <button class="btn" type="button" @click="closeModal()">
                                      اغلاق
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
// import { VueTelInput } from 'vue3-tel-input'
import 'maz-ui/css/main.css'
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import { ref } from 'vue'
import axios from 'axios'
import setAuthHeader from '../../utils/setAuthHeader'
export default {
  name: 'LoginCom',
  components: {
    MazPhoneNumberInput
  },
  setup() {
    const number = ref('')
    const results = ref('')

    const submitPhoneNumber = () => {
      // Process the phoneNumber value and update results
      // For example:
      results.value = `Submitted phone number: ${number.value}`
    }

    return {
      number,
      results,
      submitPhoneNumber
    }
  },
  // components: { VueTelInput },
  // setup() {
  //   const phone = ref('');

  //   return {
  //     phone,
  //   };
  // },
  data() {
    return {
      disabled: false,
      loading: false,
      ErrorMsg: '',
      show: true,
      phonInput: true,
      OTP: false,
      // number: '',
      verification_code: '',
      otpInput: null,
      push_token: 'test'
    }
  },
  methods: {
    // handleNumberInput(value) {
    //   console.log('number completed: ', value)
    // },
    handleOnComplete(value) {
      console.log('OTP completed: ', value)
    },
    handleOnChange(value) {
      console.log('OTP changed: ', value)
    },
    clearInput() {
      this.otpInput.clearInput()
    },
    fillInput(value) {
      console.log(value)
      this.otpInput.fillInput(value)
    },
    closeModal() {
      this.show = false
      this.number = ''
      document.querySelector('body').classList.remove('overflow-hidden')
      this.$router.push({ name: 'home' })
    },
    async Login() {
      this.loading = true
      this.disabled = true
      console.log('login user')
      const credentaials = {
        number: this.number
      }
      await axios
        .post(`/auth`, credentaials)
        .then((res) => {
          console.log(res)
          console.log(res.data.message)
          if (res.status == 200) {
            alert(res.data.message)
            this.OTP = true
            this.phonInput = false
            this.loading = false
            this.disabled = false
          } else if (res.status == 401) {
            alert('خطأ اثناء تسجيل الدخول')
          } else {
            alert('خطأ غير متوقع أثناء تسجيل الدخول')
            this.show = false
            this.loading = false
            this.disabled = false
          }
        })
        .catch((err) => {
          console.log(err)
          if (err.response.status == 422) {
            alert('خطأ اثناء تسجيل الدخول')
          }
          this.ErrorMsg = err.response.data.message
          setTimeout(() => {
            this.ErrorMsg = ''
          }, 2000)
          this.phonInput = true
          this.loading = false
          this.disabled = false
        })
    },
    async Verify() {
      console.log('Verify user')
      const credentaials = {
        number: this.number,
        verification_code: this.verification_code,
        push_token: this.push_token
      }
      await axios
        .post(`/verify`, credentaials)
        .then((res) => {
          this.OTP = false
          this.show = false
          this.phonInput = false
          this.loading = false
          this.disabled = false
          console.log(res)
          localStorage.setItem('token', res.data.token)
          // localStorage.setItem('user', JSON.stringify(res.data))
          setAuthHeader(res.data.token)
          this.$router.push({ name: 'insert-data' })
        })
        .catch((err) => {
          console.log(err.response)
          alert(err.response.data.message)
          // this.$router.push({ name: 'servererror' })
        })
      this.loading = true
      this.disabled = true
    }
  },
  mounted() {
    console.log('loginview')
    let user = localStorage.getItem('token')
    if (user) {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style>
.login .otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
/* Background colour of an input field with value */
.login .otp-input.is-complete {
  background-color: #e4e4e4;
}
.login .otp-input::-webkit-inner-spin-button,
.login .otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.login input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
@media only screen and (max-width: 600px) {
  .login .bg-header {
    background-image: url('@/assets/images/header.png');
    background-position: right; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: initial;
  }
}
@media only screen and (min-width: 1200px) {
  .bg-header {
    background-image: url('@/assets/images/header.png');
    background-position: left; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: initial;
    height: 100vh;
    overflow-y: 0;
  }
}
.login .modalpopup {
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
.login .modalpopup > div {
  background-color: #fff;
  padding: 50px 8px;
  border-radius: 10px;
}
.login .modalpopup > div .form-control {
  color: #000000;
  background-color: #ced4da;
  border-radius: 12px;
}
.login .modalpopup > div .form-control:focus {
  background-color: #ced4da;
  border-color: #8a877b00;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(173, 157, 91, 0);
}
@media only screen and (min-width: 1200px) {
  .login .modalpopup > div {
    background-color: #fff;
    padding: 50px;
    border-radius: 10px;
    width: 34%;
  }
}
</style>
