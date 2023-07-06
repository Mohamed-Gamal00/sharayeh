<template>
  <div>
    <!-- content -->
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-12 justify-content-center">
          <div class="row">
            <h1>Change password</h1>
            <div class="row">
              <form class="form-inline" @submit.prevent="clientLogin">
                <div class="row justify-content-center">
                  <div class="col-md-10 mt-lg-4 mb-lg-4">
                    <div class="row">
                      <!-- Current Password-->
                      <div class="col-md-6 mb-3">
                        <label for="validationustomUsername">Current Password</label>
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            id="validationustomUsername"
                            placeholder="Current Password"
                            aria-describedby="inputGroupPrepend"
                          />
                        </div>
                      </div>
                      <!-- email -->
                      <div class="col-md-6 mb-3">
                        <label for="validationCustomUsernam">New Password</label>
                        <div class="input-group">
                          <input
                            type="email"
                            class="form-control"
                            id="validationCustomUsernam"
                            placeholder="New Password"
                            aria-describedby="inputGroupPrepend"
                          />
                        </div>
                      </div>
                      <!-- phone_Number -->
                      <div class="col-md-6 mb-3">
                        <label for="validationCustomUsername">Confirm New Password</label>
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            id="validationCustomUsername"
                            placeholder="Confirm New Password"
                            aria-describedby="inputGroupPrepend"
                          />
                        </div>
                      </div>
                      <!-- save -->
                      <div class="d-flex justify-content-end">
                        <div class="col-md-12 justify-content-center text-center">
                          <button type="submit" style="background-color: #c8a45d" class="btn">
                            save
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
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  // data() {
  //   return {
  //     user: []
  //   }
  // },
  mounted() {
    let user = localStorage.getItem('user')
    if (!user) {
      this.$router.push({ name: 'login' })
    }
    // this.fetchclient()
  },
  // methods: {
  //   async fetchclient() {
  //     const token = localStorage.getItem('token')
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     }

  //     await axios
  //       .get('http://lawyer.phpv8.aait-d.com/api/client_web/profile', config)
  //       .then((res) => {
  //         this.user = res.data.data
  //         // console.log(this.user)
  //       })
  //       .catch((error) => {
  //         console.error(error)
  //       })
  //   }
  // }
}
</script>

<style scoped>
#client {
  background-image: url('../../assets/images/bg-img.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.main {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.header-wrapper {
  padding: 0 1.6rem;
  width: 90%;
}
.header-wrapper h3 {
  font-family: 'Fira Sans', sans-serif;
  letter-spacing: 2px;
  opacity: 0.6;
}
.site-name {
  position: fixed;
  top: 1.6rem;
  left: 1.6rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 2.2rem;
  font-weight: 500;
}
.site-name span {
  color: #c8a45d;
}
.header-links {
  display: flex;
}
.header-links a {
  color: #000;
  font-weight: bold;
  padding: 0.8rem 2rem;
  font-size: 0.9rem;
  transition: all 0.5s ease;
  margin: 1rem 1rem 1rem 0;
}

.header-links a:nth-child(1) {
  background-color: #c8a45d;
  border-radius: 5px;
}
.header-links a:nth-child(2) {
  color: #000;
  font-weight: bold;
  padding: 0.8rem 0rem;
  /* padding: 0.8rem 1rem; */
  font-size: 0.9rem;
  transition: all 0.5s ease;
  /* margin: 1rem 1rem 1rem 0; */
}
.header-links a:nth-child(2) {
  color: #c8a45d;
  border-bottom: 1px solid #c8a45d;
}
@media screen and (max-width: 400px) {
  .site-name {
    font-size: 1.8rem;
  }
  .btn-bars {
    padding: 0 0.5rem;
  }
  .naavbar-close {
    width: 100%;
  }
  .naavbar-nav {
    margin: 2rem 0;
  }
  .header-wrapper h3 {
    font-size: 0.9rem;
    text-align: center;
  }
  /* .header-wrapper h1 {
    text-align: center;
    font-weight: 500;
    font-size: 1.6rem;
    width: 100%;
  } */
  .header-links {
    flex-direction: column;
  }
  .header-links a {
    font-size: 0.8rem;
    margin: 0.3rem;
    text-align: center;
  }
}
@media screen and (min-width: 992px) {
  .header-wrapper {
    padding-left: 5rem;
  }
  .header-wrapper h1 {
    font-size: 56px;
    font-weight: 700;
    width: 100%;
    font-family: 'Almarai';
  }
  .container-section {
    position: relative;
    bottom: 38px;
    background-color: white;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
  }
}
</style>
