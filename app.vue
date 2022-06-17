<script setup>
useHead({
  title: "Vide",
  link: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
})
onMounted(() => {
  themeCheck()
})
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>
