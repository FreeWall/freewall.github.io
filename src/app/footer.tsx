import styles from './footer.less';
import {LinkProps} from '../app';

interface FooterProps {
    fullname: string;
    address: string[];
    links: LinkProps[];
}

export default function Footer(props: FooterProps) {
    return (
        <footer>
            <div className={styles.content}>
                <div className={styles.author}>
                    <div className={styles.fullname}>{props.fullname}</div>
                    <div className={styles.address}>
                        {props.address.map((line) => (
                            <div>{line}</div>
                        ))}
                    </div>
                </div>
                <div className={styles.links}>
                    {props.links.map((link) => (
                        <a className={styles.link} href={link.url} target="_blank">
                            <span className={styles.linkIcon} dangerouslySetInnerHTML={{__html: link.icon}}/><span className={styles.linkName}>{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
