<script setup lang="ts">
import { onMounted } from 'vue'
import { flyToPOI, init3D, mapContext } from '@/3d'
const mapEltId = 'map'

onMounted(async () => {
  await init3D(mapEltId)

  // add3DModel()
  // moveToModel(add3DModel())
})

function info() {
  console.log(mapContext.viewer.camera)
}
function flyTo() {
  flyToPOI()
}
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
  <main class="bg-amber-100 grow">
    <div :id="mapEltId" class="w-full h-full"></div>
  </main>
</template>
