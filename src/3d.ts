import * as Cesium from 'cesium'
import { setUpClick } from '@/services/interactions'
import { getSiteData } from '@/api/sites.api'
import { setBahlaCamera } from '@/services/bahla.service'
import { alFaridTombLocation } from '@/services/position.const'

export interface MapContext {
  viewer: Cesium.Viewer
}
export const mapContext: MapContext = { viewer: null }

export async function init3D(target: string) {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MmMwNDg2Zi03NWIyLTQwMTAtYWY0Zi03YWVmZGQyZjMzZDQiLCJpZCI6MTQxMTQ4LCJpYXQiOjE2ODQ5MjIyMTV9.J0Jqm9Haf2JHm6AfvFPR340N2XEg5RiD070Yxz9S3tM'

  const viewer = new Cesium.Viewer(target, {
    requestRenderMode: true,
    maximumRenderTimeChange: Infinity,
    timeline: false,
    animation: false,
    baseLayerPicker: false,
    sceneModePicker: false,
    /*
    baseLayer: Cesium.ImageryLayer.fromProviderAsync(
      Cesium.ArcGisMapServerImageryProvider.fromBasemapType(Cesium.ArcGisBaseMapType.SATELLITE),
      {}
    ),
*/
    // terrainProvider: Cesium.createWorldTerrain(),
    terrain: Cesium.Terrain.fromWorldTerrain(),
  })
  // ARGIS Terrain
  /*
  viewer.scene.terrainProvider = await Cesium.ArcGISTiledElevationTerrainProvider.fromUrl(
    'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
  )
*/

  // viewer.scene.globe.show = false
  Cesium.Camera.DEFAULT_VIEW_FACTOR = 4
  setBahlaCamera(viewer.scene.camera)
  mapContext.viewer = viewer
  setUpClick(viewer)

  const i3sData = new Cesium.I3SDataProvider({
    url: 'https://services.arcgis.com/Zoi8xtp32kQcxoKu/arcgis/rest/services/DIH_AlFarid_Scene_WSL1/SceneServer/layers/0?f=json',
  })
  viewer.scene.primitives.add(i3sData)

  const sites = await getSiteData()
  //sites.map(siteApiToModel).forEach((site) => addSiteEntity(viewer, site))
}

export function flyToPOI() {
  const { viewer } = mapContext
  viewer.camera.flyTo({
    // destination: new Cesium.Cartesian3(4492645.372537663, 3505122.042949524, 2855933.2007607063)
    destination: alFaridTombLocation,
    // endTransform: Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(0.5, 0.5, 0))
  })
}
