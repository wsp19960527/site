<template>
    <footer bg-black h-100px w-full flex justify-center items-center fixed bottom-0 left-0>
        <NuxtLink color-white decoration-black to="https://beian.miit.gov.cn/">备案号：浙ICP备2021036356号</NuxtLink>
    </footer>
</template>
<style scoped>
    footer{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 0;
        left: 0;
        height: 100px;
        background-color: #000;
    }
    .link{
        color: #fff;
        text-decoration: black;
    }
</style>