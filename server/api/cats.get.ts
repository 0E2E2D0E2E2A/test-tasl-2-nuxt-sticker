export default defineEventHandler(async () => {
    const config = useRuntimeConfig()

    const urls: string[] = []

    for (let i = 0; i < 3; i++) {
        const res = await $fetch<{ id: string }>(`${config.catApi}?json=true`)
        urls.push(`${config.catApi}/${res.id}`)
    }

    return { experts: urls }
})
