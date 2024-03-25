import type { SiteApiResponse } from './dih.api.client'
import type { SiteModel } from '@/domain/sites/sites.model'

export function siteApiToModel(siteApi: SiteApiResponse): SiteModel {
  const { id, tilesets, title, location, shortTitle, description, src, slug } = siteApi
  return {
    id,
    title,
    shortTitle,
    tilesets,
    description,
    src,
    slug,
    coordinates: [location.long, location.lat],
  }
}
