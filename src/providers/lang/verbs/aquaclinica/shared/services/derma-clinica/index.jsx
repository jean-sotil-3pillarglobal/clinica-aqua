import IMG_SERVICE_1 from '../../../../../../../static/images/derma-clinica/dc-1.jpg';
import IMG_SERVICE_2 from '../../../../../../../static/images/derma-clinica/dc-2.jpg';
import IMG_SERVICE_3 from '../../../../../../../static/images/derma-clinica/dc-3.jpg';
import IMG_SERVICE_4 from '../../../../../../../static/images/derma-clinica/dc-4.jpg';
import IMG_SERVICE_5 from '../../../../../../../static/images/derma-clinica/dc-5.jpg';
import IMG_SERVICE_6 from '../../../../../../../static/images/derma-clinica/dc-6.jpg';
import IMG_SERVICE_7 from '../../../../../../../static/images/derma-clinica/dc-7.jpg';
import IMG_SERVICE_8 from '../../../../../../../static/images/derma-clinica/dc-8.jpg';

import {
  constants,
} from './../../../../../../config';

import CONTENT_SERVICE_1 from './escleroterapia';
import CONTENT_SERVICE_2 from './alergias';
import CONTENT_SERVICE_3 from './tratamiento-para-hongos';

// constants
const {
  // categories
  CATEGORY_1,

  // services
  SERVICE_1,
  SERVICE_2,
  SERVICE_3,
  SERVICE_4,
  SERVICE_5,
  SERVICE_6,
  SERVICE_7,
  SERVICE_8,
} = constants;

