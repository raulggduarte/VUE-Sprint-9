<template>
  <div class="about">
    <h1>RÀDIO FARRÓ</h1>
    <div class="content-grid">
      <div class="paragraf p1">
        <p>Ràdio Farró és un projecte públic que sorgeix d’una iniciativa veïnal al Centre
          cívic Vil.la Urània i que es materialitza en una ràdio comunitària amb l’objectiu de generar una programació
          estable dedicada principalment en temes del barri del Farró.</p>
      </div>
      <div class="img img01"></div>
      <div class="paragraf p2">
        <p>Dins d’un marc sociocultural, la seva programació pretén ser àmplia i de proximitat destinada a
          tots els veïns i veïnes del Farró però també de la resta de la ciutat.</p>
      </div>
      <div class="img img02"></div>
      <div class="paragraf p3">
        <p>Tots els programes i continguts que s'emeten en aquesta ràdio estan generats per persones que
          voluntàriament pensen, preparen i locuten sobre aquelles temàtiques que els interessen.</p>
      </div>
      <div class="img img03"></div>
      <div class="paragraf p4">
        <p>Amb la producció de programes, aquesta ràdio vol ser un espai de trobada entre el veïnat aficionat
          al món de la ràdio. Un espai per compartir eines i coneixements, promoure el suport entre les persones
          participants i crear propostes radiofòniques de forma col·lectiva.</p>
      </div>
      <div class="img img04"></div>
      <div class="paragraf p5">
        <p>Si vols conèixer més a fons aquest projecte, pots consultar-ne
          <a
            href="https://ajuntament.barcelona.cat/ccivics/files/1669994726_1583335905_REGLAMENT%20DEL%20PROJECTE%20DE%20R%C3%80DIO%20V_UR%C3%80NIA%20Definitiu.pdf">el
            reglament</a>
          o adreçar-te al centre.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.about {
  background-color: #fff;

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

  .content-grid {
    display: grid;
    grid-template-columns: 1fr;
    align-content: center;

    @media (min-width: 720px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1440px) {
      margin: 0 10vw;
    }

    .paragraf {
      display: flex;
      text-align: justify;
    }

    .p1 {
      background-color: #D11575;

      @media (min-width: 720px) {
        order: 1;
      }
    }

    .p2 {
      background-color: #15BBD1;

      @media (min-width: 720px) {
        order: 4;
      }
    }

    .p3 {
      background-color: #d0b800;
      color: #000;

      @media (min-width: 720px) {
        order: 5;
      }
    }

    .p4 {
      background-color: #D11575;

      @media (min-width: 720px) {
        order: 7;
      }
    }

    .p5 {
      background-color: #15BBD1;

      @media (min-width: 720px) {
        order: 8;
        grid-column: 1/-1;
        text-align: center;
      }
    }

    p {
      font-size: 0.8rem;
      text-align: inherit;
      padding: 1rem 1.5rem;
      color: #fff;
      align-self: center;
      width: 100%;

      @media (min-width: 720px) {
        font-size: 1rem;
      }

      @media (min-width: 720px) {
        font-size: 0.8rem;
      }

      a {
        font-size: inherit;
        text-decoration: underline;
        color: inherit;
      }
    }

    .img {
      width: 100%;
      height: 300px;
      background-size: cover;
      background-position: center;
    }

    .img01 {
      background-image: url(../assets/images/rf01.jpeg);

      @media (min-width: 720px) {
        order: 2;
      }
    }

    .img02 {
      background-image: url(../assets/images/rf02.jpeg);

      @media (min-width: 720px) {
        order: 3;
      }
    }

    .img03 {
      background-image: url(../assets/images/rf03.jpeg);

      @media (min-width: 720px) {
        order: 5;
      }
    }

    .img04 {
      background-image: url(../assets/images/rf04.jpeg);

      @media (min-width: 720px) {
        order: 6;
      }
    }
  }
}
</style>
