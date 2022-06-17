<script setup lang="ts">
const router = useRouter()
const name = ref()
function go() {
  if (name.value) {
    router.push(`/name/${name.value}`)
  }
}
</script>

<template>
  <div flex="~ col" w="screen" items="center" p="y20 x4">
    <section flex="~ col" items="center">
      <div flex="~" items="center" m="b4">
        <img class="w-40" src="/logo.svg" alt="logo" />
        <div class="i-clarity:plus-line" text="30px" />
        <div class="i-logos:nuxt-icon" text="100px" m="l7" />
      </div>

      <h1 font="semibold" text="2xl">Vide Nuxt</h1>
      <p font="italic" opacity="60" m="t1">
        Nuxt3 superlight Beginner Starter Template for SSR
      </p>
    </section>
    <section m="y10" flex="~ col" items="center" space="y3">
      <input
        bg="lightbg dark:darkbg"
        border="~ zinc-300 dark:textl rounded"
        text="center"
        outline="none"
        p="x4 y2"
        type="text"
        @keydown.enter="go"
        v-model="name"
        placeholder="What`s your name?"
      />
      <button class="btn" @click="go">GO</button>
    </section>
    <Footer />
  </div>
</template>
