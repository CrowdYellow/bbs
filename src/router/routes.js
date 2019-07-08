export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home')
  },
  {
    path: '/articles/:articleId/content',
    name: 'articlesShow',
    component: () => import('@/views/articles/Show')
  },
];
