import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
    routes: (_routes) => [
        {
            name: 'index',
            path: '/',
            component: () => import('~/pages/index.vue').then(r => r.default || r)
        },
        {
            name: 'sticker',
            path: '/sticker',
            component: () => import('~/pages/sticker.vue').then(r => r.default || r)
        },
    ],
}
