<script setup lang="ts">
import { computed, onMounted, provide, shallowRef } from 'vue'
import { flyHome, flyToEntity, spinGlobe } from '@/services/cesium/camera.service'
import DashiconsAdminHome from '@/components/icon/HomeIcon.vue'
import * as Cesium from 'cesium'
import { useSceneStore } from '@/stores/scenes'
import SceneInfo from '@/components/SceneInfo.vue'
import { init3D } from '@/globe.service'
import { addSiteEntity, loadSiteTileset } from '@/services/cesium/entity'
import { SiteModel } from '@/domain/sites/sites.model'
import { useSitesStore } from '@/stores/sites'

const mapEltId = 'map'

let viewer: Cesium.Viewer
const sceneStore = useSceneStore()
const sitesStore = useSitesStore()

sitesStore.fetchSites()

const scene = computed(() => sitesStore.getByTitle(sceneStore.scene))

onMounted(async () => {
  viewer = await init3D(mapEltId)
  const unsub = viewer.scene.globe.tileLoadProgressEvent.addEventListener(() => {
    if (viewer.scene.globe.tilesLoaded) {
      sitesStore.sites.forEach(async (site) => site && addSiteEntity(viewer, site as SiteModel))
      sitesStore.sites.forEach(async (site) => site && loadSiteTileset(viewer, site as SiteModel))
      spinGlobe(viewer, 0.04)
      unsub()
    }
  })
  viewer.selectedEntityChanged.addEventListener(function (selectedEntity) {
    sceneStore.setScene(selectedEntity?.name)
  })
})

const zoomToSite = function (site: SiteModel) {
  const siteEntity = viewer.entities.getById(site.id + '')
  flyToEntity(viewer, siteEntity)
}
</script>

<template>
  <main class="bg-amber-100 grow relative flex flex-row">
    <aside class="bg-white p-4 flex flex-col w-[400px] h-full shrink-0">
      <div v-if="scene" class="">
        <SceneInfo :scene="scene" @zoom="zoomToSite"></SceneInfo>
      </div>
    </aside>
    <div :id="mapEltId" class="w-full h-full grow"></div>
    <div class="absolute right-2 top-2 bg-transparent">
      <button
        title="Fly home"
        alt="Fly home"
        aria-label="Fly home"
        @click="flyHome(viewer)"
        class="text-white text-5xl font-bold hover:scale-125 duration-700"
      >
        <DashiconsAdminHome></DashiconsAdminHome>
      </button>
    </div>
  </main>
</template>
