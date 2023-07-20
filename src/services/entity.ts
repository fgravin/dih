import * as Cesium from 'cesium'
import type { SiteModel } from '@/domain/sites/sites.model'

export async function addSiteEntity(viewer: Cesium.Viewer, site: SiteModel) {
  const location = Cesium.Cartesian3.fromDegrees(site.coordinates[0], site.coordinates[1], 30)
  const { id, title, ionId, shortTitle } = site

  ionId?.forEach(async (id) => {
    const tileset = await Cesium.Cesium3DTileset.fromIonAssetId(id, {
      maximumScreenSpaceError: 1,
      baseScreenSpaceError: 1,
      dynamicScreenSpaceError: true,
      dynamicScreenSpaceErrorDensity: 1,
    })
    viewer.scene.primitives.add(tileset)
  })

  viewer.entities.add({
    name: title,
    id: id + '',
    position: location,
    point: {
      color: new Cesium.Color(0.1, 0.55, 0.95),
      pixelSize: 20,
      outlineColor: new Cesium.Color(0.1, 0.55, 0.95, 0.5),
      outlineWidth: 8,
      // translucencyByDistance: new Cesium.NearFarScalar(1.5e2, 1.0, 1.5e7, 0.2),
      scaleByDistance: new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5),
    },
    label: {
      text: shortTitle || title,
      font: '18pt monospace',
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      outlineWidth: 2,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      pixelOffset: new Cesium.Cartesian2(0, -30),
    },
  })
  // viewer.scene.primitives.add(tileset)
  // viewer.entities.add(entity)
}
