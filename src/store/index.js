import { createStore } from 'vuex'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../main.js";

export default createStore({
  state: {
    podcasts: [],
    lastFive: [],
    programNames: [
      {
        programId: 1451,
        programName: 'No Anem Enlloc',
      },
      {
        programId: 1489,
        programName: 'No estoy OK',
      },
      {
        programId: 1361,
        programName: 'Fenòmens Naturals',
      },
      {
        programId: 1371,
        programName: 'Dones a les Ones',
      },
      {
        programId: 1481,
        programName: 'El Trident',
      },
      {
        programId: 553,
        programName: 'Ràdio Farró Especials',
      },
      {
        programId: 1178,
        programName: 'La Contrària',
      },
      {
        programId: 1370,
        programName: 'Entonces Nos Drogamos',
      },
      {
        programId: 1363,
        programName: 'El calaix de sastre',
      },
      {
        programId: 1340,
        programName: 'Especial Taller Escola Els Arcs',
      },
      {
        programId: 1302,
        programName: "Veus d'escriptura i música",
      },
      {
        programId: 1303,
        programName: 'El Racó del Farró',
      },
      {
        programId: 561,
        programName: 'Tal Com Som',
      },
      {
        programId: 536,
        programName: 'Territòri Urània',
      },
      {
        programId: 590,
        programName: 'Caravana de letras',
      },
      {
        programId: 538,
        programName: 'Males companyies',
      },
      {
        programId: 534,
        programName: 'RadioAktiva',
      },
      {
        programId: 515,
        programName: 'Farronari',
      },
    ],
    programsList: [],
    randomPodcast: [],
    podcastsLoaded: null,
    currentUser: null
  },
  getters: {
    podcasts: (state) => state.podcasts,
    lastFive: (state) => state.lastFive,
    randomPodcast: (state) => state.randomPodcast,
  },
  mutations: {
    SET_PODCASTS(state, podcasts) {
      podcasts.forEach(podcast => {
        if (!isNaN(podcast.acf.programes) && podcast.acf.programes !== false) {
          if (!podcast.acf.img_podcast || podcast.acf.img_podcast.url == undefined) {
            state.podcasts.push({
              id: podcast.ID,
              programId: podcast.acf.programes,
              title: podcast.post_title,
              description: podcast.post_content,
              date: podcast.post_date,
              img: 'https://xrcb.cat/wp-content/uploads/2019/01/logo_radio_bl.png',
              mp3: podcast.acf.file_mp3.url,
            });
          } else {
            state.podcasts.push({
              id: podcast.ID,
              programId: podcast.acf.programes,
              title: podcast.post_title,
              description: podcast.post_content,
              date: podcast.post_date,
              img: podcast.acf.img_podcast.url,
              mp3: podcast.acf.file_mp3.url,
            });
          }
        }
      });
      // console.log(state.podcasts);
    },
    SET_PROGRAM_NAME(state) {
      state.podcasts.forEach(podcast => {
        state.programNames.forEach(program => {
          if (podcast.programId === program.programId) {
            podcast["programName"] = program.programName;
          }
        })
      })
      // console.log(state.podcasts);
    },
    SET_PROGRAMS_LIST(state) {
      state.programNames.forEach(program => {
        let currentProgram = {};
        currentProgram.programId = program.programId;
        currentProgram.programName = program.programName;
        currentProgram.image = (state.podcasts.findLast(podcast => podcast.programId === program.programId)).img;
        state.programsList.push(currentProgram);
      })
      // console.log(state.programsList);
    },
    SET_LAST_FIVE(state) {
      state.podcasts.forEach(podcast => {
        if (!state.lastFive.some(e => e.programName === podcast.programName)) {
          state.lastFive.push(podcast);
        }
      });
      state.lastFive = state.lastFive.slice(0, 5);
      // console.log(state.lastFive);
    },
    SET_RANDOM_PODCAST(state) {
      const min = Math.ceil(0);
      const max = Math.floor(state.podcasts.length);
      const random = Math.floor(Math.random() * (max - min) + min);
      // console.log(random);
      state.randomPodcast = state.podcasts[random];
      // console.log(state.randomPodcast);
    },
    SET_CURRENT_USER(state, userData) {
      state.currentUser = userData;
      console.log(state.currentUser);
    }
  },
  actions: {
    fetchPodcasts({ commit, state }) {
      fetch('https://xrcb.cat/ca/wp-json/xrcb/v1/podcasts/?radio_id=2115')
        .then(response => response.json())
        .then(data => {
          // console.log(data);
          commit("SET_PODCASTS", data);
          commit("SET_PROGRAM_NAME");
          commit("SET_PROGRAMS_LIST");
          commit("SET_RANDOM_PODCAST");
          commit("SET_LAST_FIVE");
          state.podcastsLoaded = true;
        })
        .catch(function (err) {
          console.log('Fetch Error :-S', err);
        });
    },
    getCurrentUser({ commit }) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // console.log(user.uid);
          const docRef = doc(db, "users", user.uid);
          // console.log(docRef);
          getDoc(docRef).then((docSnap) => {
            if (docSnap) {
              // console.log("Document data:", docSnap.data());
              commit("SET_CURRENT_USER", docSnap.data());
            } else {
              console.log("No such document!");
            }
          })
        } else {
          console.log('no user logged in');
        }
      });
      return;
    },
  },
  modules: {
  }
})

