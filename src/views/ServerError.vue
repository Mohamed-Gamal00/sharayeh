<template>
  <div class="servererror">
    <!-- text & image-->
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 d-flex justify-content-center">
          <section class="page_404">
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <div class="col-sm-offset-1 text-center">
                    <div class="four_zero_four_bg">
                      <h1 class="text-center fw-bold" style="font-weight: 900 !important">500</h1>
                    </div>
                    <div class="contant_box_404">
                      <h3 class="h2">Internal server error</h3>
                      <p>We are currently trying to fix the problem.</p>
                      <router-link
                        class="m-2 link_404 text-decoration-none"
                        :to="{ name: 'home' }"
                        exact
                        ><a class="fw-bold text-white text-decoration-none" href="#home"
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
  name: 'ServerError',
  components: {}
}
</script>
<style>
.servererror .page_404 {
  padding: 40px 0;
  width: 100%;
  background: #fff;
  font-family: 'Arvo', serif;
}

.servererror .page_404 img {
  width: 100%;
}

.servererror .four_zero_four_bg {
  background-image: url('@/assets/images/errrgif.gif');
  height: 500px;
  background-size: cover;
  background-position: center;
}

.servererror .four_zero_four_bg h1 {
  font-size: 80px;
}

.servererror .four_zero_four_bg h3 {
  font-size: 80px;
}

.servererror .link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
}
.servererror.contant_box_404 {
  margin-top: -50px;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .servererror .four_zero_four_bg {
    background-image: url('@/assets/images/errrgif.gif');
    height: 300px;
    background-size: cover;
    background-position: center;
  }
}
</style>
