import IMG_SERVICE_1 from '../../../../../../static/images/derma-clinica/derma-clinica.jpg';
import IMG_SERVICE_1_1 from '../../../../../../static/images/derma-clinica/derma-clinica-1.jpg';
import IMG_SERVICE_1_2 from '../../../../../../static/images/derma-clinica/derma-clinica-2.jpg';
import IMG_SERVICE_2 from '../../../../../../static/images/derma-estetica/derma-estetica.jpg';
import IMG_SERVICE_2_1 from '../../../../../../static/images/derma-estetica/derma-estetica-1.jpg';
import IMG_SERVICE_2_2 from '../../../../../../static/images/derma-estetica/derma-estetica-2.jpg';
import IMG_SERVICE_3 from '../../../../../../static/images/spa-clinico/spa.jpg';
import IMG_SERVICE_3_1 from '../../../../../../static/images/spa-clinico/spa-1.jpg';
import IMG_SERVICE_3_2 from '../../../../../../static/images/spa-clinico/spa-2.jpg';
import IMG_SERVICE_4 from '../../../../../../static/images/nutri/nutri.jpg';
import IMG_SERVICE_4_1 from '../../../../../../static/images/nutri/nutri-1.jpg';
import IMG_SERVICE_4_2 from '../../../../../../static/images/nutri/nutri-2.jpg';
import IMG_SERVICE_5 from '../../../../../../static/images/terapia-fisica/terapia-fisica.jpg';
import IMG_SERVICE_5_1 from '../../../../../../static/images/terapia-fisica/terapia-fisica-1.jpg';
import IMG_SERVICE_5_2 from '../../../../../../static/images/terapia-fisica/terapia-fisica-2.jpg';

import {
  constants,
} from './../../../../../config';

import {
  CreateUrlOnePath,
} from './../../../../../utils/url.formatter';

// constants
const {
  CATEGORY_1,
  CATEGORY_2,
  CATEGORY_3,
  CATEGORY_4,
  CATEGORY_5,

  PATHS: {
    SERVICES,
  },
} = constants;

const url = CreateUrlOnePath(SERVICES);

