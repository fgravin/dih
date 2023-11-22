import * as Cesium from 'cesium'
import type { SiteModel } from '@/domain/sites/sites.model'

export function zoomToTileset(tileset: Cesium.Cesium3DTileset, viewer: Cesium.Viewer) {
  const boundingSphere = tileset.boundingSphere
  viewer.camera.viewBoundingSphere(boundingSphere, new Cesium.HeadingPitchRange(0, -20.0, 0))
  viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
}

export function flyTo(viewer: Cesium.Viewer, site: SiteModel) {
  viewer.camera.flyTo({
    destination: new Cesium.Cartesian3(4492672.407591664, 3505057.3238478107, 2855923.0575638223),
    orientation: {
      direction: new Cesium.Cartesian3(-0.6227456946353674, 0.06452084256171192, -0.779759489001),
      up: new Cesium.Cartesian3(0.35671401632328603, 0.9104076908609137, -0.20955416240153635),
    },
  })
}

export function setView(viewer: Cesium.Viewer) {
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

let rotateFn
let previousTime = Date.now()

export function spinGlobe(viewer, dynamicRate = 0.01) {
  previousTime = Date.now()
  rotateFn = (scene, time) => {
    const spinRate = dynamicRate
    const currentTime = Date.now()
    const delta = (currentTime - previousTime) / 1000
    previousTime = currentTime
    viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, -spinRate * delta)
  }
  startSpin(viewer)
  viewer.canvas.addEventListener('click', () => stopSpin(viewer))
  viewer.canvas.addEventListener('wheel', () => stopSpin(viewer))
}

export function startSpin(viewer: Cesium.Viewer) {
  previousTime = Date.now()
  viewer.clock.onTick.removeEventListener(rotateFn)
  viewer.clock.onTick.addEventListener(rotateFn)
}

export function stopSpin(viewer: Cesium.Viewer) {
  previousTime = Date.now()
  viewer.clock.onTick.removeEventListener(rotateFn)
}

export function flyHome(viewer: Cesium.Viewer) {
  stopSpin(viewer)
  viewer.scene.camera.flyHome(5)
  setTimeout(() => startSpin(viewer), 5000)
}

export function flyToEntity(viewer: Cesium.Viewer, entity: Cesium.Entity) {
  stopSpin(viewer)
  const destination = entity.position.getValue(viewer.clock.currentTime)
  viewer.camera.flyTo({
    destination,
  })
}
