import { SITE_FIXTURES } from '@/fixtures/sites.fixture'

interface Location {
  lat: number
  long: number
}

export interface SiteApiResponse {
  id: number
  ionId?: number[]
  title: string
  shortTitle?: string
  slug: string
  src: string
  location: Location
  country: string
  category: string
  overlay: number
  description: string
}

export const getSiteData = (): Promise<SiteApiResponse[]> => Promise.resolve(SITE_FIXTURES())
