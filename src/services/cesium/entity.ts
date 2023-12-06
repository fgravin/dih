import * as Cesium from 'cesium'
import { HeightReference, JulianDate, VerticalOrigin } from 'cesium'
import type { SiteModel } from '@/domain/sites/sites.model'

export async function loadSiteTileset(viewer: Cesium.Viewer, site: SiteModel) {
  const { id, title, tilesets, shortTitle } = site
  tilesets?.forEach(async (tilesetProp) => {
    const { ionId, path } = tilesetProp
    const tilesetOptions = {
      maximumScreenSpaceError: 4,
    }
    const tileset = await (ionId
      ? Cesium.Cesium3DTileset.fromIonAssetId(ionId, tilesetOptions)
      : Cesium.Cesium3DTileset.fromUrl(path, tilesetOptions))

    if (path) {
      // clamp bahla to ground
      const boundingSphere = tileset.boundingSphere
      // viewer.camera.viewBoundingSphere(boundingSphere, new Cesium.HeadingPitchRange(0, -2.0, 0))
      // viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)
      const cartographic = Cesium.Cartographic.fromCartesian(boundingSphere.center)
      const surface = Cesium.Cartesian3.fromRadians(
        cartographic.longitude,
        cartographic.latitude,
        0.0
      )
      const offset = Cesium.Cartesian3.fromRadians(
        cartographic.longitude,
        cartographic.latitude,
        -16
      )
      const translation = Cesium.Cartesian3.subtract(offset, surface, new Cesium.Cartesian3())
      tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation)
    }
    tilesetProp.tileset = tileset
    viewer.scene.primitives.add(tileset)
  })
}
export async function addSiteEntity(viewer: Cesium.Viewer, site: SiteModel) {
  const position = Cesium.Cartesian3.fromDegrees(site.coordinates[0], site.coordinates[1], 900)
  const { id, title, shortTitle } = site

  viewer.entities.add({
    name: title,
    id: id + '',
    position,
    billboard: {
      heightReference: HeightReference.RELATIVE_TO_GROUND,
      // pixelOffset: new Cesium.Cartesian2(0, 0),
      // eyeOffset: new Cesium.Cartesian3(0.0, 0.0, -50.0),
      image: './marker.png',
      scaleByDistance: new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5),
      verticalOrigin: VerticalOrigin.CENTER,
      // disableDepthTestDistance: 20000000,
      show: true,
      height: 75,
      width: 75,
    },
    // point: {
    //   color: new Cesium.Color(0.1, 0.55, 0.95),
    //   pixelSize: 20,
    //   outlineColor: new Cesium.Color(0.1, 0.55, 0.95, 0.5),
    //   outlineWidth: 8,
    //   // translucencyByDistance: new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e7, 0.2),
    //   scaleByDistance: new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5),
    // },
    label: {
      text: shortTitle || title,
      font: '18pt ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      style: Cesium.LabelStyle.FILL,
      outlineWidth: 1,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      pixelOffset: new Cesium.Cartesian2(0, -40),
      translucencyByDistance: new Cesium.NearFarScalar(5.0e6, 1.0, 1.0e7, 0.0)
    },
  })

  // viewer.scene.primitives.add(tileset)
  // viewer.entities.add(entity)
}
