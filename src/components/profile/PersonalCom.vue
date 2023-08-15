<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div>
    <!-- content -->
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-12 justify-content-center">
          <div class="row">
            <form class="form-inline">
              <div class="row d-flex justify-content-start">
                <div class="col-md-12 col-lg-8 mt-4 d-flex justify-content-cente mt-lg-4 mb-lg-4">
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
                          v-model="name"
                          placeholder="Username"
                          aria-describedby="inputGroupPrepend"
                        />
                        <div class="input-group-prepend me-3">
                          <button @click="EditUser()" class="btn text-custom" type="button">
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
                          v-model="number"
                          placeholder="رقم الهاتف"
                          aria-describedby="inputGroupPrepend"
                        />
                        <div class="input-group-prepend me-3">
                          <button @click="EditUser()" class="btn text-custom" type="button">
                            <FontAwesome class="" :icon="['far', 'pen-to-square']" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <!-- save -->
                    <div class="col-md-12 mb-3">
                      <label for="validationCustomUsername" class="me-3"></label>
                      <div class="">
                        <button
                          type="submit"
                          style="background-color: #d600001f; width: 100%"
                          class="btn fw-bold text-danger"
                        >
                          حذف حسابي
                          <div class="input-group-prepend me-3"></div>
                        </button>
                      </div>
                    </div>
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
  props: {
    profileData: {
      type: Object
    }
  },
  data() {
    return {
      name: this.profileData.name,
      number: this.profileData.number
    }
  },
  methods: {
    async EditUser() {
      console.log('update edit user')
      let token = localStorage.getItem('token')
      await axios
        .post(
          `/editProfile`,
          {
            name: this.name,
            number: this.number
          },
          {
            headers: {
              Authorization: 'Bearer ' + token
            }
          }
        )
        .then((res) => {
          console.log(res)
          alert(res.data.message)
          // Use this.$set to update the Profile object

          this.$emit('update:profileData', {
            ...this.profileData,
            name: this.number,
            number: this.number
          })
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
  color: #949494 !important;
  font-size: 14px !important;
}
.icon {
  position: relative !important;
  top: 12px !important;
  right: 25px !important;
  color: #787878 !important;
  z-index: 2;
}
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  border-radius: 8px;
  width: 100%;
  background-color: rgba(235, 236, 240, 0.8);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
