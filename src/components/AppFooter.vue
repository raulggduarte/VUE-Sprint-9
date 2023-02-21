<template>
  <div class="footer">
    <router-link :to="{ name: 'Home' }">
      <div class="logo">
        <img src="../assets/logos/logo_radioFarro_rect_w.png" alt="Ràdio Farró Logo">
      </div>
    </router-link>
    <h4>La Ràdio Comunitària de Vil·la Urània</h4>
    <a class="mail" href="mailto:info.radiofarro@gmail.com">info.radiofarro@gmail.com</a>
    <a class="cclogo" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank">
      <img alt="Licencia de Creative Commons" style="border-width:0"
        src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
    </a>
  </div>
</template>

<style lang="scss">
.footer {
  margin-top: auto;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  align-items: center;

  .logo {
    margin-left: 1rem;

    img {
      width: 100px;
    }
  }

  h4 {
    color: #fff;
    font-size: 0.7rem;
    margin-bottom: 1rem;
  }

  .mail {
    color: #fff;
    font-size: 0.7rem;
    margin-bottom: 1rem;
  }

  .cclogo {
    width: 80px;

    img {
      width: 80px;
    }
  }
}
</style>