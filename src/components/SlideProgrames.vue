<template>
    <div class="carousel-container">
        <div class="titleMoving">
            <h1>Escolta les novetats de Ràdio Farró!</h1>
        </div>
        <div class="carousel">
            <div class="inner" ref="inner" :style="innerStyles">
                <div class="card" v-for="podcast in lastFive" :key="podcast.id">
                    <div class="podcast-img" :style="{ backgroundImage: `url(${podcast.img})` }" alt="podcast_image">
                    </div>
                    <h2>{{ podcast.title }}</h2>
                    <router-link class="link" :to="{ name: 'ViewPodcast', params: { podcastid: podcast.id } }">
                        Escoltar
                    </router-link>
                </div>
            </div>
        </div>
        <div class="navButtons">
            <button @click="prev">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff"
                    height="20px" width="20px" version="1.1" id="Layer_1" viewBox="-51.19 -51.19 614.33 614.33"
                    xml:space="preserve" stroke="#000000" stroke-width="0.00511947" transform="rotate(180)">
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                        stroke-width="8.191151999999999" />
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <g>
                                <path
                                    d="M407.553,248.453L161.9,3.12c-4.16-4.16-10.88-4.16-15.04,0l-42.453,42.347c-4.16,4.16-4.16,10.88,0,15.04l195.733,195.52 l-195.733,195.52c-4.16,4.16-4.16,10.88,0,15.04l42.347,42.24c4.16,4.16,10.88,4.16,15.04,0l245.653-245.333 C411.713,259.44,411.713,252.613,407.553,248.453z M154.327,486.32l-27.307-27.2L322.753,263.6c4.16-4.16,4.16-10.88,0-15.04 L127.127,53.04l27.307-27.2L384.94,256.027L154.327,486.32z" />
                            </g>
                        </g>
                    </g>
                </svg>
            </button>
            <button @click="next">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff"
                    height="20px" width="20px" version="1.1" id="Layer_1" viewBox="-51.19 -51.19 614.33 614.33"
                    xml:space="preserve" stroke="#000000" stroke-width="0.00511947">
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                        stroke-width="8.191151999999999" />
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <g>
                                <path
                                    d="M407.553,248.453L161.9,3.12c-4.16-4.16-10.88-4.16-15.04,0l-42.453,42.347c-4.16,4.16-4.16,10.88,0,15.04l195.733,195.52 l-195.733,195.52c-4.16,4.16-4.16,10.88,0,15.04l42.347,42.24c4.16,4.16,10.88,4.16,15.04,0l245.653-245.333 C411.713,259.44,411.713,252.613,407.553,248.453z M154.327,486.32l-27.307-27.2L322.753,263.6c4.16-4.16,4.16-10.88,0-15.04 L127.127,53.04l27.307-27.2L384.94,256.027L154.327,486.32z" />
                            </g>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'SlideProgrames',
    data() {
        return {
            innerStyles: {},
            step: '',
            transitioning: false,
        }
    },
    mounted() {
        this.setStep();
        this.resetTranslate();
    },

    created() {
        window.addEventListener("resize", this.setStep);
    },
    computed: {
        ...mapGetters(['lastFive']),
    },
    methods: {
        setStep() {
            const innerWidth = this.$refs.inner.scrollWidth;
            const totalCards = this.lastFive.length;
            this.step = `${innerWidth / totalCards}px`;
            // console.log(this.$refs.inner.scrollWidth, this.lastFive.length, this.step);
        },
        next() {
            if (this.transitioning) return
            this.transitioning = true
            this.moveLeft()
            this.afterTransition(() => {
                const card = this.lastFive.shift()
                this.lastFive.push(card)
                this.resetTranslate()
                this.transitioning = false
            })
        },
        prev() {
            if (this.transitioning) return
            this.transitioning = true
            this.moveRight()
            this.afterTransition(() => {
                const card = this.lastFive.pop()
                this.lastFive.unshift(card)
                this.resetTranslate()
                this.transitioning = false
            })
        },
        moveLeft() {
            this.innerStyles = {
                transform: `translateX(-${this.step})
                    translateX(-${this.step})`
            }
        },
        moveRight() {
            this.innerStyles = {
                transform: `translateX(${this.step})
                    translateX(-${this.step})`
            }
        },
        afterTransition(callback) {
            const listener = () => {
                callback()
                this.$refs.inner.removeEventListener('transitionend', listener)
            }
            this.$refs.inner.addEventListener('transitionend', listener)
        },
        resetTranslate() {
            this.innerStyles = {
                transition: 'none',
                transform: `translateX(-${this.step})`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.carousel-container {
    padding-top: 1.5rem;
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
    background-color: #15BBD1;

    .titleMoving {
        background-color: #D11575;
        overflow: hidden;

        h1 {
            width: 600px;
            padding: 0.5rem 0;
            font-size: 2rem;
            color: white;
            text-align: center;
            line-height: 2.5rem;
            font-weight: 400;
            position: relative;
            animation: horizontal360 7s infinite linear;

            @media (min-width: 720px) {
                animation: horizontal720 10s infinite linear;
                width: initial;
            }

            @media (min-width: 1440px) {
                animation: horizontal1440 12s infinite linear;

            }

            @media (min-width: 1920px) {
                animation: horizontal1920 15s infinite linear;
            }
        }
    }

    .carousel {
        position: relative;
        z-index: 2;
        overflow: hidden;
        margin: 1.5rem 25px;
        background-color: #000;
        max-width: 1150px;


        @media (min-width: 1182px) {
            overflow: initial;
            background-color: #fff;
            margin: 1.5rem auto;
        }

        .inner {
            transition: transform 0.2s;
            white-space: nowrap;

            @media (min-width: 1182px) {
                transform: initial !important;
                padding: 1rem 0;
            }

            .card {
                width: 200px;
                margin-right: 1rem;
                display: inline-flex;
                height: 250px;
                background-color: #fff;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                background: linear-gradient(white, grey);

                &:last-child {
                    margin-right: 0;
                }

                @media (min-width: 1153px) {
                    border-radius: 5px;
                }

                .podcast-img {
                    width: 120px;
                    height: 120px;
                    background-size: cover;
                    background-position: center;
                    background-color: #fff;
                    border: 2px solid black;
                }

                h2 {
                    font-size: 0.5rem;
                    padding: 0.5rem 0;
                    width: 150px;
                    height: 70px;
                    overflow-wrap: break-word;
                    white-space: break-spaces;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: black;
                }

                .link {
                    font-size: 0.7rem;
                    padding: 0.2rem 0.7rem;
                    border-radius: 30px;
                    background-color: #D11575;
                    color: #fff;

                    &:hover {
                        color: #d0b800;
                    }

                }
            }
        }
    }

    .navButtons {
        height: 250px;
        position: absolute;
        width: 100%;
        top: 292px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (min-width: 375px) {
            top: 322px;
        }

        @media (min-width: 720px) {
            top: 368px;
        }

        @media (min-width: 992px) {
            top: 396px;
        }

        @media (min-width: 1182px) {
            display: none;
        }

        button {
            width: 25px;
            border: none;
            z-index: 1;
            height: 100%;
            background-color: #000;

            @media (min-width: 720px) {
                width: 34px;
            }

            &:hover {
                cursor: pointer;
            }
        }
    }
}

@keyframes horizontal360 {
    from {
        left: 600px;
    }

    to {
        left: -600px;
    }
}

@keyframes horizontal720 {
    from {
        left: 800px;
    }

    to {
        left: -800px;
    }
}

@keyframes horizontal1440 {
    from {
        left: 1200px;
    }

    to {
        left: -1200px;
    }
}

@keyframes horizontal1920 {
    from {
        left: 1800px;
    }

    to {
        left: -1800px;
    }
}
</style>