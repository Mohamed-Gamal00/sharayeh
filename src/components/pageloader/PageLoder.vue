<template>
  <div class="page-loader" style="direction: ltr" dir="ltr">
    <div class="spinnerContainer">
      <div class="spinner"></div>
      <div class="loader">
        <p>loading</p>
        <div class="words">
          <span class="word">Sims</span>
          <span class="word">Cart</span>
          <span class="word">images</span>
          <span class="word">Sims</span>
          <span class="word">Cart</span>
          <span class="word">images</span>
        </div>
      </div>
    </div>
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
/** BEGIN CSS **/
.spinnerContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spinner {
  width: 56px;
  height: 56px;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-right-color: #299fff;
  animation: tri-spinner 1s infinite linear;
}

.spinner::before,
.spinner::after {
  content: '';
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  animation: tri-spinner 2s infinite;
}

.spinner::after {
  margin: 8px;
  animation-duration: 3s;
}

@keyframes tri-spinner {
  100% {
    transform: rotate(1turn);
  }
}

.loader {
  color: #4a4a4a;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 25px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 40px;
  padding: 10px 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-radius: 8px;
}

.words {
  overflow: hidden;
}

.word {
  display: block;
  height: 100%;
  padding-left: 6px;
  color: #299fff;
  animation: cycle-words 5s infinite;
}

@keyframes cycle-words {
  10% {
    -webkit-transform: translateY(-105%);
    transform: translateY(-105%);
  }

  25% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }

  35% {
    -webkit-transform: translateY(-205%);
    transform: translateY(-205%);
  }

  50% {
    -webkit-transform: translateY(-200%);
    transform: translateY(-200%);
  }

  60% {
    -webkit-transform: translateY(-305%);
    transform: translateY(-305%);
  }

  75% {
    -webkit-transform: translateY(-300%);
    transform: translateY(-300%);
  }

  85% {
    -webkit-transform: translateY(-405%);
    transform: translateY(-405%);
  }

  100% {
    -webkit-transform: translateY(-400%);
    transform: translateY(-400%);
  }
}

.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #e8e8e8;
  z-index: 999;
}
</style>
