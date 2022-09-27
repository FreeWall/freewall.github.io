import styles from './header.less';
import {LinkProps} from '../app';
import {useEffect, useState} from 'react';

interface HeaderProps {
    fullname: string;
    subtitle: string;
    links: LinkProps[];
}

export default function Header(props: HeaderProps) {

    const [isCompact, setCompact] = useState<boolean>(false);

    const onScroll = () => {
        setCompact(window.scrollY > 10);
    }

    useEffect(() => {
        document.addEventListener('scroll', onScroll);
        onScroll();
    }, []);

    const names = props.fullname.split(' ');

    return (
        <header className={isCompact ? styles.compact : null}>
            <div className={styles.content}>
                <a href="/" className={styles.logo}>
                    <div className={styles.logoImage}>
                        <img src={require('../../assets/images/profilephoto.png?width=256&quality=90').default as string} alt=""/>
                    </div>
                    <div className={styles.logoSplitter}/>
                    <div className={styles.logoText}>
                        <h1><b>{names[0]}</b> {names[1]}</h1>
                        <div className={styles.subtitle}>{props.subtitle}</div>
                    </div>
                </a>
                <div className={styles.links}>
                    {props.links.map((link) => (
                        <a className={styles.link} href={link.url} target="_blank">
                            <span className={styles.linkIcon} dangerouslySetInnerHTML={{__html: link.icon}}/><span className={styles.linkName}>{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </header>
    )
}
