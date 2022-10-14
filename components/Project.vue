<template>
    <div bg-white w-200px b-rd p-2 filter-drop-shadow-md @click="open">
        <h3 color-dark-700>{{props.name}}</h3>
        <p pt-10px text-3 color-stone-500 v-if="props.desc">{{props.desc}}</p>
    </div>
</template>
<script setup lang="ts">
interface Props {
    name:string
    desc?:string
    path?:string
}
const props = defineProps<Props>()
const open = () => {
    if(props.path){
        window.open(props.path)
    }
}
</script>