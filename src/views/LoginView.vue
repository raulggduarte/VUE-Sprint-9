<template>
  <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        No tens un compte a Ràdio Farró?
        <router-link class="router-link" :to="{ name: 'Register' }">Registra't</router-link>
      </p>
      <h2>Accedeix a Ràdio Farró</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="email" v-model="email">
          <div class="icon email-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
              <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" stroke-width="2"
                stroke-linecap="round" />
            </svg>
          </div>
        </div>
        <div class="input">
          <input type="password" placeholder="password" v-model="password">
          <div class="icon  password-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
              <path
                d="M8.1819 10.7027H6.00008C5.44781 10.7027 5.0001 11.1485 5.00009 11.7008C5.00005 13.3483 5 16.6772 5.00011 18.9189C5.00023 21.4317 8.88618 22 12 22C15.1139 22 19 21.4317 19 18.9189C19 16.6773 19 13.3483 19 11.7008C19 11.1485 18.5523 10.7027 18 10.7027H15.8182M8.1819 10.7027C8.1819 10.7027 8.18193 8.13514 8.1819 6.59459C8.18186 4.74571 9.70887 3 12 3C14.2912 3 15.8182 4.74571 15.8182 6.59459C15.8182 8.13514 15.8182 10.7027 15.8182 10.7027M8.1819 10.7027H15.8182"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M13 16.6181V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V16.6181C10.6931 16.3434 10.5 15.9442 10.5 15.5C10.5 14.6716 11.1716 14 12 14C12.8284 14 13.5 14.6716 13.5 15.5C13.5 15.9442 13.3069 16.3434 13 16.6181Z"
                fill="#000000" />
            </svg>
          </div>
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }">
        Has oblidat la contrassenya?</router-link>
      <button @click.prevent="signIn">Entra!</button>
      <router-link class="back-btn" :to="{ name: 'Home' }">Torna a l'inici</router-link>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    }
  },
  methods: {
    signIn() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.push({ name: "Home" });
          this.error = false;
          this.errorMsg = "";
          console.log('LogedIn!', auth.currentUser.uid);
        })
        .catch((err) => {
          this.error = true;
          this.errorMsg = err.message;
        });
    },
  },
}
</script>

<style lang="scss">
.form-wrap {
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-self: center;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 900px) {
    width: 100%;
  }

  .login-register {
    margin-bottom: 32px;

    .router-link {
      color: #000;
      text-decoration: underline;
    }
  }

  form {
    padding: 0 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    @media (min-width: 900px) {
      padding: 0 50px;
    }

    h2 {
      text-align: center;
      font-size: 1.2rem;
      max-width: 350px;
      color: #303030;
      margin-bottom: 40px;

      @media (min-width: 900px) {
        font-size: 40px;
      }
    }

    .inputs {
      width: 100%;
      max-width: 350px;

      .input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;

        input {
          width: 100%;
          border: none;
          background-color: #f2f7f6;
          padding: 4px 4px 4px 30px;
          height: 50px;

          &:focus {
            outline: none;
          }
        }

        .icon {
          width: 20px;
          position: absolute;
          left: 6px;
          display: flex;
          align-items: center;

          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
    }

    .forgot-password {
      text-decoration: none;
      color: #000;
      cursor: pointer;
      font-size: 14px;
      margin: 16px 0 32px;
      border-bottom: 1px solid transparent;
      transition: 0.5s ease all;

      &:hover {
        border-color: #303030;
      }
    }

    .back-btn {
      position: absolute;
      bottom: 24px;
      left: 24px;
      font-size: 0.8rem;
    }

    .angle {
      display: none;
      position: absolute;
      background-color: #fff;
      transform: rotateZ(3deg);
      width: 60px;
      right: -30px;
      height: 101%;

      @media (min-width: 900px) {
        display: initial;
      }
    }
  }

  .background {
    display: none;
    flex: 2;
    background-size: cover;
    background-position: center;
    background-image: url("../assets/images/rf02.jpeg");
    width: 100%;
    height: 100%;

    @media (min-width: 900px) {
      display: initial;
    }
  }
}

.error {
  text-align: center;
  font-size: 0.7rem;
  color: red;
}

button {
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
</style>