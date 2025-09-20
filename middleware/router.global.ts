export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path !== '/' && to.path !== '/sticker') {
        return navigateTo('/')
    }
})
