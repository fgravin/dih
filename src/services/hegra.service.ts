import * as Cesium from 'cesium'

export async function addAlFarid(viewer: Cesium.Viewer) {
  const tileset = await Cesium.Cesium3DTileset.fromUrl(`/alfarid/small/tileset.json`, {
    maximumScreenSpaceError: 4,
  })
  viewer.scene.primitives.add(tileset)
}
