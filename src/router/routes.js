
const routes = [
  {
    path: '/testing',
    component: () => import('pages/guest/testing.vue')
  },
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
    ],
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/wardrobesanggar',
    component: () => import('layouts/menulayout.vue'),
    children: [
      { path: '', name: 'wardrobesanggar', component: () => import('pages/menusanggar/wardrobesanggar.vue') }
    ],
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/postingwardrobe',
    component: () => import('layouts/menulayout.vue'),
    children: [
      { path: '', component: () => import('pages/menusanggar/postingwardrobe.vue') },
      { path: '/detail/:id', name: 'detailwardrobe', component: () => import('pages/menusanggar/detailwardrobe.vue') }
    ],
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/',
    component: () => import('layouts/menulayout.vue'),
    children: [
      { path: '', name: 'menuutama', component: () => import('pages/menusanggar/menuutama.vue') }
    ],
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/menuutamaguest',
    component: () => import('layouts/menulayoutguest.vue'),
    children: [
      { path: '', component: () => import('pages/akunguest/menuutamaguest.vue') }
    ]
  },
  {
    path: '/cariguest',
    component: () => import('layouts/menulayoutguest.vue'),
    children: [
      { path: '', component: () => import('pages/akunguest/cariguest.vue') }
    ]
  },
  {
    path: '/wardrobeguest',
    component: () => import('layouts/menulayoutguest.vue'),
    children: [
      { path: '', component: () => import('pages/akunguest/wardrobeguest.vue') }
    ]
  },
  {
    path: '/dancerguest',
    component: () => import('layouts/menulayoutguest.vue'),
    children: [
      { path: '', component: () => import('pages/akunguest/dancerguest.vue') }
    ]
  },
  {
    path: '/guestdancer/detail/:id',
    component: () => import('layouts/menulayoutguest.vue'),
    children: [
      { path: '', name: 'detaildancerguest', component: () => import('pages/menusanggar/detaildancer.vue') }
    ]
  },
  {
    path: '/guestwardrobe/detail/:id',
    component: () => import('layouts/menulayoutguest.vue'),
    children: [
      { path: '', name: 'detailwardrobeguest', component: () => import('pages/menusanggar/detailwardrobe.vue') }
    ]
  },
  {
    path: '/profileguest/:id/:username',
    component: () => import('layouts/menulayoutguest.vue'),
    children: [
      { path: '', name: 'profileGuest', component: () => import('pages/akunguest/profile.vue') }
    ]
  },
  {
    path: '/profileguestwardrobe/:id/:username',
    component: () => import('layouts/menulayoutguest.vue'),
    children: [
      { path: '', name: 'profileGuestWardrobe', component: () => import('pages/akunguest/profile.vue') }
    ]
  },
  {
    path: '/guest/detail/:id',
    component: () => import('layouts/menulayoutguest.vue'),
    children: [
      { path: '', name: 'detailPostingGuest', component: () => import('pages/menusanggar/detailposting.vue') }
    ]
  },
  {
    path: '/profiledancerguest/:id/:username',
    component: () => import('layouts/menulayoutguest.vue'),
    children: [
      { path: '', name: 'profildancerguest', component: () => import('pages/akunguest/profile.vue') }
    ]
  },
  {
    path: '/inputposting',
    component: () => import('layouts/menulayout.vue'),
    children: [
      { path: '', component: () => import('pages/menusanggar/inputposting.vue') },
      { path: '/detail/:id', name: 'detailPosting', component: () => import('pages/menusanggar/detailposting.vue') }
    ],
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/dancers',
    component: () => import('layouts/menulayout.vue'),
    children: [
      { path: '', name: 'dancers', component: () => import('pages/menusanggar/dancers.vue') }
    ],
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/postingdancer',
    component: () => import('layouts/menulayout.vue'),
    children: [
      { path: '', component: () => import('pages/menusanggar/postingdancer.vue') },
      { path: '/detail/:id', name: 'detaildancer', component: () => import('pages/menusanggar/detaildancer.vue') }
    ],
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/profil/:id/:username',
    component: () => import('layouts/menulayout.vue'),
    children: [
      { path: '', name: 'goToProfile', component: () => import('pages/menusanggar/profil.vue') }
    ],
    meta: {
      requiredAuth: true
    }
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
