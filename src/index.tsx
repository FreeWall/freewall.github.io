import App from './app';
import emailIcon from '../assets/images/icons/email.svg';
import githubIcon from '../assets/images/icons/github.svg';

const _App = (
    <App
        author={{
            fullname: 'Michal Vaněk',
            label: '<web developer/>',
            address: [
                'Česká Bříza 87, 330 11 Plzeň',
                'IČ: 03540430'
            ]
        }}
        links={[
            {
                name: 'info@michalvanek.cz',
                url: 'mailto:info@michalvanek.cz',
                icon: emailIcon
            },
            {
                name: 'FreeWall',
                url: 'https://github.com/FreeWall',
                icon: githubIcon
            }
        ]}
    />
);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(_App, rootElement);
} else {
    ReactDOM.render(_App, rootElement);
}
