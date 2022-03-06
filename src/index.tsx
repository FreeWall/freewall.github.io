import App from './app';

const _App = (
    <App
        author={{
            fullname: 'Michal Vaněk',
            label: '<web developer/>',
            address: [
                'Česká Bříza 87, 330 11 Plzeň',
                'IČ: 03540430',
            ],
        }}
        links={[
            {
                name: 'info@michalvanek.cz',
                url: 'mailto:info@michalvanek.cz',
                icon: require('../assets/images/icons/email.inline.svg') as string,
            },
            {
                name: 'FreeWall',
                url: 'https://github.com/FreeWall',
                icon: require('../assets/images/icons/github.inline.svg') as string,
            },
        ]}
        projects={[
            {
                name: 'ATELI Development',
                subtitle: 'Senior developer v ATELI Development s.r.o.',
                years: '2019 - 2022',
                type: 'spolupráce',
                description: 'Ateli s.r.o. a její dceřinné společnosti provozují několik ﻿e-commerce ﻿projektů ve 12 zemích evropy ﻿s vlastními sklady, expedicí i logistikou.',
                technologies: [
                    'PHP', 'MySQL', 'Magento', 'Redis', 'TypeScript', 'React',
                ],
            },
            {
                name: 'ShopMaker.cz',
                subtitle: 'Pronájem krabicového řešení e-shopu',
                years: '2014 - 2018',
                type: 'vlastní projekt',
                url: 'https://www.shopmaker.cz/',
                description: 'Provoz a vývoj e-shopového portálu - vlastní e-shop na pár kliknutí. ﻿Správa objednávek, skladová evidence, podrobné statistiky, napojení na služby třetích stran, 50+ klientů.',
                technologies: [
                    'PHP', 'MySQL', 'JavaScript', 'jQuery', 'Nette',
                ],
                thumbnail: require('../assets/images/projects/shopmaker/screenshot1.png?width=512').default as string,
                images: [
                    {
                        source: require('../assets/images/projects/shopmaker/screenshot1.png').default as string,
                        thumbnail: require('../assets/images/projects/shopmaker/screenshot1.png?width=512').default as string,
                    },
                    {
                        source: require('../assets/images/projects/shopmaker/screenshot2.png').default as string,
                        thumbnail: require('../assets/images/projects/shopmaker/screenshot2.png?width=512').default as string,
                    },
                ]
            },
            {
                name: 'RealCraft.cz',
                subtitle: 'Herní portál Minecraft serveru',
                years: '2015 - 2019',
                type: 'vlastní projekt',
                url: 'https://www.realcraft.cz/',
                description: 'Provoz a vývoj webu a herních pluginů, obchodní model mikrotransakce, spolupráce v 10+ členném týmu.',
                technologies: [
                    'Java', 'PHP', 'MySQL', 'JavaScript', 'jQuery',
                ],
            },
            {
                name: 'Reálný Život',
                subtitle: 'Herní portál GTA: San Andreas serveru',
                years: '2008 - 2015',
                type: 'vlastní projekt',
                description: 'Provoz a vývoj webu a herního módu, obchodní model mikrotransakce, spolupráce ve 20+ členném týmu.',
                technologies: [
                    'Pawn', 'PHP', 'MySQL', 'JavaScript', 'jQuery',
                ],
            },
            {
                name: 'Freelancer',
                subtitle: 'Na volné noze v tvorbě webů na zakázku',
                years: '2013 - 2014',
                type: 'spolupráce',
                description: 'Dokončeno přes 15 projektů - kódování grafických návrhů, úpravy stávajících stránek.',
                technologies: [
                    'PHP', 'HTML', 'JavaScript',
                ],
            },
            {
                name: 'VOŠ a SPŠE Plzeň',
                subtitle: 'Správa počítačových sítí',
                years: '2009 - 2013',
                type: 'vzdělání',
                technologies: [
                    'PHP', 'MySQL', 'C', 'JavaScript',
                ],
                thumbnail: require('../assets/images/projects/spseplzen.png?width=256').default as string,
            },
        ]}
        skills={[
            {
                icon: require('../assets/images/skills/php.svg').default as string,
                name: 'PHP',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla quam velit, vulputate eu.',
            },
            {
                icon: require('../assets/images/skills/html5.svg').default as string,
                name: 'HTML5, CSS3, LESS',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla quam velit, vulputate eu.',
            },
            {
                icon: require('../assets/images/skills/mysql.svg').default as string,
                name: 'MySQL',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla quam velit, vulputate eu.',
            },
            {
                icon: require('../assets/images/skills/ts-js.svg').default as string,
                name: 'TypeScript, JavaScript',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla quam velit, vulputate eu.',
            },
            {
                icon: require('../assets/images/skills/magento.svg').default as string,
                name: 'Magento',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla quam velit, vulputate eu.',
            },
            {
                icon: require('../assets/images/skills/react.svg').default as string,
                name: 'React',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla quam velit, vulputate eu.',
            },
            {
                icon: require('../assets/images/skills/nette.svg').default as string,
                name: 'Nette',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla quam velit, vulputate eu.',
            },
            {
                icon: require('../assets/images/skills/jquery.svg').default as string,
                name: 'jQuery',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla quam velit, vulputate eu.',
            },
            {
                icon: require('../assets/images/skills/java.svg').default as string,
                name: 'Java',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla quam velit, vulputate eu.',
            },
            {
                icon: require('../assets/images/skills/jest.svg').default as string,
                name: 'Jest',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla quam velit, vulputate eu.',
            },
            {
                icon: require('../assets/images/skills/apache.svg').default as string,
                name: 'Apache',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla quam velit, vulputate eu.',
            },
            {
                icon: require('../assets/images/skills/webpack.svg').default as string,
                name: 'Webpack',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla quam velit, vulputate eu.',
            },
            {
                icon: require('../assets/images/skills/debian.svg').default as string,
                name: 'Linux Debian',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla quam velit, vulputate eu.',
            },
            {
                icon: require('../assets/images/skills/git.svg').default as string,
                name: 'Git',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla quam velit, vulputate eu.',
            },
        ]}
    />
);

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(_App, rootElement);
} else {
    ReactDOM.render(_App, rootElement);
}
