import styles from './header.less';
import {LinkProps} from '../app';

interface HeaderProps {
    fullname: string;
    subtitle: string;
    links: LinkProps[];
}

export default class Header extends React.Component<HeaderProps, {}> {

    render() {
        const names = this.props.fullname.split(' ');

        return (
            <header>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <div className={styles.logoImage}>
                            <img src={require('../../assets/images/profilephoto.png?width=256&quality=90').default as string} alt=""/>
                        </div>
                        <div className={styles.logoSplitter}/>
                        <div className={styles.logoText}>
                            <h1><b>{names[0]}</b> {names[1]}</h1>
                            <div className={styles.subtitle}>{this.props.subtitle}</div>
                        </div>
                    </div>
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
