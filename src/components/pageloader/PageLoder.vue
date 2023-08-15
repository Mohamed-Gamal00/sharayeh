<template>
  <div class="page-loader" style="direction: ltr;" dir="ltr">
    <span class="back">
      <span>L</span>
      <span>o</span>
      <span>a</span>
      <span>d</span>
      <span>i</span>
      <span>n</span>
      <span>g</span>
    </span>
    <br />
  </div>
</template>

<script>
export default {
  name: 'PageLoader'
}
</script>

<style scoped>
* {
  direction: ltr;
}
.back {
  margin: 1em auto;
  font-family: 'Roboto';
}
.back span {
  font-size: 3em;
  color:#f2c640;
  background: #ffffff;
  display: table-cell;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.041), 0 5px 0 #cccccc13;
  padding: 0 14px;
  line-height: 100px;
  animation: jumb 1.5s infinite;
}
@keyframes jumb {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
    box-shadow: 0 15px 0 rgb(242, 198, 64);
  }
  100% {
    transform: translateY(0px);
  }
}
.back span:nth-child(1) {
  animation-delay: 0s;
}
.back span:nth-child(2) {
  animation-delay: 0.1s;
}
.back span:nth-child(3) {
  animation-delay: 0.2s;
}
.back span:nth-child(4) {
  animation-delay: 0.3s;
}
.back span:nth-child(5) {
  animation-delay: 0.4s;
}
.back span:nth-child(6) {
  animation-delay: 0.5s;
}
.back span:nth-child(7) {
  animation-delay: 0.6s;
}
/** BEGIN CSS **/
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #3F485B;
  z-index: 999;
}
</style>
