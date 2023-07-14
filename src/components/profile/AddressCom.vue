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
                    <div>
                      <p class="mb-0 fw-900">عنوانك الحالي</p>
                      <small>
                        الرياض - الأمير عبدالعزيز بن سعود بن فيصل, RHOB7169 , 7169 , حي العليا ,
                        الرياض , السعودية
                      </small>
                      <p class="mt-4 fw-900">تفاصيل العنوان</p>
                    </div>
                    <!-- العنوان-->
                    <div class="col-md-12 mb-3">
                      <label for="validationustomUseraddress" class="mb-2 me-3"> العنوان</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          id="validationustomUseraddress"
                          placeholder="العنوان"
                          aria-describedby="inputGroupPrepend"
                        />
                      </div>
                    </div>

                    <!-- الهاتف -->
                    <div class="col-md-12 mb-3">
                      <label for="validationCustomUsenum" class="mb-2 me-3">رقم الهاتف</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          id="validationCustomUsenum"
                          placeholder="24845122255545"
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
                          حفظ
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
