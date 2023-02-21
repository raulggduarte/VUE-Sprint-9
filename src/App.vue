<template>
  <div v-if="this.$store.state.podcastsLoaded" class="app">
    <AppHeader v-if="this.$store.state.randomPodcast.mp3 && !this.navigation" />
    <NavBar v-if="!this.navigation" />
    <router-view />
    <AppFooter v-if="!this.navigation" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import NavBar from './components/NavBar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  data() {
    return {
      navigation: null,
    }
  },
  components: {
    AppHeader,
    NavBar,
    AppFooter,
  },
  mounted() {
    this.$store.dispatch('fetchPodcasts');
  },
  async created() {
    this.checkRoute();
    this.$store.dispatch('getCurrentUser')
  },
  methods: {
    checkRoute() {
      if (this.$route.name === "Login" || this.$route.name === "Register" || this.$route.name === "ForgotPassword") {
        this.navigation = true;
        return;
      } else {
        this.navigation = false;
      }
    }
  },
  watch: {
    $route() {
      this.checkRoute();
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: HelveticaNeueLTPro-Bd, Helvetica, Arial, sans-serif;
  color: rgb(46, 46, 46);
  font-size: 16px;

  @media (min-width: 375px) {
    font-size: 18px;
  }

  @media (min-width: 720px) {
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 22px;
  }

  @media (min-width: 1920px) {
    font-size: 24px;
  }
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
  color: rgb(46, 46, 46)
}

.text-primary {
  color: rgb(208, 184, 0);
}

.text-secondary {
  color: rgb(46, 46, 46)
}

.bg-primary {
  background-color: rgb(208, 184, 0);
}

.bg-secondary {
  background-color: rgb(46, 46, 46)
}

.bg-dark {
  background-color: rgb(35, 33, 22)
}

.btn-primary {
  color: rgb(46, 46, 46);

  &:hover {
    color: rgb(208, 184, 0) !important;
  }
}



#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
