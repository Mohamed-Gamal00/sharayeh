<template>
  <!-- تواصل معنا -->
  <div class="container-fluid mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10" style="background-color: #2c96e6; border-radius: 24px">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-50">
            <div class="col-lg-12 col-xl-11">
              <div class="card-body p-0" style="direction: ltr">
                <div
                  class="row justify-content-center py-5"
                  style="background-color: #393e4600; border-radius: 24px"
                >
                  <div class="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                    <form
                      name="contact"
                      method="post"
                      class="mx-1 mx-md-4 input-icons"
                      style="direction: rtl"
                    >
                      <div class="row">
                        <!--  الاسم الاول -->
                        <div class="col-md-6">
                          <div class="d-flex flex-row align-items-center">
                            <div class="form-outline flex-fill mb-0">
                              <FontAwesome icon="user" class="icon" />

                              <input
                                type="text"
                                placeholder="الاسم الاول"
                                class="form-control"
                                v-model="contact.f_name"
                              />
                              <span class="erroe-feedbak" v-if="v$.contact.f_name.$error">{{
                                v$.contact.f_name.$errors[0].$message
                              }}</span>
                            </div>
                          </div>
                        </div>
                        <!-- l_name -->
                        <div class="col-md-6">
                          <div class="d-flex flex-row align-items-center">
                            <div class="form-outline flex-fill mb-0">
                              <FontAwesome icon="envelope-open-text" class="icon" />
                              <input
                                type="text"
                                placeholder="الاسم الثاني"
                                class="form-control"
                                v-model="contact.l_name"
                              />
                              <span class="erroe-feedbak" v-if="v$.contact.l_name.$error">{{
                                v$.contact.l_name.$errors[0].$message
                              }}</span>
                            </div>
                          </div>
                        </div>

                        <!-- البريد الالكتروني -->
                        <div class="col-md-6">
                          <div class="d-flex flex-row align-items-center">
                            <div class="form-outline flex-fill mb-0">
                              <FontAwesome icon="envelope" class="icon" />
                              <input
                                type="email"
                                placeholder="البريد الالكتروني"
                                class="form-control"
                                v-model="contact.email"
                              />
                              <span class="erroe-feedbak" v-if="v$.contact.email.$error">{{
                                v$.contact.email.$errors[0].$message
                              }}</span>
                            </div>
                          </div>
                        </div>
                        <!-- رقم الهاتف -->
                        <div class="col-md-6">
                          <div class="d-flex flex-row align-items-center">
                            <div class="form-outline flex-fill mb-0">
                              <FontAwesome icon="phone" class="icon" />
                              <input
                                type="number"
                                placeholder="رقم الجوال"
                                class="form-control"
                                v-model="contact.number"
                              />
                              <span class="erroe-feedbak" v-if="v$.contact.number.$error">{{
                                v$.contact.number.$errors[0].$message
                              }}</span>
                            </div>
                          </div>
                        </div>
                        <!-- الرسالة -->
                        <div class="d-flex flex-row align-items-center">
                          <div class="form-outline flex-fill mb-0">
                            <FontAwesome icon="comments" class="icon" />

                            <textarea
                              class="form-control borderstyle"
                              id="textAreaExample1"
                              placeholder="الرسالة"
                              style="height: 40px"
                              rows="4"
                              v-model="contact.message"
                            ></textarea>
                            <span class="erroe-feedbak" v-if="v$.contact.message.$error">{{
                              v$.contact.message.$errors[0].$message
                            }}</span>
                          </div>
                        </div>
                      </div>
                      <!-- ارسال -->
                      <div class="text-center mb-3 mt-4 mb-lg-4zzz">
                        <div v-if="loading" class="spinner-border text-dark" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                        <button
                          v-else
                          style="
                            background-color: #ffbe03;
                            border: none;
                            border-radius: 12px;
                            width: 100%;
                          "
                          @click="contactus()"
                          type="button"
                          class="btn text-white text-center px-4"
                        >
                          إرسال
                        </button>
                      </div>
                    </form>
                  </div>
                  <div
                    class="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2"
                  >
                    <div
                      class="card border-0 text-white text-end contact-Title bg-transparent"
                      style="width: 100%"
                    >
                      <div class="card-body" style="padding: 0px 15px">
                        <strong>
                          <h2
                            class="card-title text-white lh-lg"
                            style="font-weight: 900 !important; font-size: 29px !important"
                          >
                            بسهولة الآن يمكنك ارسال طلبك وسيتم
                          </h2>
                          <h2>
                            <span
                              class=""
                              style="
                                color: #ffbe03;
                                font-weight: 900 !important;
                                font-size: 29px !important;
                              "
                              >التواصل معك</span
                            >
                          </h2>
                        </strong>
                        <p class="card-text fw-bold mt-5" style="color: #ffffff">
                          أرسل طلبك وسيتم الرد عليك بأقصى سرعة ممكنة
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default {
  name: 'SharedCom',

  data() {
    return {
      loading: false,
      v$: useValidate(),
      contact: {
        f_name: '',
        l_name: '',
        email: '',
        number: '',
        message: ''
      }
    }
  },
  validations() {
    return {
      contact: {
        f_name: { required },
        email: { required, email },
        number: { required },
        l_name: { required },
        message: { required }
      }
    }
  },
  methods: {
    async contactus() {
      this.loading = true
      this.v$.$validate()
      if (!this.v$.$error) {
        await axios
          .post(`/contact_us`, this.contact)
          .then((res) => {
            if (res.data.success == true) {
              this.$swal.fire({
                icon: 'success',
                title: 'تم...',
                text: 'عملية تسجيل ناجحة',
                footer: '<p>تم تسجيل ردك بنجاح</p>',
                timer: 2000
              })
              setTimeout(() => {
                this.contact.f_name = ''
                this.contact.number = ''
                this.contact.email = ''
                this.contact.l_name = ''
                this.contact.message = ''
                ;(this.v$.contact.f_name.$errors[0].$message = ''),
                  (this.v$.contact.number.$errors[0].$message = ''),
                  (this.v$.contact.l_name.$errors[0].$message = ''),
                  (this.v$.contact.email.$errors[0].$message = ''),
                  (this.v$.contact.message.$errors[0].$message = '')
              }, 2000)
            }
          })
          .catch((err) => {
            alert(err)
          })
      } else {
        // console.log(res);
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'عملية تسجيل خاطئة',
          footer: '<p>املئ البيانات بطريقة صحيحة</p>',
          timer: 2000
        })
      }
      this.loading = false
    }
  }
}
</script>

<style scoped>
.form-control {
  border: none;
  padding: 7px 35px !important;
  background-color: #ffffff40;
  border-radius: 12px !important;
}
.form-control:focus {
  color: #ffffff;
  background-color: #21252996;
  border-color: #474747 !important;
  outline: 0;
  box-shadow: 0 0 0 0.25rem #00000000 !important;
}
::placeholder {
  color: #ffffff !important;
  font-size: 12px !important;
  font-weight: bold;
}
.icon {
  position: relative !important;
  top: 32px !important;
  right: 10px !important;
  color: #ffffff !important;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .contact-Title {
    /* height: 183px;
    padding: 0px 37px; */
  }
}
</style>
