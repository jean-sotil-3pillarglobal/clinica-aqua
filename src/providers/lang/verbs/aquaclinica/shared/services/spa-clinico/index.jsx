import IMG_SERVICE_1 from '../../../../../../../static/images/spa-clinico/1.jpg';
import IMG_SERVICE_2 from '../../../../../../../static/images/spa-clinico/2.jpg';
import IMG_SERVICE_3 from '../../../../../../../static/images/spa-clinico/3.jpg';
import IMG_SERVICE_4 from '../../../../../../../static/images/spa-clinico/4.jpg';
import IMG_SERVICE_5 from '../../../../../../../static/images/spa-clinico/5.jpg';
import IMG_SERVICE_6 from '../../../../../../../static/images/spa-clinico/6.jpg';
import IMG_SERVICE_7 from '../../../../../../../static/images/spa-clinico/7.jpg';

import {
  constants,
} from './../../../../../../config';

import CONTENT_SERVICE_1 from './emsculpt';
import CONTENT_SERVICE_2 from './venus-legacy';
import CONTENT_SERVICE_3 from './ondas-de-choque';
import CONTENT_SERVICE_4 from './oxygeneo';
import CONTENT_SERVICE_5 from './preso-terapia';
import CONTENT_SERVICE_6 from './meso-terapia';
import CONTENT_SERVICE_7 from './carboxiterapia';

// constants
const {
  // categories
  CATEGORY_3,

  // services
  SERVICE_1,
  SERVICE_2,
  SERVICE_3,
  SERVICE_4,
  SERVICE_5,
  SERVICE_6,
  SERVICE_7,
} = constants;

const Services = [
  {
    background: IMG_SERVICE_1,
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_1,
    cta: {
      en: 'learn more',
      es: 'me interesa',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_1}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_3}/emsculpt.jpg`,
      mobile: `/src/static/images/${CATEGORY_3}/emsculpt.jpg`,
    },
    label: {
      en: 'EMSCULPT',
      es: 'EMSCULPT',
    },
    title: {
      en: 'EMSCULPT',
      es: 'EMSCULPT',
    },
    url: {
      en: 'emsculpt',
      es: 'emsculpt',
    },
    value: `${CATEGORY_3}-${SERVICE_1}`,
  },
  {
    background: IMG_SERVICE_2,
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_2,
    cta: {
      en: 'learn more',
      es: 'me interesa',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_2}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_3}/venus-legacy.jpg`,
      mobile: `/src/static/images/${CATEGORY_3}/venus-legacy.jpg`,
    },
    label: {
      en: 'venus legacy',
      es: 'venus legacy',
    },
    title: {
      en: 'venus legacy',
      es: 'venus legacy',
    },
    url: {
      en: 'venus-legacy',
      es: 'venus-legacy',
    },
    value: `${CATEGORY_3}-${SERVICE_2}`,
  },
  {
    background: IMG_SERVICE_3,
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_3,
    cta: {
      en: 'learn more',
      es: 'me interesa',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_3}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_3}/ondas-de-choque.jpg`,
      mobile: `/src/static/images/${CATEGORY_3}/ondas-de-choque.jpg`,
    },
    label: {
      en: 'ondas de choque',
      es: 'ondas de choque',
    },
    title: {
      en: 'ondas de choque',
      es: 'ondas de choque',
    },
    url: {
      en: 'ondas-de-choque',
      es: 'ondas-de-choque',
    },
    value: `${CATEGORY_3}-${SERVICE_3}`,
  },
  {
    background: IMG_SERVICE_4,
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_4,
    cta: {
      en: 'learn more',
      es: 'me interesa',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_4}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_3}/oxygeneo.jpg`,
      mobile: `/src/static/images/${CATEGORY_3}/oxygeneo.jpg`,
    },
    label: {
      en: 'oxygeneo',
      es: 'oxygeneo',
    },
    title: {
      en: 'oxygeneo',
      es: 'oxygeneo',
    },
    url: {
      en: 'oxygeneo',
      es: 'oxygeneo',
    },
    value: `${CATEGORY_3}-${SERVICE_4}`,
  },
  {
    background: IMG_SERVICE_5,
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_5,
    cta: {
      en: 'learn more',
      es: 'me interesa',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_5}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_3}/preso-terapia.jpg`,
      mobile: `/src/static/images/${CATEGORY_3}/preso-terapia.jpg`,
    },
    label: {
      en: 'preso-terapia',
      es: 'preso-terapia',
    },
    title: {
      en: 'preso-terapia',
      es: 'preso-terapia',
    },
    url: {
      en: 'preso-terapia',
      es: 'preso-terapia',
    },
    value: `${CATEGORY_3}-${SERVICE_5}`,
  },
  {
    background: IMG_SERVICE_6,
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_6,
    cta: {
      en: 'learn more',
      es: 'me interesa',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_6}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_3}/meso-terapia.jpg`,
      mobile: `/src/static/images/${CATEGORY_3}/meso-terapia.jpg`,
    },
    label: {
      en: 'meso-terapia',
      es: 'meso-terapia',
    },
    title: {
      en: 'meso-terapia',
      es: 'meso-terapia',
    },
    url: {
      en: 'meso-terapia',
      es: 'meso-terapia',
    },
    value: `${CATEGORY_3}-${SERVICE_6}`,
  },
  {
    background: IMG_SERVICE_7,
    categories: [
      CATEGORY_3,
    ],
    content: CONTENT_SERVICE_7,
    cta: {
      en: 'learn more',
      es: 'me interesa',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_3}-${SERVICE_7}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_3}/carboxiterapia.jpg`,
      mobile: `/src/static/images/${CATEGORY_3}/carboxiterapia.jpg`,
    },
    label: {
      en: 'carboxiterapia',
      es: 'carboxiterapia',
    },
    title: {
      en: 'carboxiterapia',
      es: 'carboxiterapia',
    },
    url: {
      en: 'carboxiterapia',
      es: 'carboxiterapia',
    },
    value: `${CATEGORY_3}-${SERVICE_7}`,
  },
];

export default Services;
