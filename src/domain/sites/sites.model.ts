import type { Feature, Point } from 'geojson'

export interface SiteModel {
  id: number
  ionId: number[]
  title: string
  shortTitle: string
  coordinates: [number, number]
}

export type SiteFeature = Feature<Point, SiteModel>
