import {
  SERVICES_INFORMATION_1_1,
  SERVICES_INFORMATION_1_2,
} from './../../../../forms/services';

import {
  constants,
  assets,
} from './../../../../../config';

// assets
const {
  icons,
} = assets;

// constants
const {
  GENERAL,
} = constants;

export default [
  // SERVICE 1
  {
    cta: {
      en: 'siguiente',
      es: 'siguiente',
    },
    icon: icons.general,
    label: {
      en: 'Iniciar consulta',
      es: 'Iniciar consulta',
    },
    rows: [
      {
        fields: SERVICES_INFORMATION_1_2,
        label: {
          en: '¿En qué te podemos ayudar?',
          es: '¿En qué te podemos ayudar?',
        },
        label_helper: {
          en: 'Dejanos saber el servicio de tu interés y te contactaremos inmediatamente con más información.',
          es: 'Dejanos saber el servicio de tu interés y te contactaremos inmediatamente con más información.',
        },
      },
    ],
    value: [
      GENERAL,
    ],
  },
  // SERVICE 1
  {
    cta: {
      en: 'confirmar',
      es: 'confirmar',
    },
    icon: icons.service1,
    label: {
      en: 'Add information',
      es: 'Agregar información',
    },
    rows: [
      {
        fields: SERVICES_INFORMATION_1_1,
        label: {
          en: 'Provide your personal information',
          es: 'Provee tus datos personales',
        },
        label_helper: {
          en: 'Let&#39;s begin your quote. Take a <br/>minute to fill with your information.',
          es: 'Iniciemos tu solicitud. Ingresa ahora <br/>tu información personal.',
        },
      },
    ],
    value: [
      GENERAL,
    ],
  },
];
