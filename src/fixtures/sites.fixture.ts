import hegraThumbnail from '../../public/api/hegra/thumbnail.jpg'
import petraThumbnail from '../../public/api/petra/thumbnail.jpg'
import ancientThebesThumbnail from '../../public/api/ancient-thebes/thumbnail.jpg'
import jeddahThumbnail from '../../public/api/jeddah/thumbnail.jpg'
import baalbekThumbnail from '../../public/api/baalbek/thumbnail.jpg'
import memphisThumbnail from '../../public/api/memphis/thumbnail.jpg'
import bahlaThumbnail from '../../public/api/bahla/thumbnail.jpeg'

export const SITE_FIXTURES = () => [
  {
    id: 1,
    ionId: [1955163, 1878122, 1882739, 1878799], // al farid, khuraimat, diwan, old city
    title: 'Hegra Archaeological Site <br/> (al-Hijr / Madā in Ṣāliḥ)',
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
    slug: '',
    src: `${memphisThumbnail}`,
    location: {
      lat: 29.90664,
      long: 31.134102,
    },
    country: 'Egypt',
    category: 'CULTURAL',
    overlay: 0,
    description:
      'The capital of the Old Kingdom of Egypt has some extraordinary funerary monuments, including rock tombs, ornate mastabas, temples, and pyramids.',
  },
  {
    id: 4,
    title: 'Petra',
    slug: '',
    src: `${petraThumbnail}`,
    location: {
      lat: 30.328611,
      long: 35.441944,
    },
    country: 'Jordan',
    category: 'CULTURAL',
    overlay: 0,
    description:
      'This Nabataean caravan city, situated between the Red Sea and the Dead Sea, was an important crossroads between Arabia, Egypt, and Syria-Phoenicia.',
  },
  {
    id: 5,
    title: 'Ancient Thebes',
    slug: '',
    src: `${ancientThebesThumbnail}`,
    location: {
      lat: 25.733333,
      long: 32.6,
    },
    country: 'Egypt',
    category: 'CULTURAL',
    overlay: 0,
    description:
      'The city of the god Amon, was the capital of Egypt during the period of the Middle and New Kingdoms.',
  },
  {
    id: 6,
    title: 'Baalbek',
    slug: '',
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
]
