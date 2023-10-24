import * as Cesium from 'cesium'
import { CESIUM_ION_TOKEN, INITIAL_RECTANGLE } from '@/config'

export async function init3D(target: string) {
  Cesium.Ion.defaultAccessToken = CESIUM_ION_TOKEN
  Cesium.Camera.DEFAULT_VIEW_RECTANGLE = INITIAL_RECTANGLE
  Cesium.Camera.DEFAULT_VIEW_FACTOR = 0.5

  const viewer = new Cesium.Viewer(target, {
    //requestRenderMode: true,
    timeline: false,
    animation: false,
    baseLayerPicker: false,
    sceneModePicker: false,
    homeButton: false,
    navigationHelpButton: false,
    geocoder: false,
    selectionIndicator: false,
    terrain: Cesium.Terrain.fromWorldTerrain(),
  })
  viewer.scene.globe.depthTestAgainstTerrain = true
  // viewer.camera.setView({destination: INITIAL_RECTANGLE})
  // viewer.scene.globe.show = false

  return viewer
}
