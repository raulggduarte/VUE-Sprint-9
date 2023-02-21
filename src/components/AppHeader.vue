<template>
  <div class="header bg-secondary">
    <router-link :to="{ name: 'Home' }">
      <div class="logo">
        <img src="../assets/logos/logo_radioFarro_rect_w.png" alt="Ràdio Farró Logo">
      </div>
    </router-link>
    <div class="radioShuffle">
      <SmallPlayer />
    </div>
    <div class="loginRegisterLinks">
      <div v-if="!this.user">
        <router-link :to="{ name: 'Login' }" class="btn-primary">
          Entra
        </router-link>
        <span> | </span>
        <router-link :to="{ name: 'Register' }" class="btn-primary">
          Registra't
        </router-link>
      </div>
      <div v-if="this.user" class="log-out">
        <div @click="logOut" class="log-out-button">Tanca sessió</div>
      </div>
    </div>
  </div>
</template>

<script>
import SmallPlayer from '@/components/SmallPlayer.vue';
import { getAuth, signOut } from "firebase/auth";

export default {
  name: "AppHeader",
  components: {
    SmallPlayer,
  },
  methods: {
    logOut() {
      // this.$router.push({ name: "Home" });
      const auth = getAuth();
      signOut(auth).then(() => {
        console.log('user logged out');
        // window.location.reload();
        this.$router.push({ name: "Home" });
        this.$store.state.currentUser = null;
      }).catch((error) => {
        console.log(error)
      });
    }
  },
  computed: {
    user() {
      return this.$store.state.currentUser;
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #000;
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  .logo {

    @media (min-width: 720px) {
      padding: 1rem;
    }

    img {
      width: 150px;
    }
  }

  .radioShuffle {
    position: absolute;
    right: 1rem;
    top: 1.5rem;

    @media (min-width: 1440px) {
      margin-right: 1.5rem;
    }
  }

  .loginRegisterLinks {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    height: 7.5rem;

    @media (min-width: 720px) {
      margin-top: 0.5rem;
    }

    @media (min-width: 1440px) {
      margin-right: 1.5rem;
    }

    span {
      position: relative;
      top: 0px;
      color: #fff;
      padding: 0 0.1rem;
      font-weight: 300;
      font-size: 1rem;

    }

    a {
      color: #fff;
      font-size: 0.9rem;
    }
  }
.log-out-button {
  color: #fff;
  text-decoration: underline;
  font-size: 0.6rem;
  cursor: pointer;
}
}
</style>