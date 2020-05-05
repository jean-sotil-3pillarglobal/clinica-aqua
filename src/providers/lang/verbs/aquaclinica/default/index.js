import LangProxy from '../../../../utils/lang.proxy';

import {
  constants,
  featured,
  info,
  langs,
  publics,
  social,
} from '../../../../config';

import categories from '../shared/categories';
import clerks from '../shared/clerks';
import forms from '../shared/forms';
import promos from '../shared/promos';
import services from '../shared/services';

import CONTACT_FORM_SVG from '../../../../../static/svg/coming.svg';
import IMG_LOGO from '../../../../../static/images/logo.jpg';
import IMG_SECTION_1 from '../../../../../static/images/d-bg-1.png';

import IMG_BANNER_1 from '../../../../../static/images/logos/dysport.png';
import IMG_BANNER_2 from '../../../../../static/images/logos/emsculpt.png';
import IMG_BANNER_3 from '../../../../../static/images/logos/fotona.png';
import IMG_BANNER_4 from '../../../../../static/images/logos/geneo.png';
import IMG_BANNER_5 from '../../../../../static/images/logos/lumenis.png';
import IMG_BANNER_6 from '../../../../../static/images/logos/neauvia.png';
import IMG_BANNER_7 from '../../../../../static/images/logos/tentrek.png';
import IMG_BANNER_8 from '../../../../../static/images/logos/venus.png';

const {
  LINK_CONTACT_FORM_1,
  LINK_SECTION_1,
  LINK_SECTION_2,
  LINK_SECTION_4,
  LINK_SECTION_5,
  LINK_SERVICES_1,
} = constants;

