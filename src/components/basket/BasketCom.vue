<template>
  <div dir="rtl">
    <section class="pt-4">
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
        <div class="row text-white d-flex justify-content-center text-center my-lg-3 py-4 py-lg-5">
          <strong>
            <h2 class="fw-900" style="font-size: 30px">السلة</h2>
            <!-- <p>هذا النص هو مثال لنص يمكن أن يستبدل</p> -->
          </strong>
        </div>
      </div>
      <div class="container mt-5">
        <div class="row d-flex align-items-center">
          <div class="col-md-6 col-lg-9 p-0">
            <div v-if="products.length > 0" class="table-responsive p-2">
              <table class="table bdr mb-0">
                <thead class="table-dark">
                  <tr class="text-center">
                    <th scope="col">
                      <div style="margin: 13px auto">الشريحة</div>
                    </th>
                    <th scope="col">
                      <div style="margin: 13px auto"><span> رقم الشريحة </span></div>
                    </th>
                    <th scope="col">
                      <div style="margin: 13px auto"><span> المدة</span></div>
                    </th>
                    <th scope="col">
                      <div style="margin: 13px auto"><span> السعر</span></div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-center" v-for="product in products" :key="product.id">
                    <td>
                      <div>
                        <button
                          @click="deleteItem(product.id)"
                          type="button"
                          class="btn ms-2 me-1"
                          aria-label="Close"
                        >
                          <FontAwesome
                            class="btnClose text-danger"
                            :icon="['far', 'rectangle-xmark']"
                          />
                        </button>
                        <img
                          width="50"
                          height="50"
                          :src="product.image"
                          :alt="product.name"
                          style="object-fit: cover"
                        />
                      </div>
                    </td>
                    <td>
                      <div style="margin: 13px auto !important">
                        <span>995841031551055</span>
                      </div>
                    </td>
                    <td>
                      <div style="margin: 13px auto !important">
                        <span>شهر</span>
                      </div>
                    </td>
                    <td>
                      <div style="margin: 13px auto !important">
                        <span>{{ product.price }} ر.س</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-else class="alert alert-warning text-center mb-0 mx-3" role="alert">
              <p class="mb-5">السلة فارغة</p>

              <img
                class="img-fluid"
                height="240"
                width="240"
                src="https://cdn-icons-png.flaticon.com/512/523/523099.png?w=740&t=st=1690205283~exp=1690205883~hmac=0364e1a65f95a45f682f5f7cce3256beaa034c45f17084b52fd6f91fecb63d06"
                alt="img"
              />
            </div>
          </div>
          <div
            class="col-md-6 col-lg-3 d-flex justify-content-center my-3 my-lg-0 justify-content-lg-start"
          >
            <div class="card border-0 shadow" style="width: 18rem">
              <div class="card-header bg-white">
                <div class="card-body fw-bold">
                  <strong>
                    <span>تفاصيل الشراء</span>
                  </strong>
                </div>
              </div>
              <div class="card-body mb-4">
                <div class="card-body py-0">
                  <span class="card-title float-end">المبلغ الفرعي</span>
                  <strong>
                    <span class="card-title float-start">{{ SubPrice }} ر.س</span>
                  </strong>
                </div>
                <div class="card-body py-0">
                  <span class="card-title float-end"> ضريبة التوصيل ({{ tax }}) </span>
                  <strong>
                    <span class="card-title float-start">{{ TotalTax }} ر.س</span>
                  </strong>
                </div>
              </div>

              <hr class="m-0" />
              <div class="card-body">
                <div class="card-body">
                  <span class="card-title float-end">المبلغ الكلي</span>
                  <strong>
                    <span class="card-title float-start">{{ TotalPrice }} ر.س</span>
                  </strong>
                </div>
              </div>
              <PersonalInfoComVue />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PersonalInfoComVue from './payment/PersonalInfoCom.vue'
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
const products = ref([])
const tax = ref()
const fetchproducts = async () => {
  await axios.get('/data').then((res) => {
    products.value = res.data.products
    tax.value = res.data.tax
  })
}

const deleteItem = ($event) => {
  const productId = $event
  products.value = products.value.filter((product) => product.id !== productId)
}

const SubPrice = computed(() => products.value.reduce((total, product) => total + product.price, 0))
const TotalTax = computed(() =>
  products.value.reduce((total, product) => total + product.price * tax.value, 0)
)
const TotalPrice = computed(() => TotalTax.value + SubPrice.value)

onMounted(() => {
  fetchproducts()
})
</script>
<style scoped>
table {
  width: 100%;
}
@media only screen and (min-width: 992px) {
  table tr th:nth-child(1) {
    width: 20%;
  }
  table tr td:nth-child(1) {
    width: 20%;
  }
}
@media only screen and (max-width: 600px) {
  table tr td div {
    width: 150px;
  }
}
table button:focus:not(:focus-visible) {
  outline: 0;
  border: 1px solid rgba(255, 0, 0, 0.103);
  background-color: rgba(255, 0, 0, 0.103);
}
.table-dark {
  --bs-table-color: #000000;
  --bs-table-bg: #ffbe031a;
  --bs-table-border-color: #ffc003;
  color: var(--bs-table-color);
  border-color: var(--bs-table-border-color);
  /* border: 10px solid; */
}
.bdr {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border: #8080801e;
  overflow: hidden;
}
.shadow {
  box-shadow: 0 0.5rem 1rem rgba(167, 167, 167, 0.2) !important;
}
</style>
