<template>
  <div>
    <div>
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
                  <h2 class="fw-900" style="font-size: 30px">بيانات الشريحة</h2>
                </strong>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-5">
            <div class="col-md-11">
              <!-- content -->
              <div class="container">
                <div class="row d-flex justify-content-center align-items-center">
                  <div
                    class="col-md-12 col-lg-6 d-flex justify-content-center mt-4 mt-lg-4 mb-lg-4"
                  >
                    <div class="">
                      <h5 class="card-title fw-900">وصف المنتج</h5>
                      <ul class="px-5 py-3">
                        <li>
                          <p class="card-text fs-16" style="color: #787878">شريحة موبيلي</p>
                        </li>
                        <li>
                          <p class="card-text fs-16" style="color: #787878">تجديد لمرة شهر</p>
                        </li>
                        <li>
                          <p class="card-text fs-16" style="color: #787878">السعر مميز 250 ر.س</p>
                        </li>
                        <li>
                          <p class="card-text fs-16" style="color: #787878">
                            تواصل معنا الاًن +966 5 65553390
                          </p>
                        </li>
                      </ul>
                      <div>
                        <button
                          class="btn my-lg-3 my-2 mx-1 border-0"
                          style="background-color: #ebecf0cc; border-radius: 8px; font-size: 18px"
                        >
                          <FontAwesome class="ms-2" :icon="['fas', 'cash-register']" />
                          اسعار وسهولة الدفع
                        </button>
                        <button
                          class="btn my-lg-3 mx-1 border-0"
                          style="background-color: #ebecf0cc; border-radius: 8px; font-size: 18px"
                        >
                          <FontAwesome class="ms-2" :icon="['fas', 'truck']" />
                          الشحن السريع
                        </button>
                      </div>
                      <p>تم شراءه 88 مرة</p>
                      <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-md-6 col-6">
                          <p class="mb-0 fw-900">الكمية</p>
                        </div>
                        <div class="col-md-6 col-6" dir="ltr">
                          <div class="quantity-field">
                            <button class="value-button decrease-button" title="Azalt">-</button>
                            <div class="number">0</div>
                            <button class="value-button increase-button" title="Arrtır">+</button>
                          </div>
                        </div>
                      </div>
                      <div
                        class="row d-flex justify-content-lg-between justify-content-center align-items-center"
                      >
                        <div class="col-md-6 col-6">
                          <p class="mb-0">السعر</p>
                          <p class="mb-0 fw-900">250 ر.س</p>
                        </div>
                        <div class="col-md-6 col-6" dir="ltr">
                          <button
                            class="btn my-3 mx-1 border-0"
                            style="
                              background-color: #ebecf0cc;
                              border-radius: 12px;
                              font-size: 18px;
                            "
                          >
                            اضف الي العربة
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- img -->
                  <div
                    class="col-md-12 col-lg-6 d-flex justify-content-center mt-4 mt-lg-4 mb-lg-4"
                  >
                    <div class="text-center">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="@/assets/images/info-img.png"
                        alt="privacy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.quantity-field {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;
  /* margin: 0 auto; */
}

.quantity-field .value-button {
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 100%;
  padding: 0;
  background: #eee;
  outline: none;
  cursor: pointer;
}

.quantity-field .value-button:hover {
  background: rgb(230, 230, 230);
}

.quantity-field .value-button:active {
  background: rgb(210, 210, 210);
}

.quantity-field .decrease-button {
  margin-right: -4px;
  border-radius: 8px 0 0 8px;
}

.quantity-field .increase-button {
  margin-left: -4px;
  border-radius: 0 8px 8px 0;
}

.quantity-field .number {
  display: inline-block;
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 100%;
  line-height: 40px;
  font-size: 11pt;
  box-sizing: border-box;
  background: white;
  font-family: calibri;
}

.quantity-field .number::selection {
  background: none;
}

</style>
