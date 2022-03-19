import styles from './hero.less';

const keywords = [
    'PHP',
    'MySQL',
    'Magento',
    'TypeScript',
    'JavaScript',
    'React',
    'Nette',
    'jQuery',
    'Java',
    'HTML5',
    'CSS3, LESS',
    'Webpack',
];

export default class Hero extends React.Component<{}, {}> {

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.claim}>
                        <div className={styles.title}>
                            <span>Jsem <b>webový vývojář</b>, </span>
                            <span>kterého baví:</span>
                        </div>
                        <div className={styles.items}>
                            <div className={styles.item}>
                                <span>tvorba webových stránek a aplikací</span>
                            </div>
                            <div className={styles.item}>
                                <span>front-end, UX a UI design</span>
                            </div>
                            <div className={styles.item}>
                                <span>back-end, návrh a integrace systémů</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.keywords}>
                        {keywords.map((keyword) => (
                            <div className={styles.keyword + ' ' + styles['keyword-' + keyword.toLowerCase().replace(', ', '')]}>{keyword}</div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
