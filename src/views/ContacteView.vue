<template>
  <div class="contacta">
    <h1>Contacta'ns</h1>
    <div class="content">
      <p>Si vols més informació<br>escriu un correu electrònic a:</p>
      <a class="mail" href="mailto:info.radiofarro@gmail.com">info.radiofarro@gmail.com</a>
      <p>o truca al taulell de Vil·la Urània al:</p>
      <p>937 061 295</p>
    </div>
  </div>
</template>
  
<style lang="scss" scoped>
.contacta {

  h1 {
    font-size: 2rem;
    color: rgb(208, 184, 0);
    text-align: end;
    line-height: 2.5rem;
    padding: 1rem 1.5rem 0 1.5rem;
    background-color: #D11575;

    @media (min-width: 720px) {
      background-color: #000;
      padding-bottom: 1rem;
    }

    @media (min-width: 1440px) {
      margin: 0 10vw;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    p, a {
      color: #000;
      font-size: 1rem;
    }

    a, p:last-child {
      margin: 0.5rem
    }

  }
}
</style>