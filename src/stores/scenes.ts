import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export type DihScene = any

export const useSceneStore = defineStore('scenes', () => {
  const scene = ref()

  function setScene(sceneId: number) {
    scene.value = sceneId
  }
  return { scene, setScene }
})
