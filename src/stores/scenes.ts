import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export type DihScene = any

export const useSceneStore = defineStore('scenes', () => {
  const scenes: Ref<DihScene[]> = ref([])

  function add(scene: DihScene) {
    scenes.value = [...scenes.value, scene]
  }
  return { scenes, add }
})
