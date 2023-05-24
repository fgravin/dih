import { alFaridTombLocation, alKhuraybatTombLocation, initialExtent } from '@/config'
import * as Cesium from 'cesium'

export interface MapContext {
  viewer: Cesium.Viewer
}
export const mapContext: MapContext = { viewer: null }

export async function init3D(target: string) {
  const viewer = new Cesium.Viewer(target, {
    requestRenderMode: true,
    maximumRenderTimeChange: Infinity,
    timeline: false,
    animation: false,
    baseLayerPicker: false,
    sceneModePicker: false,
    baseLayer: Cesium.ImageryLayer.fromProviderAsync(
      Cesium.ArcGisMapServerImageryProvider.fromBasemapType(Cesium.ArcGisBaseMapType.SATELLITE),
      {}
    )
    // terrainProvider: Cesium.createWorldTerrain()
  })
  // viewer.scene.globe.show = false

  viewer.scene.camera.setView({
    destination: initialExtent
  })
  Cesium.Camera.DEFAULT_VIEW_RECTANGLE = initialExtent
  Cesium.Camera.DEFAULT_VIEW_FACTOR = 0

  mapContext.viewer = viewer
  /*
  try {
    const tileset = await Cesium.createGooglePhotorealistic3DTileset()
    viewer.scene.primitives.add(tileset)
  } catch (error) {
    console.log(`Error loading Photorealistic 3D Tiles tileset.
  ${error}`)
  }
*/

  const tileset = await Cesium.Cesium3DTileset.fromUrl('/3dtiles/tileset.json', {
    maximumScreenSpaceError: 2
  })
  viewer.scene.primitives.add(tileset)

  viewer.entities.add({
    name: 'Al Farid',
    position: alFaridTombLocation,
    point: {
      color: new Cesium.Color(0.1, 0.55, 0.95),
      pixelSize: 20,
      outlineColor: new Cesium.Color(0.1, 0.55, 0.95, 0.5),
      outlineWidth: 8,
      // translucencyByDistance: new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e7, 0.2),
      scaleByDistance: new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5)
    },
    label: {
      text: 'Al Farid',
      font: '18pt monospace',
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      pixelOffset: new Cesium.Cartesian2(0, -30)
    }
  })

  /*
  viewer.entities.add({
    name: 'Al Khuraybat',
    position: alKhuraybatTombLocation,
    point: {
      color: new Cesium.Color(0.1, 0.55, 0.95),
      pixelSize: 20,
      outlineColor: new Cesium.Color(0.1, 0.55, 0.95, 0.5),
      outlineWidth: 8,
      // translucencyByDistance: new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e7, 0.2),
      scaleByDistance: new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5)
    },
    label: {
      text: 'Al Khuraybat',
      font: '18pt monospace',
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      pixelOffset: new Cesium.Cartesian2(0, -30)
    }
  })
*/

  viewer.selectedEntityChanged.addEventListener((entity) => {
    flyToPOI()
  })
  viewer.selectedEntity = undefined
}

export function flyToPOI() {
  const { viewer } = mapContext
  viewer.camera.flyTo({
    destination: new Cesium.Cartesian3(4492645.372537663, 3505122.042949524, 2855933.2007607063)
    // endTransform: Cesium.Matrix4.fromTranslation(new Cesium.Cartesian3(0.5, 0.5, 0))
  })
}
