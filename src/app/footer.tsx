import styles from './footer.less';
import {LinkProps} from '../app';

interface FooterProps {
    fullname: string;
    address: string[];
    links: LinkProps[];
}

export default class Footer extends React.Component<FooterProps, {}> {

    render() {
        return (
            <footer>
                <div className={styles.content}>
                    <div className={styles.author}>
                        <div className={styles.fullname}>{this.props.fullname}</div>
                        <div className={styles.address}>
                            {this.props.address.map((line) => (
                                <div>{line}</div>
                            ))}
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
            </footer>
        )
    }
}
