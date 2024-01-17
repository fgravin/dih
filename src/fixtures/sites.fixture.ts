import biblosThumbnail from '../../public/images/biblos.webp'
import memphisThumbnail from '../../public/images/memphis.webp'
import cyrineThumbnail from '../../public/images/cyrine.webp'
import leptisThumbnail from '../../public/images/leptis.webp'
import qalatThumbnail from '../../public/images/qalat.webp'
import bahlaThumbnail from '../../public/images/bahla.webp'
import hegraThumbnail from '../../public/images/hegra.webp'
import baalbekThumbnail from '../../public/images/baalbek.webp'
import jeddahThumbnail from '../../public/images/jeddah.webp'
import meroeThumbnail from '../../public/images/meroe.webp'

import type { SiteApiResponse } from '@/api/dih/dih.api.client'

export const SITE_FIXTURES = (): SiteApiResponse[] => [
  {
    id: 1,
    tilesets: [
      {
        name: 'Jabal',
        ionId: 2064034,
      },
      {
        name: 'Son of Kuza',
        ionId: 2063968,
      },
      {
        name: 'Khuraymat',
        ionId: 2063719,
      },
      {
        name: 'Diwan',
        ionId: 2063963,
      },
    ],
    title: 'Hegra Archaeological Site (al-Hijr / Madā in Ṣāliḥ)',
    shortTitle: 'Al-Hijr',
    slug: 'hegra-archaeological-site',
    src: `${hegraThumbnail}`,
    location: {
      lat: 26.791667,
      long: 37.952778,
    },
    country: 'Saudi Arabia',
    category: 'CULTURAL',
    overlay: 0,
    description:
      'Is the first World Heritage property to be inscribed in Saudi Arabia. Formerly known as Hegra it is the largest conserved site of the civilization of the Nabataeans south of Petra in Jordan.',
  },
  {
    id: 2,
    title: 'Bahla Fort',
    tilesets: [
      {
        name: 'Bahla Fort',
        path: './bahla/OM_Bahla_fort_30m-nadir_tiled_200K_4K_1024/tileset.json',
      },
    ],
    shortTitle: 'Bahla Fort',
    slug: 'bahla-fort',
    imageOnly: true,
    src: `${bahlaThumbnail}`,
    location: {
      lat: 22.9644,
      long: 57.3002,
    },
    country: 'Oman',
    category: 'CULTURAL',
    overlay: 0,
    description:
      'The oasis of Bahla owes its prosperity to the Banu Nebhan, the dominant tribe in the area from the 12th to the end of the 15th century. The ruins of the immense fort, with its walls and towers of unbaked brick and its stone foundations, is a remarkable example of this type of fortification and attests to the power of the Banu Nebhan.',
  },
  {
    id: 3,
    title: 'Memphis and its Necropolis',
    shortTitle: 'Memphis',
    slug: '',
    src: `${memphisThumbnail}`,
    location: {
      lat: 29.9777716269,
      long: 31.1326414113,
    },
    tilesets: [
      {
        name: 'Keops',
        ionId: 2380995,
      },
      {
        name: 'Sphynx',
        ionId: 2381018,
      },
      {
        name: 'Mykerinos',
        ionId: 2381015,
      },
      {
        name: 'Khephren',
        ionId: 2381009,
      },
    ],
    country: 'Egypt',
    category: 'CULTURAL',
    overlay: 0,
    description:
      'The capital of the Old Kingdom of Egypt has some extraordinary funerary monuments, including rock tombs, ornate mastabas, temples, and pyramids.',
  },
  {
    id: 4,
    title: 'Méroé',
    shortTitle: 'Méroé',
    slug: '',
    src: `${meroeThumbnail}`,
    location: {
      lat: 16.9375,
      long: 33.751389,
    },
    tilesets: [
      {
        name: 'Méroé Pyramids',
        ionId: 2415787,
      },
    ],
    country: 'Sudan',
    category: 'CULTURAL',
    overlay: 0,
    description:
      'Méroé description',
  },
  {
    id: 5,
    title: 'Leptis Magna',
    shortTitle: 'Leptis Magna',
    slug: '',
    src: `${leptisThumbnail}`,
    location: {
      lat: 32.635,
      long: 14.298611,
    },
    tilesets: [
      {
        name: 'Theatre',
        ionId: 2416793,
      },
      {
        name: 'Triumphal Arch',
        ionId: 2418050	,
      },
    ],
    country: 'Libya',
    category: 'CULTURAL',
    overlay: 0,
    description:
      'The city of the god Amon, was the capital of Egypt during the period of the Middle and New Kingdoms.',
  },
  {
    id: 6,
    title: 'Baalbek',
    shortTitle: 'Baalbek',
    slug: '',
    tilesets: [
      {
        name: 'Baalbek',
        ionId: 2382009,
      },
    ],
    src: `${baalbekThumbnail}`,
    location: {
      lat: 34.006336,
      long: 36.207322,
    },
    country: 'Lebanon',
    category: 'CULTURAL',
    overlay: 0,
    description:
      'This Phoenician city, where a triad of deities was worshipped, was known as Heliopolis during the Hellenistic period.',
  },
  {
    id: 7,
    title: 'Historic Jeddah, the Gate to Makkah',
    shortTitle: 'Jeddah',
    slug: '',
    src: `${jeddahThumbnail}`,
    location: {
      lat: 21.483333,
      long: 39.183333,
    },
    country: 'Saudi Arabia',
    category: 'CULTURAL',
    overlay: 0,
    description:
      'From the 7th century AD it was established as a major port for Indian Ocean trade routes, channeling goods to Mecca.',
  },
  {
    id: 8,
    title: 'Biblos',
    shortTitle: 'Biblos',
    slug: '',
    src: `${biblosThumbnail}`,
    location: {
      lat: 34.12194444,
      long: 35.65000000,
    },
    country: 'Liban',
    category: 'CULTURAL',
    overlay: 0,
    description:
      '',
  },
  {
    id: 9,
    title: 'Qal\'at al-Bahrain',
    shortTitle: 'Qal\'at al-Bahrain',
    slug: '',
    src: `${qalatThumbnail}`,
    location: {
      lat: 26.233611,
      long: 50.520556,
    },
    country: 'Liban',
    category: 'CULTURAL',
    overlay: 0,
    description:
      "Qal'at al-Bahrain – Ancient Harbour and Capital of Dilmun",
  },
  {
    id: 10,
    title: 'Cyrine',
    shortTitle: 'Cyrine',
    slug: '',
    src: `${cyrineThumbnail}`,
    location: {
      lat: 32.825,
      long: 21.858056,
    },
    country: 'Bahrain',
    category: 'CULTURAL',
    overlay: 0,
    description:
      "Qal'at al-Bahrain – Ancient Harbour and Capital of Dilmun",
  },
]
