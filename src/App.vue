<script setup lang="ts">
import { onMounted, Ref, ref, watch } from 'vue'
import { flyToPOI, init3D, mapContext } from '@/3d'
import { switchBahlaModel } from '@/services/bahla.service'
import { addAlFarid } from '@/services/hegra.service'
import { getSiteData } from '@/api/sites.api'
import { siteApiToModel } from '@/api/api.mappers'
import { addSiteEntity } from '@/services/entity'
import Cesium from 'cesium'
import { SiteModel, TilesetProp } from '@/domain/sites/sites.model'
import { zoomToTileset } from '@/services/camera.service'
const mapEltId = 'map'

const model = ref('OM_Bahla_fort_30m-nadir_tiled_200K_4K_1024')
const tilsetsProps: Ref<TilesetProp[]> = ref(null)

onMounted(async () => {
  await init3D(mapEltId)

  const apiSites = await getSiteData()
  const sites = apiSites.map(siteApiToModel)
  tilsetsProps.value = sites.map((site) => site.tilesets).flat()
  sites.forEach((site) => addSiteEntity(mapContext.viewer, site))

  // switchBahlaModel(mapContext.viewer, model.value)
  // addAlFarid(mapContext.viewer)
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
function flyToTileset(tileset: Cesium.Cesium3DTileset) {
  zoomToTileset(tileset, mapContext.viewer)
}

function switchBahlaModel_(model: string) {}
</script>

<template>
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
      <template v-for="tilsetProp in tilsetsProps">
        <button
          class="rounded capitalize text-white bg-blue-500 hover:bg-blue-300 my-1 px-10"
          @click="flyToTileset(tilsetProp.tileset)"
        >
          {{ tilsetProp.name }}
        </button>
      </template>
      <!--
      <div class="abr">
        <div class="flex items-center items">
          <input
            id="OM_Bahla_fort_30m-nadir_tiled_500K_4K_256"
            name="bahla-model"
            v-model="model"
            type="radio"
            class="h-4 w-4 text-blue-500 text-blue-300 bnm"
            value="OM_Bahla_fort_30m-nadir_tiled_500K_4K_256"
          /><label
            for="OM_Bahla_fort_30m-nadir_tiled_500K_4K_256"
            class="ml-3 block text-sm font-medium leading-6 text-main"
            >OM_Bahla_fort_30m-nadir_tiled_500K_4K_256</label
          >
        </div>
        <div class="flex items-center items">
          <input
            id="OM_Bahla_fort_30m-nadir_tiled_500K_8K_256"
            name="bahla-model"
            v-model="model"
            type="radio"
            class="h-4 w-4 text-blue-500 text-blue-300 bnm"
            value="OM_Bahla_fort_30m-nadir_tiled_500K_8K_256"
          /><label
            for="OM_Bahla_fort_30m-nadir_tiled_500K_8K_256"
            class="ml-3 block text-sm font-medium leading-6 text-main"
            >OM_Bahla_fort_30m-nadir_tiled_500K_8K_256</label
          >
        </div>
        <div class="flex items-center items">
          <input
            id="OM_Bahla_fort_30m-nadir_tiled_500K_8K_256-jpeg"
            name="bahla-model"
            v-model="model"
            type="radio"
            class="h-4 w-4 text-blue-500 text-blue-300 bnm"
            value="OM_Bahla_fort_30m-nadir_tiled_500K_8K_256-jpeg"
          /><label
            for="OM_Bahla_fort_30m-nadir_tiled_500K_8K_256-jpeg"
            class="ml-3 block text-sm font-medium leading-6 text-main"
            >OM_Bahla_fort_30m-nadir_tiled_500K_8K_256-jpeg</label
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
      </div>
-->
    </aside>
    <div :id="mapEltId" class="w-full h-full"></div>
  </main>
</template>
