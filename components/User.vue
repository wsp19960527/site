<script setup lang="ts">
    const nickName = ref('life')
    const slogan = ref('一起大兴西北')
</script>
<template>
    <div class="user">
        <img clas w-100px h-100px b-rd-50px src="/image/user-bg.jpg" alt="avatar">
        <div text-8 mt-2>Hi {{nickName}}</div>
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