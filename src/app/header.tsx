import styles from './header.less';
import {LinkProps} from '../app';

interface HeaderProps {
    fullname: string;
    subtitle: string;
    links: LinkProps[];
}

interface HeaderState {
    compact: boolean;
}

export default class Header extends React.Component<HeaderProps, HeaderState> {

    constructor(props) {
        super(props);

        this.state = {
            compact: window.scrollY > 10,
        };
    }

    componentDidMount(): void {
        document.addEventListener('scroll', this.onScroll.bind(this));
    }

    componentWillUnmount(): void {
        document.removeEventListener('scroll', this.onScroll.bind(this));
    }

    onScroll() {
        this.setState(() => {
            return {compact: window.scrollY > 10};
        });
    }

    render() {
        const names = this.props.fullname.split(' ');

        return (
            <header className={this.state.compact ? styles.compact : null}>
                <div className={styles.content}>
                    <a href="/" className={styles.logo}>
                        <div className={styles.logoImage}>
                            <img src={require('../../assets/images/profilephoto.png?width=256&quality=90').default as string} alt=""/>
                        </div>
                        <div className={styles.logoSplitter}/>
                        <div className={styles.logoText}>
                            <h1><b>{names[0]}</b> {names[1]}</h1>
                            <div className={styles.subtitle}>{this.props.subtitle}</div>
                        </div>
                    </a>
                    <div className={styles.links}>
                        {this.props.links.map((link) => (
                            <a className={styles.link} href={link.url} target="_blank">
                                <span className={styles.linkIcon} dangerouslySetInnerHTML={{__html: link.icon}}/><span className={styles.linkName}>{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </header>
        )
    }
}
