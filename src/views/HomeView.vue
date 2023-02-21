<template>
  <div class="home">
    <SlideProgrames v-if="this.$store.state.lastFive.length > 1" />
    <div class="mainContent">
      <div class="mainText">
        <h1>Qui som?</h1>
        <p><strong>Ràdio Farró</strong> és un projecte públic que sorgeix d’una iniciativa veïnal al Centre cívic Vil.la
          Urània i que es materialitza en una ràdio comunitària amb l’objectiu de generar una programació estable
          dedicada principalment en temes del barri del Farró.</p>
      </div>
      <div class="links">
        <router-link :to="{ name: 'Programes' }" class="btn-primary">
          Escolta tots els programes!
        </router-link>
        <router-link :to="{ name: 'Participar' }" class="btn-primary">
          Apunta't a Ràdio Farró!
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SlideProgrames from '@/components/SlideProgrames.vue';


export default {
  name: 'HomeView',
  components: {
    SlideProgrames,
  }
}
</script>

<style lang="scss">
.home {
  margin-bottom: 2rem;

  .mainContent {
    display: flex;
    flex-direction: column;
    align-items: center;

    .mainText {
      width: 80vw;

      @media (min-width: 720px) {
        display: flex;
        align-items: center;
        margin: 1rem 4rem;
      }

      @media (min-width: 1440px) {
        width: 60vw;
      }

      h1 {
        margin-right: 1rem;
        font-size: 3rem;
        color: #d0b800;
        text-align: end;
        line-height: 2.5rem;

        @media (min-width: 720px) {
          margin-right: 0;
        }
      }

      p {
        padding: 1rem 1rem;
        font-size: 0.8rem;
        text-align: justify;

        @media (min-width: 720px) {
          padding: 0 1rem;
        }

        strong {
          font-size: 0.9rem;
        }
      }
    }

    .links {
      display: flex;
      width: 90%;
      justify-content: space-between;
      margin-top: 1rem;

      @media (min-width: 720px) {
        width: 60%;
      }

      @media (min-width: 1440px) {
        width: 40%;
      }

      a {
        background-color: #D11575;
        border-radius: 25px;
        padding: 0.5rem 0.8rem;
        font-size: 0.6rem;
        font-weight: 800;
        color: #fff;

        @media (min-width: 1440px) {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
