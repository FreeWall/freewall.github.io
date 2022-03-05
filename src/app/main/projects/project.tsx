import styles from './project.less';
import countIcon from '/assets/images/icons/github.svg';

export interface ProjectProps {
    name: string;
    subtitle: string;
    years: string;
    type: string;
    url?: string;
    description?: string;
    technologies?: string[];
    thumbnail?: string;
    images?: string[];
    onGalleryClick?: (project: Project) => void;
}

export default class Project extends React.Component<ProjectProps, {}> {

    render() {
        return (
            <div className={styles.project}>
                <div className={styles.yearsColumn}>
                    <div className={styles.years}>{this.props.years}</div>
                    <div className={styles.type}>{this.props.type}</div>
                </div>
                <div className={styles.timelineColumn}/>
                <div className={styles.detailColumn}>
                    <div className={styles.detail}>
                        <h3>{this.props.name}</h3>
                        <h4>{this.props.subtitle}</h4>
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
                                        <span className={styles.countIcon} dangerouslySetInnerHTML={{__html: countIcon}}/><span className={styles.countLabel}>{this.props.images.length} fotek</span>
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
