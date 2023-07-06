<template>
  <div class="register">
    <div class="container-fluid w-auto vh-100 bg-light">
      <div class="row vh-100">
        <!-- col-7 form-->
        <div class="col-lg-6 m-0 p-0 align-self-center">
          <div class="row p-0 m-auto justify-content-center">
            <div class="col-md-10">
              <form class="form-inline" @submit.prevent="Register()">
                <div class="row">
                  <!-- name -->
                  <div class="row mb-3">
                    <!-- الاسم الاول -->
                    <div class="col-md-6">
                      <label class="mb-1 text-purple" for="fname">full_name</label>
                      <div class="input-group mb-2 mr-sm-2">
                        <input type="text" class="form-control" v-model="full_name" id="fname" />
                      </div>
                    </div>
                  </div>
                  <!-- email -->
                  <div class="row">
                    <div class="col-md-12 mb-3">
                      <label class="mb-1 text-purple" for="email">email</label>
                      <div class="input-group mb-2 mr-sm-2">
                        <input type="email" v-model="email" class="form-control" id="email" />
                      </div>
                    </div>
                  </div>
                  <!-- password -->
                  <div class="row">
                    <!-- كلمة المرور -->
                    <div class="col-md-6 mb-3">
                      <label class="mb-1 text-purple" for="password">password</label>
                      <div class="input-group mb-2 mr-sm-2">
                        <input
                          type="password"
                          v-model="password"
                          class="form-control"
                          id="password"
                        />
                      </div>
                    </div>
                    <!-- تاكيد كلمة المرور -->
                    <div class="col-md-6">
                      <label class="mb-1 text-purple" for="confirmPass"
                        >password_confirmation</label
                      >
                      <div class="input-group mb-2 mr-sm-2">
                        <input
                          type="password"
                          v-model="password_confirmation"
                          class="form-control"
                          id="confirmPass"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- phone -->
                  <div class="row">
                    <div class="col-md-12 mb-3">
                      <label class="mb-1 text-purple" for="phone">phone</label>
                      <div class="input-group mb-2 mr-sm-2">
                        <input type="text" v-model="phone" class="form-control" id="phone" />
                      </div>
                    </div>
                  </div>
                  <!-- phone_code -->
                  <div class="row">
                    <div class="col-md-12 mb-3">
                      <label class="mb-1 text-purple" for="phone_code">phone_code</label>
                      <div class="input-group mb-2 mr-sm-2">
                        <input
                          type="text"
                          v-model="phone_code"
                          class="form-control"
                          id="phone_code"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- انشاء حساب -->
                  <div class="d-flex justify-content-end">
                    <div class="col-md-4 justify-content-start">
                      <button style="width: 100%" class="btn text-white">إنشاء حساب</button>
                      <div class="text-center mt-lg-2">
                        <span class="fs-10 fw-bold"
                          >Have an account?
                          <router-link
                            class="text-decoration-none text-yellow"
                            :to="{ name: 'login' }"
                            >Login</router-link
                          ></span
                        >
                        <button type="submit" class="btn text-purple fs-10 fw-bold cairo">
                          Create New Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <transition name="fade">
                <div class="modalpopup" v-if="show">
                  <div class="modal__backdrop">
                    <div class="modal__dialog">
                      <div class="modal__body">
                        <slot name="body" />
                        <div class="">
                          <div>
                            <form @submit.prevent="verify()">
                              <!-- header -->
                              <div class="d-inline">
                                <h5 class="fw-bold text-center" style="color: #322a7d">
                                  <!-- header -->
                                  <div class="d-inline">
                                    <h5 class="fw-bold text-center" style="color: #322a7d">
                                      هيا لنبدأ
                                    </h5>
                                    <p class="text-center">تم ارسال الكود الي الرقم المسجل</p>
                                    <p>+5222147810004</p>
                                  </div>
                                </h5>
                                <p class="text-center">رمز التأكيد</p>
                              </div>
                              <!-- رقم الهاتف -->
                              <div class="row g-3 align-items-center justify-content-center">
                                <div class="col-auto m-3" style="width: 100%">
                                  <input
                                    type="text"
                                    dir="rtl"
                                    class="form-control"
                                    placeholder="phone"
                                    v-model="phone"
                                  />
                                  <input
                                    type="text"
                                    dir="rtl"
                                    class="form-control"
                                    placeholder="phone_code"
                                    v-model="phone_code"
                                  />
                                  <input
                                    type="text"
                                    dir="rtl"
                                    class="form-control"
                                    placeholder="code"
                                    v-model="code"
                                  />
                                </div>
                              </div>
                              <!-- footer -->
                              <div class="modal__footer text-center">
                                <button class="btn" type="button" @click="verify_Phone()">
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
        <!-- col-5 img -->
        <div class="col-lg-6 containerr bg-black m-0 p-0">
          <div class="containerr">
            <img src="@/assets/images/login.png" class="vh-100" alt="Nature" style="width: 100%" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import setAuthHeader from '@/utils/setAuthHeader'
