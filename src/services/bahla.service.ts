import * as Cesium from 'cesium'

let tileset: Cesium.Cesium3DTileset

export function setBahlaCamera(camera: Cesium.Camera) {
  camera.position = new Cesium.Cartesian3(3174463.1230651108, 4945178.92189231, 2473049.4300321336)
  camera.up = new Cesium.Cartesian3(0.593638916742355, 0.5483572189127932, 0.5889797933674722)
  camera.direction = new Cesium.Cartesian3(
    0.2129315282960955,
    -0.8128445819333062,
    0.5421658877863472
  )
}
export async function switchBahlaModel(viewer: Cesium.Viewer, model: string) {
  viewer.scene.primitives.remove(tileset)
  tileset = await Cesium.Cesium3DTileset.fromUrl(`/bahla/${model}/tileset.json`, {
    maximumScreenSpaceError: 4,
  })
  viewer.scene.primitives.add(tileset)
}
