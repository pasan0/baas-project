const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children:[
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'register', component: () => import('src/pages/RejisterPage.vue') },
      { path: 'my', component: () => import('src/pages/MyPage.vue') },
      { path: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'createarticle', component: () => import('pages/CreateArticle.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes




// git - https://github.com/kdjayakody/baasproject.git
