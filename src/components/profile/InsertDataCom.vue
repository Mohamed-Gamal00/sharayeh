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
                          v-model="name"
                          id="validationustomUsername"
                          placeholder="Username"
                          aria-describedby="inputGroupPrepend"
                        />
                      </div>
                      <span class="text-danger">{{ Error }}</span>
                      <!-- img -->
                      <div class="mb-3">
                        <label for="formFileMultiple" class="form-label"></label>
                        <input
                          class="form-control"
                          type="file"
                          ref="file"
                          @change="selectFile()"
                          id="formFileMultiple"
                          multiple
                        />
                      </div>
                    </div>
                    <!-- save -->
                    <div class="col-md-12 mb-3">
                      <label for="validationCustomUsername" class="me-3"></label>
                      <div class="">
                        <button
                          type="button"
                          @click="insertData()"
                          style="background-color: #ffcc03; width: 100%"
                          class="btn fw-bold text-dark"
                        >

                          <div v-if="loading" class="spinner-border spinner-border-sm text-black" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>
                          <span> حفظ </span>
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
  data() {
    return {
      Error: '',
      name: 'user',
      image: '',
      loading: false
    }
  },
  methods: {
    selectFile() {
      this.image = this.$refs.file.files[0]
    },
    async insertData() {
      this.loading = true
      console.log('insert user data')
      let token = localStorage.getItem('token')
      await axios
        .post(
          `/insertData`,
          {
            name: this.name,
            image: this.image
          },
          {
            headers: {
              Authorization: 'Bearer ' + token,
              'Content-Type': 'multipart/form-data',
              accept: 'Application/json'
            }
          }
        )
        .then((res) => {
          console.log(res)
          alert(res.data.message)

          this.$emit('update:profileData', {
            ...this.profileData,
            name: this.name
          })
        })
        .catch((err) => {
          console.log(err)
          alert(err.response.data.message)
          this.Error = err.response.data.message
          setTimeout(() => {
            this.Error = ''
          }, 3000)
        })
      this.loading = false
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
