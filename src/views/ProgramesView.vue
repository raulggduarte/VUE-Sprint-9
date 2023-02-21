<template>
  <div class="programs">
    <h1>Troba el teu programa<br>de Ràdio Farró</h1>
    <div class="input">
      <input type="text" v-model="programName" placeholder="Busca un programa" class="inputForm" />
    </div>
    <div class="programs-list">
      <router-link :to="{ name: 'ViewProgram', params: { programId: program.programId } }" class="program"
        v-for="program in this.$store.state.programsList" :key="program.programId"
        v-show="!programName || program.programName.toLowerCase().includes(programName.toLowerCase())">
        <div class="post-image" :style="{ backgroundImage: `url(${program.image})` }"></div>
        <h2>{{ program.programName }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramesView",
  data() {
    return {
      programName: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.programs {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (min-width: 1440px) {
    width: 1020px;
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

  .input {
    width: 100%;
    background-color: #15BBD1;
    padding: 1rem;

    @media (min-width: 1440px) {
      background-color: #D11575;
    }

    input {
      border: none;
      border-radius: 10px;
      margin-bottom: 0.5rem;
      padding: 0.5rem 1rem;
      font-size: 0.7rem;

      :focus {
        border-color: rgb(208, 184, 0) !important;
      }
    }
  }

  .programs-list {

    @media (min-width: 1440px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
      margin-top: 1rem;
    }

    .program {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 3px solid #000;
      border-radius: 15px;
      margin: 1rem 0;
      padding: 0 0.5rem;


      @media (min-width: 720px) {
        padding: 0 2rem;
      }

      &:hover {
        border-color: rgb(208, 184, 0);
        color: rgb(208, 184, 0);
      }

      .post-image {
        width: 120px;
        height: 120px;
        margin: 0.5rem;
        background-position: center;
        background-size: cover;
        border-radius: 5px;

        @media (min-width: 720px) {
          width: 150px;
          height: 150px;
          margin: 1rem;
        }
      }

      h2 {
        margin-bottom: 0.4rem;
        width: 150px;
        color: inherit;

        @media (min-width: 720px) {
          width: 200px;
        }
      }
    }
  }
}
</style>