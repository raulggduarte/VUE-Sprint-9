<template>
    <div class="program-view" v-if="currentProgram">
        <div class="post-image"
            :style="{ backgroundImage: `url(${this.currentProgram[currentProgram.length - 1].img})` }"></div>
        <h1>{{ this.currentProgram[0].programName }}</h1>
        <div class="post-player" v-for="podcast in currentProgram" :key="podcast.id">
            <AudioPlayback :currentPodcast="podcast" displayImg="true" />
        </div>
    </div>
</template>

<script>
import AudioPlayback from '@/components/AudioPlayback.vue';

export default {
    name: "ViewProgram",
    components: {
        AudioPlayback,
    },
    data() {
        return {
            currentProgram: null,
        };
    },
    async mounted() {
        this.currentProgram = await this.$store.state.podcasts.filter((podcast) => {
            return (podcast.programId).toString() === this.$route.params.programId;
        });
    },
};
</script>

<style lang="scss">
.program-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5rem;

    .post-image {
        width: 200px;
        height: 200px;
        background-position: center;
        background-size: cover;
        border-radius: 8px;
        margin: 1rem 0;
    }

    h1 {
        font-size: 2rem;
        margin: 0.5rem;
    }

    .post-player {
        width: 100%;
    }
}
</style>