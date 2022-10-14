// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // not use reactive data else useHead()
    // app: {
    //     head: {
    //         charset: 'utf-8',
    //         viewport: 'width=500, initial-scale=1',
    //         title: 'My App',
    //         meta: [ 
    //             { name: 'description', content: 'My amazing site.'}
    //         ]
    //     }
    // }
    modules:['@unocss/nuxt'],
    unocss: {
        uno: true,
        icons: true,
        attributify: true,
    },
   
})
