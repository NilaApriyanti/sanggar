
const routes = [
  {
    path: '/login',
    component: () => import('pages/guest/login.vue')
  },
  {
    path: '/daftar',
    component: () => import('pages/guest/daftar.vue')
  },
  {
    path: '/carisanggar',
    component: () => import('layouts/menulayout.vue'),
    children: [
      { path: '', component: () => import('pages/menusanggar/carisanggar.vue') }
    ]
  },
  {
    path: '/wardrobesanggar',
    component: () => import('layouts/menulayout.vue'),
    children: [
      { path: '', component: () => import('pages/menusanggar/wardrobesanggar.vue') }
    ]
  },
  {
    path: '/menuutama',
    component: () => import('layouts/menulayout.vue'),
    children: [
      { path: '', component: () => import('pages/menusanggar/menuutama.vue') }
    ]
  },
  {
    path: '/inputposting',
    component: () => import('layouts/menulayout.vue'),
    children: [
      { path: '', component: () => import('pages/menusanggar/inputposting.vue') }
    ]
  },
  {
    path: '/dancers',
    component: () => import('layouts/menulayout.vue'),
    children: [
      { path: '', component: () => import('pages/menusanggar/dancers.vue') }
    ]
  },
  {
    path: '/profil',
    component: () => import('layouts/menulayout.vue'),
    children: [
      { path: '', component: () => import('pages/menusanggar/profil.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