const Verbiage = {
  commons: {
    clerks_1: {
      body: {
        en: 'Somos un equipo de profesionales altamente calificado<br/>Trabajando con la tecnología más moderna de la zona sur.',
        es: 'Somos un equipo de profesionales altamente calificado<br/>Trabajando con la tecnología más moderna de la zona sur.',
      },
      clerks,
      title: {
        en: 'Nuestros Profesionales a Cargo<br/>De tu Salud y Bienestar',
        es: 'Nuestros Profesionales a Cargo<br/>De tu Salud y Bienestar',
      },
    },
    contact_1: {
      back: {
        en: 'previous',
        es: 'anterior',
      },
      categories,
      forms,
      id: LINK_CONTACT_FORM_1,
      services,
      svg_show: true,
      svg: CONTACT_FORM_SVG,
    },
    default: {},
    services_1: {
      body: {
        en: 'Nuestros tratamientos están diseñados para maximizar los beneficios. Contamos con productos dermatológicos de uso profesional, tecnología de punta, personal altamente calificado e identificado con sus necesidades y tratamientos comprobados.',
        es: 'Nuestros tratamientos están diseñados para maximizar los beneficios. Contamos con productos dermatológicos de uso profesional, tecnología de punta, personal altamente calificado e identificado con sus necesidades y tratamientos comprobados.',
      },
      categories,
      id: LINK_SERVICES_1,
      services,
      title: {
        en: 'Nuestros Tratamientos y Especialidades',
        es: 'Nuestros Tratamientos y Especialidades',
      },
    },
  },
  components: {
    footer: {
      column: [
        {
          items: info,
          title: {
            en: 'Contact us',
            es: 'Contactenos',
          },
        },
        {
          items: social,
          title: {
            en: 'Connect with us',
            es: 'Conectese con nosotros',
          },
        },
      ],
      langs,
      logo: {
        desktop: IMG_LOGO,
        mobile: IMG_LOGO,
      },
    },
    header: {
      back: {
        en: 'Página Principal',
        es: 'Página Principal',
      },
      featured,
      logo: {
        desktop: IMG_LOGO,
        mobile: IMG_LOGO,
      },
      publics,
      social,
      title: {
        en: 'clinica aqua',
        es: 'clinica aqua',
      },

    },
  },
  err404: {
    index: {
      title: {
        en: 'page not found.',
        es: 'la página solicitada no fue encontrada.',
      },
    },
  },
  headers: {
    home: {
      description: {
        en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
      },
      keywords: {
        en: 'insurances, others',
        es: 'seguros, otros',
      },
      title: {
        en: 'Clinica Aqua | Health Care | Welcome',
        es: 'Clinica Aqua | Salud | Bienvenido',
      },
    },
    services: {
      description: {
        en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
      },
      keywords: {
        en: 'insurances, others',
        es: 'seguros, otros',
      },
      title: {
        en: 'Clinica Aqua | Healthcare | Healthcare Help',
        es: 'Clinica Aqua | Salud | Solicitar Ayuda',
      },
    },
  },
  home: {
    banner_1: {
      items: [
        {
          alt: {
            en: 'dysport',
            es: 'dysport',
          },
          logo: IMG_BANNER_1,
        },
        {
          alt: {
            en: 'EMSCULPT',
            es: 'EMSCULPT',
          },
          logo: IMG_BANNER_2,
        },
        {
          alt: {
            en: 'fotona',
            es: 'fotona',
          },
          logo: IMG_BANNER_3,
        },
        {
          alt: {
            en: 'geneo',
            es: 'geneo',
          },
          logo: IMG_BANNER_4,
        },
        {
          alt: {
            en: 'lumenis',
            es: 'lumenis',
          },
          logo: IMG_BANNER_5,
        },
        {
          alt: {
            en: 'neauvia',
            es: 'neauvia',
          },
          logo: IMG_BANNER_6,
        },
        {
          alt: {
            en: 'tentrek',
            es: 'tentrek',
          },
          logo: IMG_BANNER_7,
        },
        {
          alt: {
            en: 'venus',
            es: 'venus',
          },
          logo: IMG_BANNER_8,
        },
      ],
    },
    section_1: {
      background: IMG_SECTION_1,
      background_show: true,
      cta: {
        en: 'ver todas las especialidades',
        es: 'ver todas las especialidades',
      },
      id: LINK_SECTION_1,
      logo: {
        desktop: IMG_LOGO,
        mobile: IMG_LOGO,
      },
      subtitle: {
        en: '<span>Brindamos servicios especializados de dermatologia, <br/>fisioestetica y nutrición en la zona sur.</span>',
        es: '<span>Brindamos servicios especializados de dermatologia, <br/>fisioestetica y nutrición en la zona sur.</span>',
      },
      svg: '/src/static/svg/coming.svg',
      svg_show: false,
      title: {
        en: '<span>La Mejor Clínica Privada de <br/>Pérez Zeledón</span>',
        es: '<span>La Mejor Clínica Privada de <br/>Pérez Zeledón</span>',
      },
    },
    section_2: {
      body: {
        en: 'Nuestra sede está ubicada en San Isidro de El General Pérez Zeledón. <br/>Brindamos una amplia gama de servicios dermatologicos, dermatoesteticos y fisioesteticos. Además de trabajar con la más alta tecnologia y personal 100% calificado.',
        es: 'Nuestra sede está ubicada en San Isidro de El General Pérez Zeledón. <br/>Brindamos una amplia gama de servicios dermatologicos, dermatoesteticos y fisioesteticos. Además de trabajar con la más alta tecnologia y personal 100% calificado.',
      },
      cta: {
        en: 'cita gratuita online',
        es: 'cita gratuita online',
      },
      id: LINK_SECTION_2,
      subtitle: {
        en: '<span>Get our health services</br> information, quick and free.</span>',
        es: '<span>Obtén información sobre nuestros servicios</br> de manera fácil y gratuita.</span>',
      },
      title: {
        en: 'Contamos con el Mejor Equipo<br/> para Cuidar de tu Salud',
        es: 'Contamos con el Mejor Equipo<br/> para Cuidar de tu Salud',
      },
    },
    section_4: {
      id: LINK_SECTION_4,
      title: {
        en: 'Start your quote now. <br/>Start now.',
        es: 'La valoración es gratuita.<br/> Llená nuestro formulario en linea.',
      },
    },
    section_5: {
      body: {
        en: 'special enrollment: even though open enrollment is closed, you may still be able to get a health plan if you had a certain life changing event. continue to shop and your eligibility will be determined when you complete your marketplace application. if you have questions at any point, please feel free to chat or call us.',
        es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit. aenean commodo ligula eget dolor. aenean massa. cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. donec quam felis,',
      },
      id: LINK_SECTION_5,
      items: [
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'get a quote 1',
            es: 'aprender más 1',
          },
          ico: 'cloud-download',
          image: {
            desktop: '/src/static/images/d-image-test.jpg',
            mobile: '/src/static/images/m-image-test.jpg',
          },
          title: {
            en: 'item 1',
            es: 'item 1',
          },
          type: 'health',
        },
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'get a quote 2',
            es: 'aprender más 2',
          },
          ico: 'processor',
          image: {
            desktop: '/src/static/images/d-image-test.jpg',
            mobile: '/src/static/images/m-image-test.jpg',
          },
          title: {
            en: 'item 2',
            es: 'item 2',
          },
          type: 'dental',
        },
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'get a quote 3',
            es: 'aprender más 3',
          },
          ico: 'cloud-download',
          image: {
            desktop: '/src/static/images/d-image-test.jpg',
            mobile: '/src/static/images/m-image-test.jpg',
          },
          title: {
            en: 'item 3',
            es: 'item 3',
          },
          type: 'health',
        },
        {
          body: {
            en: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
            es: 'lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
          },
          cta: {
            en: 'get a quote 4',
            es: 'aprender más 4',
          },
          ico: 'print',
          image: {
            desktop: '/src/static/images/d-image-test.jpg',
            mobile: '/src/static/images/m-image-test.jpg',
          },
          title: {
            en: 'item 4',
            es: 'item 4',
          },
          type: 'boat',
        },
      ],
      title: {
        en: 'blog',
        es: 'conoce más <br/>en nuestro blog',
      },
    },
  },
  services: {
    section_1: {
      categories,
      id: 'services_index',
      logo: {
        desktop: IMG_LOGO,
        mobile: IMG_LOGO,
      },
      promos,
      services,
    },
  },
};

export default function VerbiageSchema (id) {
  return LangProxy(Verbiage, id);
}
