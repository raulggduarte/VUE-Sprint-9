<template>
    <div class="player-container">
        <div class="player-img" :style="{ backgroundImage: `url(${this.podcastImg})` }" @click="this.togglePlaying">
            <svg class="play-logo" xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none"
                stroke="#000000" stroke-width="0.192" v-show="!playing">
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                    stroke-width="0.43200000000000005" />
                <g id="SVGRepo_iconCarrier">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM10 8.8C10 8.50496 10.1522 8.23388 10.3961 8.09466C10.64 7.95545 10.9359 7.9707 11.166 8.13436L15.666 11.3344C15.8747 11.4827 16 11.7325 16 12C16 12.2675 15.8747 12.5173 15.666 12.6656L11.166 15.8656C10.9359 16.0293 10.64 16.0446 10.3961 15.9053C10.1522 15.7661 10 15.495 10 15.2V8.8Z"
                        fill="#ffeb00" />
                </g>
            </svg>
            <!-- <img src="@/assets/images/play-triangle-outline.png" class="play-logo" style="cursor: pointer; color: black"
                v-show="!playing" /> -->
        </div>
        <audio id="player">
            <source :src="this.podcastMp3" type="audio/mp3">
            Your browser does not support the audio element.
        </audio>
        <p>{{ this.podcastTitle }}</p>
    </div>
</template>

<script>
export default {
    name: "SmallPlayer",
    data() {
        return {
            playing: false,
            podcastMp3: this.$store.state.randomPodcast.mp3,
            podcastTitle: this.$store.state.randomPodcast.title,
            podcastImg: this.$store.state.randomPodcast.img,
        }
    },
    methods: {
        togglePlaying() {
            this.playing = !this.playing;
            // console.log(this.playing);
            if (this.playing) {
                document.getElementById('player').play()
                // console.log('play');
            } else {
                document.getElementById('player').pause()
                // console.log('pause');
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.player-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    button {
        background-color: #000;
    }

    .player-img {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 60px;
        width: 60px;
        background-color: #fff;
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        cursor: pointer;

        .play-logo {
            width: 35px;
            height: 35px;
        }
    }

    p {
        width: 170px;
        font-size: 0.55rem;
        color: #fff;
        padding-top: 0.1rem;
        text-align: right;
    }
}
</style>