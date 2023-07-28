import * as Cesium from 'cesium'
import { mapContext } from '@/map.service'

export function initView() {
  /*
viewer.scene.camera.setView({
  destination: initialExtent
})
viewer.scene.camera.DEFAULT_VIEW_RECTANGLE = initialExtent
*/
}

export function zoomToTileset(tileset: Cesium.Cesium3DTileset, viewer: Cesium.Viewer) {
  const boundingSphere = tileset.boundingSphere
  viewer.camera.viewBoundingSphere(boundingSphere, new Cesium.HeadingPitchRange(0, -20.0, 0))
  viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
}

export function flyTo() {
  const { viewer } = mapContext
  viewer.camera.flyTo({
    destination: new Cesium.Cartesian3(4492672.407591664, 3505057.3238478107, 2855923.0575638223),
    orientation: {
      direction: new Cesium.Cartesian3(-0.6227456946353674, 0.06452084256171192, -0.779759489001),
      up: new Cesium.Cartesian3(0.35671401632328603, 0.9104076908609137, -0.20955416240153635),
    },
  })
}
export function setView() {
  const { viewer } = mapContext
  viewer.camera.position = new Cesium.Cartesian3(
    4492670.576692276,
    3505057.689095253,
    2855921.4162088064
  )
  viewer.scene.camera.setView({
    orientation: {
      direction: new Cesium.Cartesian3(
        -0.2332803901131615,
        0.1413393580263924,
        -0.9620828682921958
      ),
      up: new Cesium.Cartesian3(0.6820660555005784, 0.7289636350559597, -0.05829163490487714),
    },
  })
}
