<template>
  <div class="page-loader" style="direction: ltr" dir="ltr">
    <div class="card w-100 rounded-0" aria-hidden="true">
      <section class="py-5" dir="rtl">
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div
              class="container-fluid"
              style="
                background-image: linear-gradient(
                  to right,
                  rgba(255, 157, 10, 1),
                  rgba(46, 155, 232, 0.726),
                  rgba(46, 154, 232, 1)
                );
              "
            >
              <div
                class="row text-white d-flex justify-content-center text-center my-lg-3 py-3 py-lg-5"
              >
                <strong>
                  <h5 class="card-title placeholder-glow">
                    <span class="placeholder col-6"></span>
                  </h5>
                </strong>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-5">
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title placeholder-glow">
                  <span class="placeholder col-6"></span>
                </h5>
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-4"></span>
                  <span class="placeholder col-6"></span>
                  <span class="placeholder col-8"></span>
                </p>
                <a href="#" tabindex="-1" class="btn btn-dark disabled placeholder col-6"></a>
              </div>
            </div>
            <div class="col-md-6 d-flex align-self-center">
              <div class="card-body text-center">
                <div class="spinner-grow text-gray" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- <img src="img" class="card-img-top" alt="..." /> -->
    </div>
  </div>
</template>
<style scoped>
/** BEGIN CSS **/
.page-loader {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #3f485b;
  z-index: 999;
}
</style>
