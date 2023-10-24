import type { SiteApiResponse } from './dih.api.client'
import type { SiteModel } from '@/domain/sites/sites.model'

export function siteApiToModel(siteApi: SiteApiResponse): SiteModel {
  const { id, tilesets, title, location, shortTitle, description } = siteApi
  return {
    id,
    title,
    shortTitle,
    tilesets,
    description,
    coordinates: [location.long, location.lat],
  }
}
