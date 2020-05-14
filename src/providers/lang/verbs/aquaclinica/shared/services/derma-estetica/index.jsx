import IMG_SERVICE_1 from '../../../../../../../static/images/derma-estetica/de-1.jpg';
import IMG_SERVICE_2 from '../../../../../../../static/images/derma-estetica/de-2.jpg';
import IMG_SERVICE_3 from '../../../../../../../static/images/derma-estetica/de-3.jpg';
import IMG_SERVICE_4 from '../../../../../../../static/images/derma-estetica/de-4.jpg';
import IMG_SERVICE_5 from '../../../../../../../static/images/derma-estetica/de-5.jpg';
import IMG_SERVICE_6 from '../../../../../../../static/images/derma-estetica/de-6.jpg';
import IMG_SERVICE_7 from '../../../../../../../static/images/derma-estetica/de-7.jpg';
import IMG_SERVICE_8 from '../../../../../../../static/images/derma-estetica/de-8.jpg';
import IMG_SERVICE_9 from '../../../../../../../static/images/derma-estetica/de-9.jpg';

import {
  constants,
} from './../../../../../../config';

import CONTENT_SERVICE_1 from './rellenos';
import CONTENT_SERVICE_2 from './toxina-botulinica';
import CONTENT_SERVICE_3 from './rejuvenecimiento-laser';
import CONTENT_SERVICE_5 from './toxina-contra-hiperhidrosis';
import CONTENT_SERVICE_6 from './eliminacion-tatuajes';
import CONTENT_SERVICE_7 from './dermapen';
import CONTENT_SERVICE_8 from './radiofrecuencia';
import CONTENT_SERVICE_9 from './plex-air';

// constants
const {
  // categories
  CATEGORY_2,

  // services
  SERVICE_1,
  SERVICE_2,
  SERVICE_3,
  SERVICE_4,
  SERVICE_5,
  SERVICE_6,
  SERVICE_7,
  SERVICE_8,
  SERVICE_9,
} = constants;

