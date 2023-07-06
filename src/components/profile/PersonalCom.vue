<template>
  <div>
    <!-- content -->
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-12 justify-content-center">
          <div class="row">
            <form class="form-inline" @submit.prevent="clientLogin">
              <div class="row d-flex justify-content-start">
                <div class="col-md-6 mt-4 d-flex justify-content-cente mt-lg-4 mb-lg-4">
                  <div class="row">
                    <!-- name-->
                    <div class="col-md-12 mb-3">
                      <label for="validationustomUsername" class="mb-2 me-3">الإسم</label>
                      <div class="input-group">
                        <FontAwesome icon="user" class="icon" />

                        <input
                          type="text"
                          class="form-control"
                          id="validationustomUsername"
                          placeholder="Username"
                          aria-describedby="inputGroupPrepend"
                          v-model="user.full_name"
                        />
                        <div class="input-group-prepend me-3">
                          <button class="btn text-custom" type="button">
                            <FontAwesome class="" :icon="['far', 'pen-to-square']" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- phone_Number -->
                    <div class="col-md-12 mb-3">
                      <label for="validationCustomUsername" class="mb-2 me-3">رقم الهاتف</label>
                      <div class="input-group">
                        <FontAwesome icon="phone" class="icon text-custom" />

                        <input
                          type="text"
                          class="form-control"
                          id="validationCustomUsername"
                          placeholder="password"
                          aria-describedby="inputGroupPrepend"
                          v-model="user.phone"
                        />
                        <div class="input-group-prepend me-3">
                          <button class="btn text-custom" type="button">
                            <FontAwesome class="" :icon="['far', 'pen-to-square']" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- save -->
                    <div class="col-md-11 mb-3">
                      <label for="validationCustomUsername" class="me-3"></label>
                      <div class="input-group m-2">
                        <button
                          type="submit"
                          style="background-color: #d600001f; width: 90%"
                          class="btn fw-bold text-danger"
                        >
                          حذف حسابي
                        </button>
                      </div>
                    </div>
                    <div class="col-md-10 mt-3 d-flex justify-content-center"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      user: []
    }
  },
  mounted() {
    let user = localStorage.getItem('user')
    if (!user) {
      this.$router.push({ name: 'login' })
    }
    this.fetchclient()
  },
  methods: {
    async fetchclient() {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

      await axios
        .get('http://lawyer.phpv8.aait-d.com/api/client_web/profile', config)
        .then((res) => {
          this.user = res.data.data
          console.log(this.user)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
.form-control {
  border: none;
  border-radius: 5px !important;
  padding: 7px 35px !important;
  background-color: #ebecf0cc;
}
.form-control:focus {
  color: #000000;
  background-color: #ebecf0cc;
  border-color: #ebecf0cc !important;
  outline: 0;
  box-shadow: 0 0 0 0.25rem #ebecf000 !important;
}
::placeholder {
  color: #ffffff !important;
  font-size: 14px !important;
}
.icon {
  position: relative !important;
  top: 12px !important;
  right: 25px !important;
  color: #787878 !important;
  z-index: 2;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
