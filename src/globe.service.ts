import * as Cesium from 'cesium'
import { CESIUM_ION_TOKEN, INITIAL_RECTANGLE } from '@/config'
import { init } from '@/services/cesium/mouse-position'

const ARCGIS_TOKEN =
  'AAPK1857fc7206d1457ca36720e8d9cabf91hPw11yHgvwub-hUXUiU5-gIshljH4mrJe_iLUrKnvL7Ys7S1YkIGWKRvHnM-106c'
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
    baseLayer: Cesium.ImageryLayer.fromProviderAsync(
      Cesium.ArcGisMapServerImageryProvider.fromBasemapType(Cesium.ArcGisBaseMapType.SATELLITE, {
        token: ARCGIS_TOKEN,
      })
    ),
    terrain: Cesium.Terrain.fromWorldTerrain(),
  })
  const terrainProvider = await Cesium.ArcGISTiledElevationTerrainProvider.fromUrl(
    'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer',
    {
      token: ARCGIS_TOKEN,
    }
  )
  // viewer.terrainProvider = terrainProvider;

  viewer.scene.globe.depthTestAgainstTerrain = true

  init(viewer)
  return viewer
}
