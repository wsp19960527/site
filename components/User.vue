<script setup lang="ts">
    import { useDark, useToggle } from '@vueuse/core'
    const isDark = useDark({
        selector: 'html',
        attribute: 'class',
        valueLight: 'light',
        valueDark:'dark',
    })
    const toggleDark = useToggle(isDark)
    const nickName = ref('life')
    const slogan = ref('大兴西北')
</script>
<template>
    <div class="user">
        <img clas w-100px h-100px b-rd-50px src="/image/user-bg.jpg" alt="avatar"> 
        <div text-8 mt-2>Hi {{nickName}}</div>
        <div @click="() => toggleDark()" class="dark:carbon-moon carbon-sun" w-100px h-100px text-12></div>
        <p text-12 mt-2>{{slogan}}</p>
    </div>
</template>
<style scope>
    .user{
        background-image: url('/image/user-bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 300px;
    }
</style>
