import * as Cesium from 'cesium'
import { HeightReference, ShadowMode } from 'cesium'

// window['CESIUM_BASE_URL'] = '../node_modules/'

const alFaridTombLocation = Cesium.Cartesian3.fromDegrees(37.9612225362985, 26.77412011548026, 20)

export interface MapContext {
  viewer: Cesium.Viewer
}
export const mapContext: MapContext = { viewer: null }

export async function init3D(target: string) {
  // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
  const viewer = new Cesium.Viewer(target, {
    requestRenderMode: true,
    maximumRenderTimeChange: Infinity,
    timeline: false,
    animation: false,
    baseLayerPicker: false,
    sceneModePicker: false,
    imageryProvider: Cesium.createWorldImagery(),
  })

  /*
  let worldTerrain
  try {
    worldTerrain = await Cesium.createWorldTerrainAsync()
    viewer.scene.terrainProvider = worldTerrain
  } catch (error) {
    window.alert(`There was an error creating world terrain. ${error}`)
  }
*/

  /*
  viewer.scene.terrainProvider = await Cesium.ArcGISTiledElevationTerrainProvider.fromUrl(
    'https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer'
  )
*/
  const west = -3.1415926
  const south = -1.57079
  const east = 3.1415926
  const north = 1.57079

  const tileset = await Cesium.Cesium3DTileset.fromUrl('/3dtiles2/tileset.json')
  viewer.scene.primitives.add(tileset)

  // viewer.scene.camera.flyTo({ destination: alFaridTombLocation, duration: 0 })
  viewer.scene.camera.setView({
    destination: new Cesium.Rectangle(west, south, east, north),
  })
  // viewer.scene.globe.depthTestAgainstTerrain = true
  // viewer.scene.globe.maximumScreenSpaceError = 100
  mapContext.viewer = viewer
  // add3DModel()
  //const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings())
}

export function add3DModel() {
  const { viewer } = mapContext

  /*
  viewer.entities.add({
    position: tombLocation,
    point: {
      color: Cesium.Color.GREEN,
      pixelSize: 50,
      outlineColor: Cesium.Color.BLACK
    },
  })
*/

  /*
  viewer.selectedEntityChanged.addEventListener(function (selectedEntity) {
    if (Cesium.defined(selectedEntity)) {
      if (Cesium.defined(selectedEntity.name)) {
        console.log('Selected ' + selectedEntity.name)
      } else {
        console.log('Unknown entity selected.')
      }
    } else {
      console.log('Deselected.')
    }
  })
*/

  const model = viewer.scene.primitives.add(
    Cesium.Model.fromGltf({
      modelMatrix: Cesium.Transforms.eastNorthUpToFixedFrame(alFaridTombLocation),
      // url: './hegra_tomb.glb',
      url: './hegra_site.glb',
      show: true,
      scene: viewer.scene,
      allowPicking: true,
      silhouetteSize: 0,
      heightReference: HeightReference.CLAMP_TO_GROUND,
      shadows: ShadowMode.DISABLED,
      scale: 1,
      minimumPixelSize: 300,
    })
  )
  return model
}

export function moveToModel(model: Cesium.Model) {
  model.readyPromise.then(() => {
    const { viewer } = mapContext
    const camera = viewer.scene.camera
    camera.flyToBoundingSphere(model.boundingSphere)
  })
}