import axios from 'axios'
export default {
  name: 'LoginCom',
  data() {
    return {
      show: false,
      phonInput: false,

      full_name: '',
      email: '',
      password: '',
      password_confirmation: '',
      phone: '',
      phone_code: '',

      code: ''
    }
  },
  // mounted() {
  //   let user = localStorage.getItem('user')
  //   if (user) {
  //     this.$router.push({ name: 'client' })
  //   }
  // },
  methods: {
    closeModal() {
      this.show = false
      document.querySelector('body').classList.remove('overflow-hidden')
    },
    // openModal() {
    //   this.show = true
    //   document.querySelector('body').classList.add('overflow-hidden')
    // },
    async Register() {
      const credentaials = {
        full_name: this.full_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
        phone: this.phone,
        phone_code: this.phone_code
      }
      console.log('form validated Succesfuly')
      await axios
        .post(`http://lawyer.phpv8.aait-d.com/api/client_web/register`, credentaials, {})
        .then((res) => {
          console.log(res)
          this.show = true
        })
        .catch((error) => {
          if (error.response) {
            // Handle server error
            alert(error.response.data)
            alert(error.response.status)
            alert(error.response.headers)
          } else if (error.request) {
            // Handle network error
            alert(error.request)
          } else {
            // Handle other errors
            alert('Error:', error.message)
          }
        })
    },
    async verify_Phone() {
      console.log('veryfy code process')
      const verify_Phone = {
        phone: this.phone,
        phone_code: this.phone_code,
        code: this.code
      }
      await axios
        .post(`http://lawyer.phpv8.aait-d.com/api/client_web/verify_Phone`, verify_Phone)
        .then((res) => {
          console.log(res)
          localStorage.setItem('token', res.data.data.token)
          localStorage.setItem('user', JSON.stringify(res.data))
          setAuthHeader(res.data.token)
          console.log('veryfy code success')
          this.$router.push({ name: 'client' })
        })
        .catch((error) => {
          if (error.response) {
            // Handle server error
            alert(error.response.data)
            alert(error.response.status)
            alert(error.response.headers)
          } else if (error.request) {
            // Handle network error
            alert(error.request)
          } else {
            // Handle other errors
            console.log('Error:', error.message)
          }
        })
    }
  }
}
</script>

<style scoped>
/*col-5 bg-img text */
.containerr {
  position: relative;
  font-family: Arial;
}
.containerr img {
  object-fit: fill;
}
.text-block {
  position: absolute;
  bottom: 60px;
  /* background-color: black; */
  color: white;
  padding-left: 20px;
  padding-right: 20px;
}
/* col-8 input forms */
@media only screen and (max-width: 600px) {
  .containerr {
    display: none;
  }
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* icon */
.input-group-text {
  display: flex;
  align-items: center;
  padding: 0rem 0.75rem !important;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.5;
  color: #433472;
  text-align: center;
  white-space: nowrap;
  background-color: #ffffff;
  border: 1px solid #c9c9c9;
  border-radius: 0rem;
  border-bottom-right-radius: 7px !important;
  border-top-right-radius: 7px !important;
}
/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

/* popup */

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
  z-index: 1;
}
.modalpopup > div {
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
}
.modalpopup > div .form-control {
  color: #000000;
  background-color: #ced4da;
  border-radius: 12px;
}
.modalpopup > div .form-control:focus {
  background-color: #ced4da;
  border-color: #8a877b00;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(173, 157, 91, 0);
}
@media only screen and (min-width: 1200px) {
  .modalpopup > div {
    background-color: #fff;
    padding: 50px;
    border-radius: 10px;
    width: 34%;
  }
}
</style>
