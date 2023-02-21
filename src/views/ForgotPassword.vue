<template>
  <div class="reset-password">
    <ModalWindow v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <LoadingClock v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Torna al
          <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
        </p>
        <h2>Refés la contrasenya</h2>
        <p>Has oblidat la teva contrasenya? Introdueix el teu email per refer-la</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="email" v-model="email" />
            <div class="icon email-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" stroke-width="2"
                  stroke-linecap="round" />
              </svg>
            </div>
          </div>
          <button @click.prevent="resetPassword">Reset</button>
        </div>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import ModalWindow from "../components/ModalWindow";
import LoadingClock from "../components/LoadingClock";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
      modalActive: false,
      modalMessage: "",
      loading: null,
    };
  },
  components: {
    ModalWindow,
    LoadingClock,
  },
  methods: {
    resetPassword() {
      this.loading = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage = "If your account exists, you will receive a email";
          this.loading = false;
          this.modalActive = true;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.loading = false;
          this.modalActive = true;
        });
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;

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
        margin-bottom: 8px;

        @media (min-width: 900px) {
          font-size: 40px;
        }
      }

      p {
        text-align: center;
        margin-bottom: 32px;
        max-width: 320px;
      }

      .inputs {
        width: 100%;
        max-width: 350px;
        margin-bottom: 1rem;

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
      background-image: url("../assets/images/rf03.jpeg");
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
}
</style>