const Services = [
  {
    background: IMG_SERVICE_1,
    categories: [
      CATEGORY_1,
    ],
    content: CONTENT_SERVICE_1,
    cta: {
      en: 'conocer más',
      es: 'conocer más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_1}-${SERVICE_1}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_1}/escleroterapia.jpg`,
      mobile: `/src/static/images/${CATEGORY_1}/escleroterapia.jpg`,
    },
    label: {
      en: 'escleroterapia',
      es: 'escleroterapia',
    },
    title: {
      en: 'escleroterapia',
      es: 'escleroterapia',
    },
    url: {
      en: 'escleroterapia',
      es: 'escleroterapia',
    },
    value: `${CATEGORY_1}-${SERVICE_1}`,
  },
  {
    background: IMG_SERVICE_2,
    categories: [
      CATEGORY_1,
    ],
    content: CONTENT_SERVICE_2,
    cta: {
      en: 'conocer más',
      es: 'conocer más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_1}-${SERVICE_2}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_1}/1.jpg`,
      mobile: `/src/static/images/${CATEGORY_1}/1.jpg`,
    },
    label: {
      en: 'alergías',
      es: 'alergías',
    },
    title: {
      en: 'alergías',
      es: 'alergías',
    },
    url: {
      en: 'alergias',
      es: 'alergias',
    },
    value: `${CATEGORY_1}-${SERVICE_2}`,
  },
  {
    background: IMG_SERVICE_3,
    categories: [
      CATEGORY_1,
    ],
    content: CONTENT_SERVICE_2,
    cta: {
      en: 'conocer más',
      es: 'conocer más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_1}-${SERVICE_3}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_1}/1.jpg`,
      mobile: `/src/static/images/${CATEGORY_1}/1.jpg`,
    },
    label: {
      en: 'diagnóstico y tratramiento para cáncer de piel',
      es: 'diagnóstico y tratramiento para cáncer de piel',
    },
    title: {
      en: 'diagnóstico y tratramiento para cáncer de piel',
      es: 'diagnóstico y tratramiento para cáncer de piel',
    },
    url: {
      en: 'diagnóstico-y-tratramiento-para-cáncer-de-piel',
      es: 'diagnóstico-y-tratramiento-para-cáncer-de-piel',
    },
    value: `${CATEGORY_1}-${SERVICE_3}`,
  },
  {
    background: IMG_SERVICE_4,
    categories: [
      CATEGORY_1,
    ],
    content: CONTENT_SERVICE_2,
    cta: {
      en: 'conocer más',
      es: 'conocer más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_1}-${SERVICE_4}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_1}/1.jpg`,
      mobile: `/src/static/images/${CATEGORY_1}/1.jpg`,
    },
    label: {
      en: 'dermatitis y enfermedades de la piel',
      es: 'dermatitis y enfermedades de la piel',
    },
    title: {
      en: 'dermatitis y enfermedades de la piel',
      es: 'dermatitis y enfermedades de la piel',
    },
    url: {
      en: 'dermatitis-y-enfermedades-de-la-piel',
      es: 'dermatitis-y-enfermedades-de-la-piel',
    },
    value: `${CATEGORY_1}-${SERVICE_4}`,
  },
  {
    background: IMG_SERVICE_5,
    categories: [
      CATEGORY_1,
    ],
    content: CONTENT_SERVICE_2,
    cta: {
      en: 'conocer más',
      es: 'conocer más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_1}-${SERVICE_5}`,
    image: {
      desktop: 'https://scontent.fsyq2-1.fna.fbcdn.net/v/t1.0-9/92244100_3217485018261809_3562787367599210496_n.jpg?_nc_cat=109&_nc_sid=2d5d41&_nc_oc=AQl4tSCnNoVzpP4CmptFu6Gr7dglQWhxmedCIFlZ5mGyjwNS-cz_VeT6eoYy-hp-yWA&_nc_ht=scontent.fsyq2-1.fna&oh=7b3d16e369433aa25f1bd0354a81b631&oe=5EB71F8F',
      mobile: 'https://scontent.fsyq2-1.fna.fbcdn.net/v/t1.0-9/92244100_3217485018261809_3562787367599210496_n.jpg?_nc_cat=109&_nc_sid=2d5d41&_nc_oc=AQl4tSCnNoVzpP4CmptFu6Gr7dglQWhxmedCIFlZ5mGyjwNS-cz_VeT6eoYy-hp-yWA&_nc_ht=scontent.fsyq2-1.fna&oh=7b3d16e369433aa25f1bd0354a81b631&oe=5EB71F8F',
    },
    label: {
      en: 'tratamiento para acné',
      es: 'tratamiento para acné',
    },
    title: {
      en: 'tratamiento para acné',
      es: 'tratamiento para acné',
    },
    url: {
      en: 'tratamiento-para-acné',
      es: 'tratamiento-para-acné',
    },
    value: `${CATEGORY_1}-${SERVICE_5}`,
  },
  {
    background: IMG_SERVICE_6,
    categories: [
      CATEGORY_1,
    ],
    content: CONTENT_SERVICE_2,
    cta: {
      en: 'conocer más',
      es: 'conocer más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_1}-${SERVICE_6}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_1}/1.jpg`,
      mobile: `/src/static/images/${CATEGORY_1}/1.jpg`,
    },
    label: {
      en: 'caída de cabello y tratamiento capilar',
      es: 'caída de cabello y tratamiento capilar',
    },
    title: {
      en: 'caída de cabello y tratamiento capilar',
      es: 'caída de cabello y tratamiento capilar',
    },
    url: {
      en: 'caída-de-cabello-y-tratamiento-capilar',
      es: 'caída-de-cabello-y-tratamiento-capilar',
    },
    value: `${CATEGORY_1}-${SERVICE_6}`,
  },
  {
    background: IMG_SERVICE_7,
    categories: [
      CATEGORY_1,
    ],
    content: CONTENT_SERVICE_2,
    cta: {
      en: 'conocer más',
      es: 'conocer más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_1}-${SERVICE_7}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_1}/1.jpg`,
      mobile: `/src/static/images/${CATEGORY_1}/1.jpg`,
    },
    label: {
      en: 'vitiligo',
      es: 'vitiligo',
    },
    title: {
      en: 'vitiligo',
      es: 'vitiligo',
    },
    url: {
      en: 'vitiligo',
      es: 'vitiligo',
    },
    value: `${CATEGORY_1}-${SERVICE_7}`,
  },
  {
    background: IMG_SERVICE_8,
    categories: [
      CATEGORY_1,
    ],
    content: CONTENT_SERVICE_3,
    cta: {
      en: 'conocer más',
      es: 'conocer más',
    },
    ico: 'cloud-download',
    id: `${CATEGORY_1}-${SERVICE_8}`,
    image: {
      desktop: `/src/static/images/${CATEGORY_1}/tratamiento-para-hongos.jpg`,
      mobile: `/src/static/images/${CATEGORY_1}/tratamiento-para-hongos.jpg`,
    },
    label: {
      en: 'tratamiento para hongos en uñas',
      es: 'tratamiento para hongos en uñas',
    },
    title: {
      en: 'tratamiento para hongos en uñas',
      es: 'tratamiento para hongos en uñas',
    },
    url: {
      en: 'tratamiento-para-hongos-en-uñas',
      es: 'tratamiento-para-hongos-en-uñas',
    },
    value: `${CATEGORY_1}-${SERVICE_8}`,
  },
];

export default Services;
