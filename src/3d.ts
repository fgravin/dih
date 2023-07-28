import * as Cesium from 'cesium'
import { setUpClick } from '@/services/interactions'
import { getSiteData } from '@/api/sites.api'
import { setBahlaCamera } from '@/services/bahla.service'
import { alFaridTombLocation, initialExtent } from '@/services/position.const'
import { siteApiToModel } from '@/api/api.mappers'
import { addSiteEntity } from '@/services/entity'

export interface MapContext {
  viewer: Cesium.Viewer
}
export const mapContext: MapContext = { viewer: null }

export async function init3D(target: string) {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MmMwNDg2Zi03NWIyLTQwMTAtYWY0Zi03YWVmZGQyZjMzZDQiLCJpZCI6MTQxMTQ4LCJpYXQiOjE2ODQ5MjIyMTV9.J0Jqm9Haf2JHm6AfvFPR340N2XEg5RiD070Yxz9S3tM'

  Cesium.Camera.DEFAULT_VIEW_RECTANGLE = initialExtent
  Cesium.Camera.DEFAULT_VIEW_FACTOR = 3

  const viewer = new Cesium.Viewer(target, {
    //requestRenderMode: true,
    //maximumRenderTimeChange: Infinity,
    timeline: false,
    animation: false,
    baseLayerPicker: false,
    sceneModePicker: false,
    terrain: Cesium.Terrain.fromWorldTerrain(),
  })
  viewer.scene.globe.depthTestAgainstTerrain = true

  // viewer.scene.globe.show = false

  mapContext.viewer = viewer
  // setUpClick(viewer)
}

export function flyToPOI() {
  const { viewer } = mapContext
  viewer.camera.flyTo({
    // destination: new Cesium.Cartesian3(4492645.372537663, 3505122.042949524, 2855933.2007607063)
    destination: alFaridTombLocation,
    // endTransform: Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(0.5, 0.5, 0))
  })
}
