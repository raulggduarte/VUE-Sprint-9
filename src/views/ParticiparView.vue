<template>
  <div class="participar">
    <h1>Forma part<br>de Ràdio Farró!</h1>
    <div class="text-content">
      <p>Per formar part de la ràdio només cal que t’inscriguis al Grup d'Usuaris de Ràdio Farró!</p>
      <p>Pots participar-hi fent un programa, formant part de les diferents comissions de treball o donant un cop de mà
        a
        altres programes. Aquí trobaràs trobar el formulari d'inscripció i el formulari de programa.</p>
      <p>Per proposar un programa de ràdio només cal que omplis els formularis i els facis arribar a
        <a class="mail" href="mailto:info.radiofarro@gmail.com">info.radiofarro@gmail.com</a> o bé lliurant-los al
        taulell
        d’informació de Vil·la Urània.
      </p>
      <p>Recorda llegir <a
          href="https://ajuntament.barcelona.cat/ccivics/files/1669994726_1583335905_REGLAMENT%20DEL%20PROJECTE%20DE%20R%C3%80DIO%20V_UR%C3%80NIA%20Definitiu.pdf"
          target="_blank">
          el reglament</a>
        de la ràdio abans d'implir els formularis.</p>
    </div>
    <div class="forms-links">
      <a href="https://ajuntament.barcelona.cat/ccivics/files/1676389616_Formulari%20d'inscripci%C3%B3%20a%20la%20R%C3%A0dio%202023.pdf"
        target="_blank">
        Forma part<br>del Grup d'Usuaris
      </a>
      <a href="https://ajuntament.barcelona.cat/ccivics/files/1676389768_Sol%C2%B7licitud%20emissi%C3%B3%20programa%202023.pdf"
        target="_blank">
        Proposa<br>un programa
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.participar {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1440px) {
    width: 60%;
    margin: 0 auto;
  }

  h1 {
    width: 100%;
    font-size: 2rem;
    color: rgb(208, 184, 0);
    text-align: end;
    line-height: 2.5rem;
    padding: 1rem 1.5rem 0.5rem 1.5rem;
    background-color: #D11575;

    @media (min-width: 720px) {
      background-color: #000;
      padding-right: 3rem;
    }

    @media (min-width: 1440px) {
      margin: 0 10vw;
    }
  }
  .text-content {
    padding: 1rem;

    @media (min-width: 720px) {
      padding: 3rem;
    }

    @media (min-width: 1440px) {
      background-color: #15BBD1;
    }

    p {
      font-size: 0.8rem;
      text-align: justify;
      margin-bottom: 0.5rem;
      align-self: flex-start;

      @media (min-width: 720px) {
        margin-bottom: 0.5rem;
      }

      @media (min-width: 1440px) {
        color: #fff
      }

      a {
        text-decoration: underline;
        font-size: 0.8rem;

        @media (min-width: 1440px) {
          color: #fff
        }
      }
    }
  }

  .forms-links {
    width: 100%;
    background-color: #15BBD1;
    display: flex;
    justify-content: space-around;
    padding: 2rem;

    @media (min-width: 1440px) {
      background-color: rgb(208, 184, 0);
    }

    a {
      background-color: #D11575;
      border-radius: 15px;
      padding: 0.5rem 0.8rem;
      font-size: 0.6rem;
      font-weight: 800;
      color: #fff;
      width: 45%;
      max-width: 200px;

      &:hover {
        color: rgb(208, 184, 0);
      }

      @media (min-width: 1440px) {
        font-size: 0.8rem;
        max-width: 250px;
      }
    }
  }
}
</style>