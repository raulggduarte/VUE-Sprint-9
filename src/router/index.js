import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Swal from 'sweetalert2'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Inici',
      requiresAuth: false,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'Qui som?',
      requiresAuth: false,
    },
  },
  {
    path: '/programes',
    name: 'Programes',
    component: () => import('../views/ProgramesView.vue'),
    meta: {
      title: 'Programes',
      requiresAuth: true,
    },
  },
  {
    path: '/participar',
    name: 'Participar',
    component: () => import('../views/ParticiparView.vue'),
    meta: {
      title: 'Com Participar',
      requiresAuth: false,
    },
  },
  {
    path: '/contacte',
    name: 'Contacte',
    component: () => import('../views/ContacteView.vue'),
    meta: {
      title: 'Contacte',
      requiresAuth: false,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      title: 'Login',
      requiresAuth: false,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterView.vue'),
    meta: {
      title: 'Registre',
      requiresAuth: false,
    },
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../views/ForgotPassword.vue'),
    meta: {
      title: 'Forgot Password',
      requiresAuth: false,
    },
  },
  {
    path: "/view-podcast/:podcastid",
    name: "ViewPodcast",
    component: () => import('../views/ViewPodcast.vue'),
    meta: {
      title: 'View Podcast',
      requiresAuth: false,
    },
  },
  {
    path: "/view-program/:programId",
    name: "ViewProgram",
    component: () => import('../views/ViewProgram.vue'),
    meta: {
      title: 'View Program',
      requiresAuth: true,
    },
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Ràdio Farró`;
  next();
});

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (to.meta.requiresAuth) {
      if (!user) {
        console.log('logIn required');
        Swal.fire({
          title: 'Alerta!',
          text: 'Per accedir als programes necessites accedir al teu perfil!',
          icon: 'warning',
          confirmButtonText: "D'acord"
        });
        return next({ name: "Login" });
      }
    }
    console.log('acces guaranteed');
    return next();
  })
});

export default router
