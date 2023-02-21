<template>
    <div class="navBar bg-dark" v-show="!mobile">
        <router-link :to="{ name: 'Home' }" class="btn-primary">
            Inici
        </router-link>
        <router-link :to="{ name: 'About' }" class="btn-primary">
            Sobre Nosaltres
        </router-link>
        <router-link :to="{ name: 'Programes' }" class="btn-primary">
            Programes
        </router-link>
        <router-link :to="{ name: 'Participar' }" class="btn-primary">
            Com Participar
        </router-link>
        <router-link :to="{ name: 'Contacte' }" class="btn-primary">
            Contacte
        </router-link>
    </div>
    <div @click="toggleMobileNav" class="toggle-mobile-icon-closed nav-icon" v-show="mobile">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <path fill="#3A3A3A" fill-rule="evenodd"
                d="M6.5 9h17a.5.5 0 1 1 0 1h-17a.5.5 0 0 1 0-1zm0 6h17a.5.5 0 1 1 0 1h-17a.5.5 0 1 1 0-1zm0 6h17a.5.5 0 1 1 0 1h-17a.5.5 0 1 1 0-1z">
            </path>
        </svg>
    </div>

    <transition name="mobile-navBar">
        <ul class="mobile-navBar bg-dark" v-show="mobileNav" @click="this.mobileNav = false">
            <router-link to="/" class="btn-primary">
                Inici
            </router-link>
            <router-link to="/about" class="btn-primary">
                Sobre Nosaltres
            </router-link>
            <router-link to="/programes" class="btn-primary">
                Programes
            </router-link>
            <router-link to="/participar" class="btn-primary">
                Com Participar
            </router-link>
            <router-link to="/contacte" class="btn-primary">
                Contacte
            </router-link>
            <div @click="toggleMobileNav" class="toggle-mobile-icon-open btn-primary" v-show="mobile & mobileNav">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <path fill="#fff" fill-rule="evenodd"
                        d="M6.5 9h17a.5.5 0 1 1 0 1h-17a.5.5 0 0 1 0-1zm0 6h17a.5.5 0 1 1 0 1h-17a.5.5 0 1 1 0-1zm0 6h17a.5.5 0 1 1 0 1h-17a.5.5 0 1 1 0-1z">
                    </path>
                </svg>
            </div>
        </ul>
    </transition>

</template>

<script>

export default {
    data() {
        return {
            mobile: null,
            mobileNav: null,
            windownWidth: null,
        };
    },
    computed: {
    },
    methods: {
        checkScreen() {
            this.windownWidth = window.innerWidth;
            if (this.windownWidth <= 992) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
    },
    created() {
        window.addEventListener("resize", this.checkScreen);
        this.checkScreen();
    },
    watch: {
        '$route'() {
            this.mobileNav = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.navBar {
    padding: 0 4vw;
    display: flex;
    justify-content: space-around;

    a {
        color: #fff;
        padding: 1rem 0.5rem;
    }

    .router-link-active {
        color: rgb(208, 184, 0);
    }
}

.toggle-mobile-icon-closed {
    z-index: 0;
}

.mobile-navBar {
    padding: 1.3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 1;

    a {
        color: #fff;
        padding-bottom: 1rem;
    }

    .router-link-active {
        color: rgb(208, 184, 0);
    }

    .toggle-mobile-icon-open {
        cursor: pointer;

        &:hover {
            svg {
                path {
                    fill: rgb(208, 184, 0) !important;
                }
            }
        }
    }
}

.mobile-navBar-enter-active,
.mobile-navBar-leave-active {
    transition: all 1s ease;
}

.mobile-navBar-enter-from,
.mobile-navBar-leave-to {
    transform: translateY(-275px);
    opacity: 0;
}

.mobile-navBar-enter-to {
    transform: translateY(0px);
    opacity: 1;
}

.menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
    color: white;
}
</style>