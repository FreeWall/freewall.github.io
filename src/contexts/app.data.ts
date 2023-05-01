import { FaGithub, FaRegEnvelope } from 'react-icons/fa';
import { AppContextProps } from './app';

export const appContextData: AppContextProps = {
  author: {
    fullname: 'Michal Vaněk',
    label: '<web developer/>',
    address: ['Česká Bříza 87, 330 11 Plzeň', 'IČ: 03540430'],
    email: 'info@michalvanek.cz',
    phone: '+420 605 574 983',
    city: 'Plzeň',
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
      subtitle: 'Full-stack developer',
      years: '2022 - 2023',
      type: 'spolupráce',
      description:
        'Ateli s.r.o. a její dceřinné společnosti provozují několik e-commerce projektů ve 12 zemích evropy s vlastními sklady, expedicí i logistikou.',
      technologies: ['PHP', 'MySQL', 'Magento', 'Redis', 'TS', 'React'],
    },
    {
      name: 'AITI Software',
      subtitle: 'Senior developer v AITI Software s.r.o.',
      years: '2019 - 2023',
      type: 'spolupráce',
      description:
        'Ateli s.r.o. a její dceřinné společnosti provozují několik e-commerce projektů ve 12 zemích evropy s vlastními sklady, expedicí i logistikou.',
      technologies: ['PHP', 'MySQL', 'Magento', 'Redis', 'TS', 'React'],
    },
    {
      name: 'ShopMaker.cz',
      subtitle: 'Pronájem krabicového řešení e-shopu',
      years: '2014 - 2018',
      type: 'vlastní projekt',
      url: 'https://www.shopmaker.cz/',
      description:
        'Provoz a vývoj e-shopového portálu - vlastní e-shop na pár kliknutí. Správa objednávek, skladová evidence, podrobné statistiky, napojení na služby třetích stran, 50+ klientů.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'jQuery', 'Nette'],
      thumbnail: '/images/projects/shopmaker/screenshot1.png',
      images: [
        {
          source: '/images/projects/shopmaker/screenshot1.png',
          thumbnail: '/images/projects/shopmaker/screenshot1.png',
        },
        {
          source: '/images/projects/shopmaker/eshop_product.png',
          thumbnail: '/images/projects/shopmaker/eshop_product.png',
        },
        {
          source: '/images/projects/shopmaker/admin_prehled.png',
          thumbnail: '/images/projects/shopmaker/admin_prehled.png',
        },
        {
          source: '/images/projects/shopmaker/admin_objednavky.png',
          thumbnail: '/images/projects/shopmaker/admin_objednavky.png',
        },
        {
          source: '/images/projects/shopmaker/admin_produkty.png',
          thumbnail: '/images/projects/shopmaker/admin_produkty.png',
        },
        {
          source: '/images/projects/shopmaker/admin_statistiky.png',
          thumbnail: '/images/projects/shopmaker/admin_statistiky.png',
        },
      ],
    },
    {
      name: 'RealCraft.cz',
      subtitle: 'Herní portál Minecraft serveru',
      years: '2015 - 2019',
      type: 'vlastní projekt',
      url: 'https://www.realcraft.cz/',
      description:
        'Provoz a vývoj webu a herních pluginů, obchodní model mikrotransakce, spolupráce v 10+ členném týmu.',
      technologies: ['Java', 'PHP', 'MySQL', 'JavaScript', 'jQuery'],
      thumbnail: '/images/projects/realcraft/web1.png',
      images: [
        {
          source: '/images/projects/realcraft/web1.png',
          thumbnail: '/images/projects/realcraft/web1.png',
        },
      ],
    },
    {
      name: 'Freelancer',
      subtitle: 'Na volné noze v tvorbě webů na zakázku',
      years: '2013 - 2014',
      type: 'spolupráce',
      description:
        'Dokončeno přes 15 projektů - kódování grafických návrhů, úpravy stávajících stránek.',
      technologies: ['PHP', 'HTML', 'JavaScript'],
      thumbnail: '/images/projects/freelancer/web1.png',
      images: [
        {
          source: '/images/projects/freelancer/web1.png',
          thumbnail: '/images/projects/freelancer/web1.png',
        },
      ],
    },
    {
      name: 'Reálný Život',
      subtitle: 'Herní portál GTA: San Andreas serveru',
      years: '2008 - 2015',
      type: 'vlastní projekt',
      description:
        'Provoz a vývoj webu a herního módu, obchodní model mikrotransakce, spolupráce ve 20+ členném týmu.',
      technologies: ['Pawn', 'PHP', 'MySQL', 'JavaScript', 'jQuery'],
      thumbnail: '/images/projects/realny-zivot/web1.png',
      images: [
        {
          source: '/images/projects/realny-zivot/web1.png',
          thumbnail: '/images/projects/realny-zivot/web1.png',
        },
      ],
    },
    {
      name: 'VOŠ a SPŠE Plzeň',
      subtitle: 'Správa počítačových sítí',
      years: '2009 - 2013',
      type: 'vzdělání',
      technologies: ['PHP', 'MySQL', 'Java', 'C', 'JavaScript'],
      thumbnail: '/images/projects/spseplzen.png',
    },
  ],
};
