import styles from './app.less';
import Header from './app/header';
import Main from './app/main';
import Footer from './app/footer';

export interface LinkProps {
    name: string;
    url: string;
    icon: string;
}

interface AppProps {
    author: {
        fullname: string;
        label: string;
        address: string[];
    };
    links: LinkProps[];
}

export default class App extends React.Component<AppProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.container}>
                <Header
                    fullname={this.props.author.fullname}
                    subtitle={this.props.author.label}
                    links={this.props.links}
                />
                <Main/>
                <Footer
                    fullname={this.props.author.fullname}
                    address={this.props.author.address}
                    links={this.props.links}
                />
            </div>
        )
    }
}