const Services = [
  {
    background: IMG_SERVICE_1,
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#878a8c',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    description: {
      en: 'Un cuidado de la piel especializado siempre será mejor que cualquier remedio casero improvisado que puede traer efectos adversos. Así que si desea revitalizar la piel y darle un nuevo aire más saludable, la dermatología clinica es lo que necesitas.',
      es: 'Un cuidado de la piel especializado siempre será mejor que cualquier remedio casero improvisado que puede traer efectos adversos. Así que si desea revitalizar la piel y darle un nuevo aire más saludable, la dermatología clinica es lo que necesitas.',
    },
    ico: 'keyboard_arrow_right',
    id: CATEGORY_1,
    image: {
      desktop: `/src/static/images/${CATEGORY_1}/derma-clinica.jpg`,
      mobile: `/src/static/images/${CATEGORY_1}/derma-clinica.jpg`,
    },
    images: [
      {
        desktop: IMG_SERVICE_1_1,
        mobile: IMG_SERVICE_1_1,
      },
      {
        desktop: IMG_SERVICE_1_2,
        mobile: IMG_SERVICE_1_2,
      },
    ],
    svg: '/src/static/svg/team_work.svg',
    title: {
      en: 'dermatologia-clinica',
      es: 'dermatología clinica',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: url('dermatologia-clinica', 'en'),
      es: url('dermatologia-clinica', 'es'),
    },
  },
  {
    background: IMG_SERVICE_2,
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#878a8c',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    description: {
      en: 'La dermatología estética se define como un área de la medicina que tiene como objetivo mejorar el aspecto de la piel de una persona que no padece ninguna patología, pero que desea corregir o retrasar el envejecimiento cutáneo, o paliar cualquier otro defecto físico.',
      es: 'La dermatología estética se define como un área de la medicina que tiene como objetivo mejorar el aspecto de la piel de una persona que no padece ninguna patología, pero que desea corregir o retrasar el envejecimiento cutáneo, o paliar cualquier otro defecto físico.',
    },
    ico: 'keyboard_arrow_right',
    id: CATEGORY_2,
    image: {
      desktop: IMG_SERVICE_2_2,
      mobile: IMG_SERVICE_2_2,
    },
    images: [
      {
        desktop: IMG_SERVICE_2_1,
        mobile: IMG_SERVICE_2_1,
      },
      {
        desktop: IMG_SERVICE_2_2,
        mobile: IMG_SERVICE_2_2,
      },
    ],
    svg: '/src/static/svg/team_work.svg',
    title: {
      en: 'estetic dermatology',
      es: 'dermatología estética',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: url('dermatologia-estetica', 'en'),
      es: url('dermatologia-estetica', 'es'),
    },
  },
  {
    background: IMG_SERVICE_3,
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#878a8c',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'keyboard_arrow_right',
    id: CATEGORY_3,
    image: {
      desktop: `/src/static/images/${CATEGORY_3}/spa-clinico.jpg`,
      mobile: `/src/static/images/${CATEGORY_3}/spa-clinico.jpg`,
    },
    images: [
      {
        desktop: IMG_SERVICE_3_1,
        mobile: IMG_SERVICE_3_1,
      },
      {
        desktop: IMG_SERVICE_3_2,
        mobile: IMG_SERVICE_3_2,
      },
    ],
    title: {
      en: 'estética y spa clínico',
      es: 'estética y spa clínico',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: url('estetica-y-spa-clinico', 'en'),
      es: url('estetica-y-spa-clinico', 'es'),
    },
  },
  {
    background: IMG_SERVICE_4,
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#878a8c',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    ico: 'keyboard_arrow_right',
    id: CATEGORY_4,
    image: {
      desktop: `/src/static/images/${CATEGORY_4}/3.jpg`,
      mobile: `/src/static/images/${CATEGORY_4}/3.jpg`,
    },
    images: [
      {
        desktop: IMG_SERVICE_4_1,
        mobile: IMG_SERVICE_4_1,
      },
      {
        desktop: IMG_SERVICE_4_2,
        mobile: IMG_SERVICE_4_2,
      },
    ],
    title: {
      en: 'nutrición',
      es: 'nutrición',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: url('nutricion', 'en'),
      es: url('nutricion', 'es'),
    },
  },
  {
    background: IMG_SERVICE_5,
    body: {
      en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    color: '#878a8c',
    cta: {
      en: 'learn more',
      es: 'conoce más',
    },
    description: {
      en: 'La terapia física tiene gran cantidad de beneficios para aquellos que se encuentran en proceso de recuperación de una lesión o enfermedad. Sirve también para los que necesitan asistencia adicional con respecto a la movilidad de los miembros afectados e incluso en caso de padecer alguna discapacidad.',
      es: 'La terapia física tiene gran cantidad de beneficios para aquellos que se encuentran en proceso de recuperación de una lesión o enfermedad. Sirve también para los que necesitan asistencia adicional con respecto a la movilidad de los miembros afectados e incluso en caso de padecer alguna discapacidad.',
    },
    ico: 'keyboard_arrow_right',
    id: CATEGORY_5,
    image: {
      desktop: `/src/static/images/${CATEGORY_5}/3.jpg`,
      mobile: `/src/static/images/${CATEGORY_5}/3.jpg`,
    },
    images: [
      {
        desktop: IMG_SERVICE_5_1,
        mobile: IMG_SERVICE_5_1,
      },
      {
        desktop: IMG_SERVICE_5_2,
        mobile: IMG_SERVICE_5_2,
      },
    ],
    title: {
      en: 'terapia fisica',
      es: 'terapia fisica',
    },
    unknown: {
      en: 'sorry, we could not find that service.',
      es: 'disculpa, no pudimos encontrar ese servicio.',
    },
    url: {
      en: url('terapia-fisica', 'en'),
      es: url('terapia-fisica', 'es'),
    },
  },
];

export default Services;
