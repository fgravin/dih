import * as Cesium from 'cesium'

export async function addAlFarid(viewer: Cesium.Viewer) {
  /*
  const tileset = await Cesium.Cesium3DTileset.fromUrl(`./hegra/landscape/tileset.json`, {
    maximumScreenSpaceError: 2,
  })
  viewer.scene.primitives.add(tileset)
*/
  /*
  tileset.readyPromise.then(function () {
    viewer.zoomTo(tileset)
  })
*/

  const ionTileset = await Cesium.Cesium3DTileset.fromIonAssetId(2063719, {
    maximumScreenSpaceError: 3,
  })
  viewer.scene.primitives.add(ionTileset)
  ionTileset.readyPromise.then(function () {
    viewer.zoomTo(ionTileset)
  })
}
