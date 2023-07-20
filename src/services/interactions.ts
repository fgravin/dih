import * as Cesium from 'cesium'
import { ScreenSpaceEventHandler } from 'cesium'

export function setUpClick(viewer: Cesium.Viewer) {
  const selectedEntity = new Cesium.Entity()
  viewer.screenSpaceEventHandler.setInputAction(function onLeftClick(
    positionEvent: ScreenSpaceEventHandler.PositionedEvent
  ) {
    // Pick a new feature
    const pickedFeature = viewer.scene.pick(positionEvent.position)
    if (!Cesium.defined(pickedFeature)) {
      return
    }
    const pickedPosition = viewer.scene.pickPosition(positionEvent.position)

    console.log(pickedFeature)
    selectedEntity.name = 'toto'
    selectedEntity.description = '<div>blabla</div>' as any
    viewer.selectedEntity = selectedEntity
  },
  Cesium.ScreenSpaceEventType.LEFT_CLICK)
}
