<template>
    <div class="player-container" :style="{ border: this.displayBorder }">
        <div class="player-img" :style="{ display: this.displayImg, backgroundImage: `url(${this.podcastImg})` }"></div>
        <div class="play-text">
            <audio id="player" controls>
                <source :src="this.podcastMp3" type="audio/mp3">
                Your browser does not support the audio element.
            </audio>
            <p :style="{ display: this.displayTitle }">{{ this.podcastTitle }}</p>
        </div>
        <!-- <div>
            <button @click="this.togglePlaying">Play/Pause</button>
            <button onclick="document.getElementById('player').volume += 0.1">Vol +</button>
            <button onclick="document.getElementById('player').volume -= 0.1">Vol -</button>
        </div> -->
    </div>
</template>

<script>
export default {
    name: "AudioPlayback",
    props: [
        'currentPodcast',
        'displayImg',
        'displayTitle',
        'displayBorder',
    ],
    data() {
        return {
            playing: false,
            podcastMp3: this.currentPodcast.mp3,
            podcastTitle: this.currentPodcast.title,
            podcastImg: this.currentPodcast.img,
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
    }
};
</script>

<style lang="scss" scoped>
.player-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border: 2px solid #808080;
    border-radius: 10px;
    padding: 0.5rem 0.5rem;
    margin: 0.5rem 1rem;

    @media (min-width: 720px) {
        margin: 0.5rem 4rem;
    }

    @media (min-width: 1440px) {
        margin: 1rem 20vw;
    }

    .player-img {
        width: 75px;
        height: 75px;
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        margin-right: 1rem;
        border: 1px solid #000;
    }

    .play-text {
        width: 75%;

        audio {
            width: 100%;
            height: 35px;

            @media (min-width: 720px) {
                height: 50px;
            }

            &::-webkit-media-controls-panel {
                background-color: #e1e1e1;
            }
        }

        p {
            font-size: 0.7rem;
            margin-top: 0.2rem;
            padding-left: 1rem;
            text-align: left;
        }
    }
}
</style>