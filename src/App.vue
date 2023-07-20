<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { flyToPOI, init3D, mapContext } from '@/3d'
import { switchBahlaModel } from '@/services/bahla.service'
import { addAlFarid } from '@/services/hegra.service'
const mapEltId = 'map'

const model = ref('30m_200K_4K')

onMounted(async () => {
  await init3D(mapEltId)
  switchBahlaModel(mapContext.viewer, model.value)
  addAlFarid(mapContext.viewer)
  // add3DModel()
  // moveToModel(add3DModel())
})

watch(model, (value) => switchBahlaModel(mapContext.viewer, value))
function info() {
  console.log(mapContext.viewer.camera)
}
function flyTo() {
  flyToPOI()
}

function switchBahlaModel_(model: string) {}
</script>

<template>
  <div></div>
  <header
    class="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-[#4b8ec7] bg-slate-100"
  >
    <nav aria-label="Global" class="flex mx-auto max-w-container px-4 sm:px-6 lg:px-8">
      <div class="w-full relative flex items-center justify-between py-[2.125rem]">
        <div class="grow mx-6 text-4xl">Dive Into Heritage</div>
        <div class="items-end flex gap-2">
          <a href="https://unitar.org/" alt="UNITAR" class="ml-5">
            <img src="/unitar.png" class="h-16" />
          </a>
          <a href="https://unitar.org/unosat" alt="UNOSAT" class="ml-5">
            <img src="/unosat.png" class="h-16" />
          </a>
        </div>
      </div>
    </nav>
  </header>
  <main class="bg-amber-100 grow relative">
    <aside class="absolute left-2 top-2 z-10 p-4 bg-slate-100 flex flex-col">
      <button class="rounded-full text-white bg-blue-500 hover:bg-blue-300 my-5" @click="flyTo">
        Fly to Al Farid
      </button>
      <div class="abr">
        <div class="flex items-center items">
          <input
            id="30m_200K_4K"
            name="bahla-model"
            v-model="model"
            type="radio"
            class="h-4 w-4 text-blue-500 text-blue-300 bnm"
            value="30m_200K_4K"
          /><label for="30m_200K_4K" class="ml-3 block text-sm font-medium leading-6 text-main"
            >30m_200K_4K</label
          >
        </div>
        <div class="flex items-center items">
          <input
            id="30m_200K_8K"
            name="bahla-model"
            v-model="model"
            type="radio"
            class="h-4 w-4 text-blue-500 text-blue-300 bnm"
            value="30m_200K_8K"
          /><label for="30m_200K_8K" class="ml-3 block text-sm font-medium leading-6 text-main"
            >30m_200K_8K</label
          >
        </div>
        <div class="flex items-center items">
          <input
            id="30m_200K_16K"
            name="bahla-model"
            v-model="model"
            type="radio"
            class="h-4 w-4 text-blue-500 text-blue-300 bnm"
            value="30m_200K_16K"
          /><label for="30m_200K_16K" class="ml-3 block text-sm font-medium leading-6 text-main"
            >30m_200K_16K</label
          >
        </div>
        <div class="flex items-center items">
          <input
            id="30m_500K_4K"
            name="bahla-model"
            v-model="model"
            type="radio"
            class="h-4 w-4 text-blue-500 text-blue-300 bnm"
            value="30m_500K_4K"
          /><label for="30m_500K_4K" class="ml-3 block text-sm font-medium leading-6 text-main"
            >30m_500K_4K</label
          >
        </div>
        <div class="flex items-center items">
          <input
            id="30m_500K_8K"
            name="bahla-model"
            v-model="model"
            type="radio"
            class="h-4 w-4 text-blue-500 text-blue-300 bnm"
            value="30m_500K_8K"
          /><label for="30m_500K_8K" class="ml-3 block text-sm font-medium leading-6 text-main"
            >30m_500K_8K</label
          >
        </div>
        <div class="flex items-center items">
          <input
            id="30m_500K_8K_8lods"
            name="bahla-model"
            v-model="model"
            type="radio"
            class="h-4 w-4 text-blue-500 text-blue-300 bnm"
            value="30m_500K_8K_8lods"
          /><label
            for="30m_500K_8K_8lods"
            class="ml-3 block text-sm font-medium leading-6 text-main"
            >30m_500K_8K_8lods</label
          >
        </div>
        <div class="flex items-center items">
          <input
            id="cropped_30m_200K_4K"
            name="bahla-model"
            v-model="model"
            type="radio"
            class="h-4 w-4 text-blue-500 text-blue-300 bnm"
            value="cropped_30m_200K_4K"
          /><label
            for="cropped_30m_200K_4K"
            class="ml-3 block text-sm font-medium leading-6 text-main"
            >cropped_30m_200K_4K</label
          >
        </div>
        <div class="flex items-center items">
          <input
            id="cropped_30m_200K_8K"
            name="bahla-model"
            v-model="model"
            type="radio"
            class="h-4 w-4 text-blue-500 text-blue-300 bnm"
            value="cropped_30m_200K_8K"
          /><label
            for="cropped_30m_200K_8K"
            class="ml-3 block text-sm font-medium leading-6 text-main"
            >cropped_30m_200K_8K</label
          >
        </div>
        <div class="flex items-center items">
          <input
            id="cropped_30m_500K_4K"
            name="bahla-model"
            v-model="model"
            type="radio"
            class="h-4 w-4 text-blue-500 text-blue-300 bnm"
            value="cropped_30m_500K_4K"
          /><label
            for="cropped_30m_500K_4K"
            class="ml-3 block text-sm font-medium leading-6 text-main"
            >cropped_30m_500K_4K</label
          >
        </div>
        <div class="flex items-center items">
          <input
            id="cropped_80m_500K_8K_1lods"
            name="bahla-model"
            v-model="model"
            type="radio"
            class="h-4 w-4 text-blue-500 text-blue-300 bnm"
            value="cropped_80m_500K_8K_1lods"
          /><label
            for="cropped_80m_500K_8K_1lods"
            class="ml-3 block text-sm font-medium leading-6 text-main"
            >cropped_80m_500K_8K_1lods</label
          >
        </div>
      </div>
    </aside>
    <div :id="mapEltId" class="w-full h-full"></div>
  </main>
</template>
