<template>
  <div class="error">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 d-flex justify-content-center">
          <section class="page_404">
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <div class="col-sm-offset-1 text-center">
                    <div class="four_zero_four_bg">
                      <h1
                        class="text-center"
                        style="font-weight: 900 !important"
                      >
                        404
                      </h1>
                    </div>

                    <div class="contant_box_404">
                      <h3 class="h2">Look like you're lost</h3>

                      <p>the page you are looking for not avaible!</p>

                      <router-link
                        class="m-2 link_404 text-decoration-none"
                        :to="{ name: 'home' }"
                        exact
                        ><a
                          class="fw-bold text-white text-decoration-none"
                          href="#home"
                          >Go to Home</a
                        ></router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ErrorView",
  components: {},
};
</script>
<style>
.error .page_404 {
  padding: 40px 0;
  width: 100%;
  background: #fff;
  font-family: "Arvo", serif;
}

.error .page_404 img {
  width: 100%;
}

.error .four_zero_four_bg {
  background-image: url("@/assets/images/errrgif.gif");
  height: 500px;
  background-size: cover;
  background-position: center;
}

.error .four_zero_four_bg h1 {
  font-size: 80px;
}

.error .four_zero_four_bg h3 {
  font-size: 80px;
}

.error .link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
}
.error .contant_box_404 {
  margin-top: -50px;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .error .four_zero_four_bg {
    background-image: url("@/assets/images/errrgif.gif");
    height: 300px;
    background-size: cover;
    background-position: center;
  }
}
</style>
