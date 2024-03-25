import type { Feature, Point } from 'geojson'
import Cesium from 'cesium'

export interface TilesetProp {
  name: string
  ionId?: number
  path?: string
  tileset?: Cesium.Cesium3DTileset
}
export interface SiteModel {
  id: number
  tilesets: TilesetProp[]
  title: string
  shortTitle: string
  coordinates: [number, number]
  description: string
  src: string
  slug: string
}

export type SiteFeature = Feature<Point, SiteModel>
