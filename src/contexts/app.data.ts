import { FaGithub, FaRegEnvelope } from 'react-icons/fa';
import { AppContextProps } from './app';

export const appContextData: AppContextProps = {
  author: {
    fullname: 'Michal Vaněk',
    label: '<web developer/>',
    address: ['Česká Bříza 87, 330 11 Plzeň', 'IČ: 03540430'],
    email: 'info@michalvanek.cz',
    phone: '+420 605 574 983',
    city: {
      cs: 'Plzeň',
      en: 'Pilsen, Czechia',
    },
  },
  links: [
    {
      name: 'info@michalvanek.cz',
      url: 'mailto:info@michalvanek.cz',
      icon: FaRegEnvelope,
    },
    {
      name: 'FreeWall',
      url: 'https://github.com/FreeWall',
      icon: FaGithub,
    },
  ],
  projects: [
    {
      name: 'Goodform AG',
      subtitle: { cs: 'Full-stack developer', en: 'Full-stack developer' },
      years: '2022 - 2023',
      type: { cs: 'spolupráce', en: 'cooperation' },
      url: 'https://www.goodform.de',
      description: {
        cs: 'Nábytek, designové prvky a svítidla švýcarského online obchodu. Správa a vývoj headless frontendu s napojením na Magento backend.',
        en: 'Design, furniture and design lamps Swiss online shop. Development of headless frontend integrated with Magento backend.',
      },
      technologies: ['Magento', 'TS', 'React', 'Next.js', 'GraphQL'],
    },
    {
      name: 'AITI Software',
      subtitle: {
        cs: 'Senior developer v AITI Software s.r.o.',
        en: 'Senior developer in AITI Software s.r.o.',
      },
      years: '2018 - 2023',
      type: { cs: 'spolupráce', en: 'cooperation' },
      description: {
        cs: 'Ateli s.r.o. a její dceřinné společnosti provozují několik e-commerce projektů ve 12 zemích evropy s vlastními sklady, expedicí i logistikou.',
        en: 'Ateli s.r.o. operate several e-commerce projects in 12 European countries with their own warehouses, shipping and logistics.',
      },
      technologies: ['PHP', 'MySQL', 'Magento', 'Redis', 'TS', 'React'],
    },
    {
      name: 'ShopMaker.cz',
      subtitle: {
        cs: 'Pronájem krabicového řešení e-shopu',
        en: 'Out of the box e-shop solution',
      },
      years: '2014 - 2018',
      type: { cs: 'vlastní projekt', en: 'my project' },
      url: 'https://www.shopmaker.cz/',
      description: {
        cs: 'Provoz a vývoj e-shopového portálu - vlastní e-shop na pár kliknutí. Správa objednávek, skladová evidence, podrobné statistiky, napojení na služby třetích stran, 50+ klientů.',
        en: 'Operation and development of an e-shop portal - your own e-shop in a few clicks. Order management, stock records, detailed statistics, connection to third party services, 50+ clients.',
      },
      technologies: ['PHP', 'MySQL', 'JS', 'jQuery', 'Nette'],
      thumbnail:
        require('../../public/images/projects/shopmaker/screenshot1.png?width=380&format=webp&quality=90&resizer')
          .default,
      images: [
        {
          source:
            require('../../public/images/projects/shopmaker/screenshot1.png?format=webp&quality=90&resizer')
              .default,
          thumbnail:
            require('../../public/images/projects/shopmaker/screenshot1.png?width=380&format=webp&quality=90&resizer')
              .default,
        },
        {
          source:
            require('../../public/images/projects/shopmaker/eshop_product.png?format=webp&quality=90&resizer')
              .default,
          thumbnail:
            require('../../public/images/projects/shopmaker/eshop_product.png?width=380&format=webp&quality=90&resizer')
              .default,
        },
        {
          source:
            require('../../public/images/projects/shopmaker/admin_prehled.png?format=webp&quality=90&resizer')
              .default,
          thumbnail:
            require('../../public/images/projects/shopmaker/admin_prehled.png?width=380&format=webp&quality=90&resizer')
              .default,
        },
        {
          source:
            require('../../public/images/projects/shopmaker/admin_objednavky.png?format=webp&quality=90&resizer')
              .default,
          thumbnail:
            require('../../public/images/projects/shopmaker/admin_objednavky.png?width=380&format=webp&quality=90&resizer')
              .default,
        },
        {
          source:
            require('../../public/images/projects/shopmaker/admin_produkty.png?format=webp&quality=90&resizer')
              .default,
          thumbnail:
            require('../../public/images/projects/shopmaker/admin_produkty.png?width=380&format=webp&quality=90&resizer')
              .default,
        },
        {
          source:
            require('../../public/images/projects/shopmaker/admin_statistiky.png?format=webp&quality=90&resizer')
              .default,
          thumbnail:
            require('../../public/images/projects/shopmaker/admin_statistiky.png?width=380&format=webp&quality=90&resizer')
              .default,
        },
      ],
    },
    {
      name: 'RealCraft.cz',
      subtitle: {
        cs: 'Herní portál Minecraft serveru',
        en: 'Minecraft community server',
      },
      years: '2015 - 2019',
      type: { cs: 'vlastní projekt', en: 'my project' },
      url: 'https://www.realcraft.cz/',
      description: {
        cs: 'Provoz a vývoj webu a herních pluginů, obchodní model mikrotransakce, spolupráce v 10+ členném týmu.',
        en: 'Operation and development of website and game plugins, microtransaction business model, a 10+ member team.',
      },
      technologies: ['Java', 'PHP', 'MySQL', 'JS', 'jQuery'],
      thumbnail:
        require('../../public/images/projects/realcraft/web1.png?width=380&format=webp&quality=90&resizer')
          .default,
      images: [
        {
          source:
            require('../../public/images/projects/realcraft/web1.png?format=webp&quality=90&resizer')
              .default,
          thumbnail:
            require('../../public/images/projects/realcraft/web1.png?width=380&format=webp&quality=90&resizer')
              .default,
        },
      ],
    },
    {
      name: 'Freelancer',
      subtitle: {
        cs: 'Na volné noze v tvorbě webů na zakázku',
        en: 'Freelance in custom web development',
      },
      years: '2013 - 2014',
      type: { cs: 'spolupráce', en: 'cooperation' },
      description: {
        cs: 'Dokončeno přes 15 projektů - kódování grafických návrhů, implementace CMS systému.',
        en: 'Completed over 15 projects - coding graphic designs, CMS systems implementation.',
      },
      technologies: ['PHP', 'HTML', 'JS'],
      thumbnail:
        require('../../public/images/projects/freelancer/web1.png?width=380&format=webp&quality=90&resizer')
          .default,
      images: [
        {
          source:
            require('../../public/images/projects/freelancer/web1.png?format=webp&quality=90&resizer')
              .default,
          thumbnail:
            require('../../public/images/projects/freelancer/web1.png?width=380&format=webp&quality=90&resizer')
              .default,
        },
      ],
    },
    {
      name: 'Reálný Život',
      subtitle: {
        cs: 'Herní portál GTA: San Andreas serveru',
        en: 'GTA: San Andreas community server',
      },
      years: '2008 - 2015',
      type: { cs: 'vlastní projekt', en: 'my project' },
      description: {
        cs: 'Provoz a vývoj webu a herního módu, obchodní model mikrotransakce, spolupráce ve 20+ členném týmu.',
        en: 'Operation and development of website and game mode, microtransaction business model, a 20+ member team.',
      },
      technologies: ['Pawn', 'PHP', 'MySQL', 'JS', 'jQuery'],
      thumbnail:
        require('../../public/images/projects/realny-zivot/web1.png?width=380&format=webp&quality=90&resizer')
          .default,
      images: [
        {
          source:
            require('../../public/images/projects/realny-zivot/web1.png?format=webp&quality=90&resizer')
              .default,
          thumbnail:
            require('../../public/images/projects/realny-zivot/web1.png?width=380&format=webp&quality=90&resizer')
              .default,
        },
      ],
    },
    {
      name: 'VOŠ a SPŠE Plzeň',
      subtitle: {
        cs: 'Správa počítačových sítí',
        en: 'Computer network management',
      },
      years: '2009 - 2013',
      type: { cs: 'vzdělání', en: 'education' },
      technologies: ['PHP', 'MySQL', 'Java', 'C', 'JS'],
    },
  ],
};
