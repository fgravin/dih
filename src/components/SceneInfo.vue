<script setup lang="ts">
import type { SiteModel } from '@/domain/sites/sites.model'
import { computed } from 'vue'

const props = defineProps<{
  scene: SiteModel
}>()
const emit = defineEmits<{
  (e: 'zoom', scene: SiteModel): void
  (e: 'enter', scene: SiteModel): void
  (e: 'close'): void
}>()

const scene = computed(() => props.scene)
</script>
<template>
  <section class="flex flex-col justify-between h-full gap-6">
    <header class="flex flex-row justify-between">
      <div class="grow text-center text-2xl">{{ scene.shortTitle }}</div>
      <div class="flex items-center content-end">
        <span
          class="cursor-pointer text-xl hover:text-gray-300 transition-colors"
          @click="emit('close')"
          >✕</span
        >
      </div>
    </header>
    <div class="grow flex flex-col justify-center gap-4">
      <div class="flex justify-center"><img :src="scene.src" class="" /></div>
      <!--
      <div class="grow">
        {{ scene.description }}
      </div>
-->
    </div>
    <footer class="flex items-center justify-center gap-4">
      <div class="w-1/2 text-center">
        <button @click="emit('enter', scene)" class="nav-btn">
          Enter the story
        </button>
      </div>
      <div class="w-1/2 text-center">
        <button @click="emit('zoom', scene)" class="nav-btn">
          Explore in 3D
        </button>
      </div>
    </footer>
  </section>
</template>

<style scoped>
.nav-btn {
  @apply uppercase font-bold bg-primary hover:bg-primary/75 px-4 py-3 rounded-3xl w-full;
}
</style>
