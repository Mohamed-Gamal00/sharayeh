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
                    class="btn btn-primary"
                    style="background-color: #7d712a; border: none"
                  >
                    تسجيل الدخول
                    <span><FontAwesome style="color: orange" icon="user-plus" /></span>
                  </button>
                  <!-- modal popup add doctor -->
                  <transition name="fade">
                    <div class="modalpopup" v-if="show">
                      <!-- <div class="modal__backdrop" @click="closeModal()"> -->
                      <div class="modal__backdrop">
                        <div class="modal__dialog">
                          <div class="modal__body">
                            <slot name="body" />
                            <div class="">
                              <!-- body -->
                              <div>
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
                                      <input
                                        dir="rtl"
                                        type="text"
                                        class="form-control"
                                        placeholder="رقم الهاتف"
                                      />
                                    </div>
                                  </div>
                                  <!-- footer -->
                                  <div class="modal__footer text-center">
                                    <button
                                      class="btn"
                                      type="button"
                                      @click="AddDoctor()"
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
                                      class="btn"
                                      type="button"
                                      @click="closeModal(), ResetDoctors()"
                                    >
                                      اغلاق
                                    </button>
                                    <br />
                                  </div>
                                </form>

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
                                        <p>+522214781000455</p>
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
                                        placeholder="تاكيد رقم الهاتف"
                                      />
                                    </div>
                                  </div>
                                  <!-- footer -->
                                  <div class="modal__footer text-center">
                                    <button class="btn" type="button" @click="AddDoctor()">
                                      تاكيد
                                    </button>
                                    <button
                                      class="btn"
                                      type="button"
                                      @click="closeModal(), ResetDoctors()"
                                    >
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
export default {
  name: 'DoctorsCom',
  data() {
    return {
      loading: false,
      // loading: 'spinner-border spinner-border-sm',
      show: false,
      phonInput: true,
      OTP: false
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
      this.OTP = false
      document.querySelector('body').classList.add('overflow-hidden')
    },
    async AddDoctor() {
      console.log('add doctor function')
      this.loading = true
      setTimeout(() => {
        this.OTP = true
        this.phonInput = false
        this.loading = false
      }, 2000)
    }
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
