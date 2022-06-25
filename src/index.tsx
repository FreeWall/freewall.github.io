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
                    'PHP', 'MySQL', 'Magento', 'Redis', 'TS', 'React',
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
                thumbnail: require('../assets/images/projects/shopmaker/screenshot1.png?width=384&format=jpeg&quality=90').default as string,
                images: [
                    {
                        source: require('../assets/images/projects/shopmaker/screenshot1.png?quality=100').default as string,
                        thumbnail: require('../assets/images/projects/shopmaker/screenshot1.png?width=256&format=jpeg&quality=90').default as string,
                    },
                    {
                        source: require('../assets/images/projects/shopmaker/eshop_product.png?quality=100').default as string,
                        thumbnail: require('../assets/images/projects/shopmaker/eshop_product.png?width=256&format=jpeg&quality=90').default as string,
                    },
                    {
                        source: require('../assets/images/projects/shopmaker/admin_prehled.png?quality=100').default as string,
                        thumbnail: require('../assets/images/projects/shopmaker/admin_prehled.png?width=256&format=jpeg&quality=90').default as string,
                    },
                    {
                        source: require('../assets/images/projects/shopmaker/admin_objednavky.png?quality=100').default as string,
                        thumbnail: require('../assets/images/projects/shopmaker/admin_objednavky.png?width=256&format=jpeg&quality=90').default as string,
                    },
                    {
                        source: require('../assets/images/projects/shopmaker/admin_produkty.png?quality=100').default as string,
                        thumbnail: require('../assets/images/projects/shopmaker/admin_produkty.png?width=256&format=jpeg&quality=90').default as string,
                    },
                    {
                        source: require('../assets/images/projects/shopmaker/admin_statistiky.png?quality=100').default as string,
                        thumbnail: require('../assets/images/projects/shopmaker/admin_statistiky.png?width=256&format=jpeg&quality=90').default as string,
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
                thumbnail: require('../assets/images/projects/realcraft/web1.png?width=384&format=jpeg&quality=90').default as string,
                images: [
                    {
                        source: require('../assets/images/projects/realcraft/web1.png?quality=100').default as string,
                        thumbnail: require('../assets/images/projects/realcraft/web1.png?width=256&format=jpeg&quality=90').default as string,
                    },
                ]
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
                thumbnail: require('../assets/images/projects/realny-zivot/web1.png?width=384&format=jpeg&quality=90').default as string,
                images: [
                    {
                        source: require('../assets/images/projects/realny-zivot/web1.png?quality=100').default as string,
                        thumbnail: require('../assets/images/projects/realny-zivot/web1.png?width=256&format=jpeg&quality=90').default as string,
                    },
                ]
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
                    'PHP', 'MySQL', 'Java', 'C', 'JavaScript',
                ],
                thumbnail: require('../assets/images/projects/spseplzen.png?width=256&quality=90').default as string,
            },
        ]}
        skills={[
            {
                name: 'PHP',
                description: 'PHP 5 - 8, OOP, MVC, REST API, Composer, několik vlastních frameworků, PHPStorm',
                icon: {
                    url: require('../assets/images/skills/php.svg').default.url,
                    height: 26,
                },
            },
            {
                name: 'HTML5, CSS3, LESS',
                description: 'Kódování a stylování šablon, SEO optimalizace, LESS preprocessor',
                icon: {
                    url: require('../assets/images/skills/html5.svg').default.url,
                    height: 56,
                },
            },
            {
                name: 'MySQL',
                description: 'MyISAM, InnoDB, cizí klíče, transakce, zálohování, phpMyAdmin, Adminer',
                icon: {
                    url: require('../assets/images/skills/mysql.svg').default.url,
                    height: 40,
                },
            },
            {
                name: 'TypeScript',
                description: 'JavaScript ES6, TypeScript 4.0+, Node.js, npm, parametrizované třídy a funkce, declarations.d.ts',
                icon: {
                    url: require('../assets/images/skills/ts-js.svg').default.url,
                    height: 40,
                },
            },
            {
                name: 'Magento',
                description: 'Magento Community Edition 1.6 - 1.9, implementace PayU brány, vlastní košík, vlastní JS & CSS bundler',
                icon: {
                    url: require('../assets/images/skills/magento.svg').default.url,
                    height: 46,
                },
            },
            {
                name: 'React',
                description: 'Striktně typované TypeScript componenty (tsx), optimalizace renderování, CSS modules',
                icon: {
                    url: require('../assets/images/skills/react.svg').default.url,
                    height: 36,
                },
            },
            {
                name: 'Nette',
                description: 'Nette framework, šablony Latte, testovací nástroj Tester, Tracy debug, databázová vrstva Dibi',
                icon: {
                    url: require('../assets/images/skills/nette.svg').default.url,
                    height: 26,
                },
            },
            {
                name: 'jQuery',
                description: 'Komplexní použití napříč projekty, tvorba vlastních jQuery pluginů',
                icon: {
                    url: require('../assets/images/skills/jquery.svg').default.url,
                    height: 42,
                },
            },
            {
                name: 'Java',
                description: 'Java SE, IntelliJ IDEA, vývoj Minecraft pluginů Bukkit/Spigot',
                icon: {
                    url: require('../assets/images/skills/java.svg').default.url,
                    height: 54,
                },
            },
            {
                name: 'Jest',
                description: 'Testování knihoven a React component, testovací knihovna Enzyme, mockování',
                icon: {
                    url: require('../assets/images/skills/jest.svg').default.url,
                    height: 44,
                },
            },
            {
                name: 'Apache',
                description: 'Automatizace a konfigurace virtualhostů, .htaccess, generování https certifikátů Let\'s Encrypt',
                icon: {
                    url: require('../assets/images/skills/apache.svg').default.url,
                    height: 64,
                },
            },
            {
                name: 'Webpack',
                description: 'Konfigurace projektů, TypeScript, Babel, React, LESS, CSS modules',
                icon: {
                    url: require('../assets/images/skills/webpack.svg').default.url,
                    height: 45,
                },
            },
            {
                name: 'Linux Debian',
                description: 'Instalace a správa vlastního Linux serveru, mail server, balíkovací nástroj apt',
                icon: {
                    url: require('../assets/images/skills/debian.svg').default.url,
                    height: 50,
                },
            },
            {
                name: 'Git',
                description: 'Kolaborace v 10+ členném týmu, code reviews, GitLab, GitHub, BitBucket, vlastní projekty v Gitu',
                icon: {
                    url: require('../assets/images/skills/git.svg').default.url,
                    height: 40,
                },
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
