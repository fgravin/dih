import type { SiteApiResponse } from '@/api/sites.api'
import type { SiteModel } from '@/domain/sites/sites.model'

export function siteApiToModel(siteApi: SiteApiResponse): SiteModel {
  const { id, ionId, title, location, shortTitle } = siteApi
  return {
    id,
    title,
    shortTitle,
    ionId,
    coordinates: [location.long, location.lat],
  }
}
