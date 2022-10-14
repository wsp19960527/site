<template>
    <div color-white w-full h-full text-4 flex flex-col justify-start items-center>
        <user/>
        <div p-4 w-full>
            <div pb-20px font-600>项目：</div>
            <div pl-50px>
                <Project v-for="(item, index) in projects" :key="index" :name="item.name" :desc="item?.desc" :path="item.path" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
export type Project = {
    name: string,
    desc?: string
    path?:string
}
const projects = ref<Project[]>([{
    name: 'blog',
    desc: '一个vuepress博客',
    path:'http://www.wspdaily.cn/blog/'
}])
</script>
<style scope >
.screen {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>