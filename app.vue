<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const desc = ref('My amazing site.')
const color = useColor()
useHead({
  title:'前端技术学习',
  meta: [
    { name: 'description', content: desc }
  ],
  bodyAttrs: {
    class: 'test'
  },
})
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
html,body,.app{
  width: 100vw;
  height: 100vh;
}
</style>