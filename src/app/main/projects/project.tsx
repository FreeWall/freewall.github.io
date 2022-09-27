import styles from './project.less';
import imagesIcon from '/assets/images/icons/images.inline.svg';
import externalIcon from '/assets/images/icons/external.inline.svg';

export interface ProjectImage {
    source: string;
    thumbnail: string;
}

export interface ProjectProps {
    name: string;
    subtitle: string;
    years: string;
    type: string;
    url?: string;
    description?: string;
    technologies?: string[];
    thumbnail?: string;
    images?: ProjectImage[];
    onGalleryClick?: () => void;
}

export default function Project(props: ProjectProps) {
    const imagesCountWord: string = props.images ? (props.images.length > 4 ? 'fotek' : (props.images.length == 1 ? 'fotka' : 'fotky')) : null;

    return (
        <div className={styles.project}>
            <div className={styles.yearsColumn}>
                <div className={styles.years}>{props.years}</div>
                <div className={styles.type}>{props.type}</div>
            </div>
            <div className={styles.timelineColumn}/>
            <div className={styles.detailColumn}>
                <div className={styles.detail}>
                    {props.url && (
                        <h3>
                            <a href={props.url} target="_blank">
                                {props.name}<span className={styles.externalIcon} dangerouslySetInnerHTML={{__html: externalIcon}}/>
                            </a>
                        </h3>
                    ) || (
                        <h3>{props.name}</h3>
                    )}
                    <h4>{props.subtitle}</h4>
                    <div className={styles.yearsRow}>
                        <div className={styles.type}>{props.type}</div>
                        <div className={styles.years}>{props.years}</div>
                    </div>
                    <div className={styles.description}>{props.description}</div>
                    <div className={styles.technologies}>
                        <div className={styles.label}>Technologie</div>
                        <div>
                            {props.technologies.map((technology) => (
                                <div className={styles.technology + ' ' + styles['tech-' + technology.toLowerCase()]}>{technology}</div>
                            ))}
                        </div>
                    </div>
                </div>
                {props.thumbnail && (
                    <div className={styles.gallery}>
                        {props.images && (
                            <div className={styles.thumbnail} onClick={() => props.onGalleryClick()}>
                                <img src={props.thumbnail} alt={props.name}/>
                                <div className={styles.count}>
                                    <span className={styles.countIcon} dangerouslySetInnerHTML={{__html: imagesIcon}}/><span className={styles.countLabel}>{props.images.length} {imagesCountWord}</span>
                                </div>
                            </div>
                        )}
                        {!props.images && (
                            <img src={props.thumbnail} alt={props.name}/>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
