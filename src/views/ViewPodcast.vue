<template>
    <div class="podcast-view" v-if="currentPodcast">
        <img class="post-image" :src="this.currentPodcast[0].img" alt="podcastImg" />
        <h1>{{ this.currentPodcast[0].title }}</h1>
        <h5>
            Publicat el
            {{
                new Date(this.currentPodcast[0].date).toLocaleString("ca", {
                    dateStyle: "long",
                })
            }}
        </h5>
        <AudioPlayback :currentPodcast="this.currentPodcast[0]" displayImg="none" displayTitle="none"
            displayBorder="none" />
        <p class="post-description" v-html="this.currentPodcast[0].description"></p>
        <router-link class="link-to-program"
            :to="{ name: 'ViewProgram', params: { programId: this.currentPodcast[0].programId } }">
            Més de <em>{{ this.currentPodcast[0].programName }}</em>
        </router-link>
    </div>
</template>

<script>
import AudioPlayback from '@/components/AudioPlayback.vue';

export default {
    name: "ViewPodcast",
    components: {
        AudioPlayback,
    },
    data() {
        return {
            currentPodcast: null,
        };
    },
    async mounted() {
        this.currentPodcast = await this.$store.state.podcasts.filter((podcast) => {
            return (podcast.id).toString() === this.$route.params.podcastid;
        });
        // console.log(this.currentPodcast[0]);
    },
};
</script>

<style lang="scss">
.podcast-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;

    .post-image {
        width: 300px;
    }

    h1 {
        font-size: 1.2rem;
        padding: 2rem 0 0.5rem 0;
    }

    h5 {
        font-size: 0.7rem;
    }

    .player-container {
        width: 450px;
    }

    .post-description {
        font-size: 0.6rem;
        padding: 0 4rem;
        align-self: flex-start;
        text-align: justify;

        em,
        a,
        strong {
            font-size: 0.6rem;
            font-weight: inherit;
        }
    }

    .link-to-program {
        margin: 0.5rem 4rem;
        padding: 0.5rem 0.7rem;
        font-size: 0.6rem;
        background-color: #000;
        border-radius: 25px;
        color: #fff;
        align-self: flex-start;

        em {
            font-size: 0.7rem;
            color: inherit;
        }

        &:hover {
            color: rgb(255, 234, 0);
        }
    }

}
</style>