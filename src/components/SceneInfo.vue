<script setup lang="ts">
import type { SiteModel } from '@/domain/sites/sites.model'
import { computed } from 'vue'

const props = defineProps<{
  scene: SiteModel
}>()
const emit = defineEmits<{
  (e: 'zoom', scene: SiteModel): void
}>()

const scene = computed(() => props.scene)
</script>
<template>
  <section class="flex flex-col justify-between h-full gap-8 mt-8">
    <header class="text-center text-2xl">{{ scene.shortTitle }}</header>
    <div class="grow flex flex-col justify-center gap-4">
      <div><img src="/api/hegra/hegra4.jpeg" /></div>
      <div class="grow">
        {{ scene.description }}
      </div>
    </div>
    <footer class="flex items-center justify-center">
      <div class="w-1/2 text-center">
        <button @click="emit('zoom', scene)">Zoom</button>
      </div>
      <div class="w-1/2 text-center">
        <button>Navigate</button>
      </div>
    </footer>
  </section>
</template>

<style scoped></style>
