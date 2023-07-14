<template>
  <div>
    <!-- content -->
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-md-12 justify-content-center">
          <div class="row">
            <form class="form-inline" id="form">
              <div class="row d-flex justify-content-start">
                <div class="col-md-12 col-lg-8 mt-4 d-flex justify-content-cente mt-lg-4 mb-lg-4">
                  <div class="row">
                    <!-- date تاريخ الاشتراك-->
                    <div class="col-md-12 mb-3">
                      <label for="validationustomUsername" class="mb-2 me-3">تاريخ الإشتراك</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          id="validationustomUsername"
                          placeholder="30 / 7/ 2023"
                          aria-describedby="inputGroupPrepend"
                        />
                      </div>
                    </div>
                    <!-- تاريخ الانتهاء -->
                    <div class="col-md-6 mb-3">
                      <label for="enddate" class="mb-2 me-3">تاريخ الانتهاء</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          id="enddate"
                          placeholder="30 / 7/ 2023"
                          aria-describedby="inputGroupPrepend"
                        />
                      </div>
                    </div>
                    <!-- تاريخ التجديد -->
                    <div class="col-md-6 mb-3">
                      <label for="validationCustomUsernam" class="mb-2 me-3">تاريخ التجديد</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          id="validationCustomUsernam"
                          placeholder="30 / 7/ 2023"
                          aria-describedby="inputGroupPrepend"
                        />
                      </div>
                    </div>

                    <!-- الرقم التسلسلي-->
                    <div class="col-md-12 mb-3">
                      <label for="validationCustomUsernum" class="mb-2 me-3">الرقم التسلسلي</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          id="validationCustomUsernum"
                          placeholder="2484512225554546464646"
                          aria-describedby="inputGroupPrepend"
                        />
                      </div>
                    </div>
                    <!-- مدة الاشتراك-->
                    <div class="col-md-6 mb-3">
                      <label for="validationCustomUserage" class="mb-2 me-3">مدة الاشتراك</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          id="validationCustomUserage"
                          placeholder="اشتراك شهري"
                          aria-describedby="inputGroupPrepend"
                        />
                      </div>
                    </div>
                    <!-- المبلغ المدفوع-->
                    <div class="col-md-6 mb-3">
                      <label for="validationCustomUsertotal" class="mb-2 me-3"
                        >المبلغ المدفوع</label
                      >
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          id="validationCustomUsertotal"
                          placeholder="250 ر.س"
                          aria-describedby="inputGroupPrepend"
                        />
                      </div>
                    </div>
                    <!-- save -->
                    <div class="col-md-12 mb-3">
                      <span class="me-3"></span>
                      <div class="">
                        <button
                          type="submit"
                          style="background-color: #ffbe03; width: 100%"
                          class="btn fw-bold text-dark"
                        >
                          طباعة الفاتورة
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
  color: rgba(93, 93, 93, 1) !important;
  font-size: 14px !important;
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
