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
    onGalleryClick?: (project: Project) => void;
}

export default class Project extends React.Component<ProjectProps, {}> {

    render() {
        const imagesCountWord: string = this.props.images ? (this.props.images.length > 4 ? 'fotek' : (this.props.images.length == 1 ? 'fotka' : 'fotky')) : null;

        return (
            <div className={styles.project}>
                <div className={styles.yearsColumn}>
                    <div className={styles.years}>{this.props.years}</div>
                    <div className={styles.type}>{this.props.type}</div>
                </div>
                <div className={styles.timelineColumn}/>
                <div className={styles.detailColumn}>
                    <div className={styles.detail}>
                        {this.props.url && (
                            <h3>
                                <a href={this.props.url} target="_blank">
                                    {this.props.name}<span className={styles.externalIcon} dangerouslySetInnerHTML={{__html: externalIcon}}/>
                                </a>
                            </h3>
                        ) || (
                            <h3>{this.props.name}</h3>
                        )}
                        <h4>{this.props.subtitle}</h4>
                        <div className={styles.yearsRow}>
                            <div className={styles.type}>{this.props.type}</div>
                            <div className={styles.years}>{this.props.years}</div>
                        </div>
                        <div className={styles.description}>{this.props.description}</div>
                        <div className={styles.technologies}>
                            <div className={styles.label}>Technologie</div>
                            <div>
                                {this.props.technologies.map((technology) => (
                                    <div className={styles.technology + ' ' + styles['tech-' + technology.toLowerCase()]}>{technology}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {this.props.thumbnail && (
                        <div className={styles.gallery}>
                            {this.props.images && (
                                <div className={styles.thumbnail} onClick={() => this.props.onGalleryClick(this)}>
                                    <img src={this.props.thumbnail} alt={this.props.name}/>
                                    <div className={styles.count}>
                                        <span className={styles.countIcon} dangerouslySetInnerHTML={{__html: imagesIcon}}/><span className={styles.countLabel}>{this.props.images.length} {imagesCountWord}</span>
                                    </div>
                                </div>
                            )}
                            {!this.props.images && (
                                <img src={this.props.thumbnail} alt={this.props.name}/>
                            )}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
