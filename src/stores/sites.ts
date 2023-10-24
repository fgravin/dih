import { Ref, ref, shallowRef } from 'vue'
import { defineStore } from 'pinia'
import { SiteModel } from '@/domain/sites/sites.model'
import { siteApiToModel } from '@/api/dih/dih.api.mappers'
import { getSiteData } from '@/api/dih/dih.api.client'

export const useSitesStore = defineStore('sites', () => {
  const sites = shallowRef<SiteModel[]>([])

  async function fetchSites() {
    const apiSites = await getSiteData()
    sites.value = apiSites.map(siteApiToModel)
  }

  function getTilesetProps() {
    return sites.value.map((site) => site.tilesets).flat()
  }
  function getByTitle(title: string) {
    return title && sites.value.find((site) => site.title === title)
  }
  return { sites, getTilesetProps, fetchSites, getByTitle }
})