const Services = [
  {
    background: IMG_SERVICE_1,
    categories: [
      CATEGORY_2,
    ],
    content: CONTENT_SERVICE_1,
    cta: {
      en: 'conocer más',
      es: 'conocer más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_2}-${SERVICE_1}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_2}/1.jpg`,
      mobile: `/src/static/images/${CATEGORY_2}/1.jpg`,
    },
    label: {
      en: 'rellenos de ácido hialurónico',
      es: 'rellenos de ácido hialurónico',
    },
    title: {
      en: 'rellenos de ácido hialurónico',
      es: 'rellenos de ácido hialurónico',
    },
    url: {
      en: 'rellenos-de-ácido-hialurónico',
      es: 'rellenos-de-ácido-hialurónico',
    },
    value: `${CATEGORY_2}-${SERVICE_1}`,
  },
  {
    background: IMG_SERVICE_2,
    categories: [
      CATEGORY_2,
    ],
    content: CONTENT_SERVICE_2,
    cta: {
      en: 'conocer más',
      es: 'conocer más',
    },
    featured: false,
    featuredText: {
      en: '5% discount',
      es: '5% descuento',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_2}-${SERVICE_2}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_2}/toxina-botulinica.jpg`,
      mobile: `/src/static/images/${CATEGORY_2}/toxina-botulinica.jpg`,
    },
    label: {
      en: 'toxina botulinica',
      es: 'toxina botulinica',
    },
    title: {
      en: 'toxina botulinica',
      es: 'toxina botulinica',
    },
    url: {
      en: 'toxina-botulinica',
      es: 'toxina-botulinica',
    },
    value: `${CATEGORY_2}-${SERVICE_2}`,
  },
  {
    background: IMG_SERVICE_3,
    categories: [
      CATEGORY_2,
    ],
    content: CONTENT_SERVICE_3,
    cta: {
      en: 'conocer más',
      es: 'conocer más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_2}-${SERVICE_3}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_2}/rejuvenecimiento-laser.jpg`,
      mobile: `/src/static/images/${CATEGORY_2}/rejuvenecimiento-laser.jpg`,
    },
    label: {
      en: 'rejuvenecimiento láser',
      es: 'rejuvenecimiento láser',
    },
    title: {
      en: 'rejuvenecimiento láser',
      es: 'rejuvenecimiento láser',
    },
    url: {
      en: 'rejuvenecimiento-laser',
      es: 'rejuvenecimiento-laser',
    },
    value: `${CATEGORY_2}-${SERVICE_3}`,
  },
  {
    background: IMG_SERVICE_4,
    categories: [
      CATEGORY_2,
    ],
    content: CONTENT_SERVICE_3,
    cta: {
      en: 'conocer más',
      es: 'conocer más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_2}-${SERVICE_4}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_2}/1.jpg`,
      mobile: `/src/static/images/${CATEGORY_2}/1.jpg`,
    },
    label: {
      en: 'tratamiento láser para manchas e hiperpigmentación',
      es: 'tratamiento láser para manchas e hiperpigmentación',
    },
    title: {
      en: 'tratamiento láser para manchas e hiperpigmentación',
      es: 'tratamiento láser para manchas e hiperpigmentación',
    },
    url: {
      en: 'tratamiento-laser-para-manchas-e-hiperpigmentacion',
      es: 'tratamiento-laser-para-manchas-e-hiperpigmentacion',
    },
    value: `${CATEGORY_2}-${SERVICE_4}`,
  },
  {
    background: IMG_SERVICE_5,
    categories: [
      CATEGORY_2,
    ],
    content: CONTENT_SERVICE_5,
    cta: {
      en: 'conocer más',
      es: 'conocer más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_2}-${SERVICE_5}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_2}/1.jpg`,
      mobile: `/src/static/images/${CATEGORY_2}/1.jpg`,
    },
    label: {
      en: 'toxina contra hiperhidrosis',
      es: 'toxina contra hiperhidrosis',
    },
    title: {
      en: 'toxina contra hiperhidrosis',
      es: 'toxina contra hiperhidrosis',
    },
    url: {
      en: 'toxina-contra-hiperhidrosis',
      es: 'toxina-contra-hiperhidrosis',
    },
    value: `${CATEGORY_2}-${SERVICE_5}`,
  },
  {
    background: IMG_SERVICE_6,
    categories: [
      CATEGORY_2,
    ],
    content: CONTENT_SERVICE_6,
    cta: {
      en: 'conocer más',
      es: 'conocer más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_2}-${SERVICE_6}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_2}/eliminacion-tatuajes.jpeg`,
      mobile: `/src/static/images/${CATEGORY_2}/eliminacion-tatuajes.jpeg`,
    },
    label: {
      en: 'eliminación de tatuajes',
      es: 'eliminación de tatuajes',
    },
    title: {
      en: 'eliminación de tatuajes',
      es: 'eliminación de tatuajes',
    },
    url: {
      en: 'eliminación-de-tatuajes',
      es: 'eliminación-de-tatuajes',
    },
    value: `${CATEGORY_2}-${SERVICE_6}`,
  },
  {
    background: IMG_SERVICE_7,
    categories: [
      CATEGORY_2,
    ],
    content: CONTENT_SERVICE_7,
    cta: {
      en: 'conocer más',
      es: 'conocer más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_2}-${SERVICE_7}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_2}/1.jpg`,
      mobile: `/src/static/images/${CATEGORY_2}/1.jpg`,
    },
    label: {
      en: 'dermapen',
      es: 'dermapen',
    },
    title: {
      en: 'dermapen',
      es: 'dermapen',
    },
    url: {
      en: 'dermapen',
      es: 'dermapen',
    },
    value: `${CATEGORY_2}-${SERVICE_7}`,
  },
  {
    background: IMG_SERVICE_8,
    categories: [
      CATEGORY_2,
    ],
    content: CONTENT_SERVICE_8,
    cta: {
      en: 'conocer más',
      es: 'conocer más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_2}-${SERVICE_8}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_2}/1.jpg`,
      mobile: `/src/static/images/${CATEGORY_2}/1.jpg`,
    },
    label: {
      en: 'radio frecuencia con agujas',
      es: 'radio frecuencia con agujas',
    },
    title: {
      en: 'radio frecuencia con agujas',
      es: 'radio frecuencia con agujas',
    },
    url: {
      en: 'radio-frecuencia-con-agujas',
      es: 'radio-frecuencia-con-agujas',
    },
    value: `${CATEGORY_2}-${SERVICE_8}`,
  },
  {
    background: IMG_SERVICE_9,
    categories: [
      CATEGORY_2,
    ],
    content: CONTENT_SERVICE_9,
    cta: {
      en: 'conocer más',
      es: 'conocer más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_2}-${SERVICE_9}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_2}/1.jpg`,
      mobile: `/src/static/images/${CATEGORY_2}/1.jpg`,
    },
    label: {
      en: 'plex air, blefaroplatia sin cirugía',
      es: 'plex air, blefaroplatia sin cirugía',
    },
    title: {
      en: 'plex air, blefaroplatia sin cirugía',
      es: 'plex air, blefaroplatia sin cirugía',
    },
    url: {
      en: 'plex-air-blefaroplatia-sin-cirugía',
      es: 'plex-air-blefaroplatia-sin-cirugía',
    },
    value: `${CATEGORY_2}-${SERVICE_9}`,
  },
];

export default Services;
