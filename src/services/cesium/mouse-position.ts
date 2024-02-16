import * as Cesium from 'cesium'

interface HoverObject {
  primitive: Cesium.Billboard
  collection: Cesium.BillboardCollection
  id: Cesium.Entity
}
export const init = (viewer: Cesium.Viewer) => {
  let currentMousePosition = null
  const hoveredEntities: Cesium.Entity[] = []
  let myMouseHandler = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
  myMouseHandler.setInputAction((movement) => {
    currentMousePosition = movement.endPosition
  }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)

  viewer.scene.preRender.addEventListener((info) => {
    if (currentMousePosition) {
      const hoverObject = viewer.scene.pick(currentMousePosition) as HoverObject
      if (hoverObject && hoverObject.primitive instanceof Cesium.Billboard) {
        document.body.style.cursor = 'pointer'
        hoverObject.primitive.scale = 1.2
        hoverObject.id.label.translucencyByDistance = new Cesium.NearFarScalar(
          6.0e7,
          1.0,
          7.0e7,
          0.0
        ) as any
        hoverObject.id.label.show = true as any
        if (!hoveredEntities.includes(hoverObject.id)) {
          hoveredEntities.push(hoverObject.id)
        }
      } else {
        hoveredEntities.forEach(
          (entity) =>
            (entity.label.translucencyByDistance = new Cesium.NearFarScalar(5.0e6, 1.0, 1.0e7, 0.0) as any)
        )
        document.body.style.cursor = 'default'
      }
    }
  })
}
