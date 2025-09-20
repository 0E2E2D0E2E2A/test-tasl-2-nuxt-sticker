export default defineEventHandler(async () => {
    const urls: string[] = []

    for (let i = 0; i < 3; i++) {
        const res = await $fetch<{ id: string }>("https://cataas.com/cat?json=true")
        urls.push(`https://cataas.com/cat/${res.id}`)
    }

    return { experts: urls }
})
