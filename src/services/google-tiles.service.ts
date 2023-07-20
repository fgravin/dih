import * as Cesium from 'cesium'

export async function addGoogle3DTiles(viewer: Cesium.Viewer) {
  try {
    const tileset = await Cesium.createGooglePhotorealistic3DTileset()
    viewer.scene.primitives.add(tileset)
  } catch (error) {
    console.log(`Error loading Photorealistic 3D Tiles tileset.
  ${error}`)
  }
}
