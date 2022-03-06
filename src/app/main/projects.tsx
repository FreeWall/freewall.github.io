import styles from './projects.less';
import Project, {ProjectProps} from './projects/project';
import Gallery from './projects/gallery';

interface ProjectsProps {
    projects: ProjectProps[];
}

export default class Projects extends React.Component<ProjectsProps, {}> {

    private _galleryRef = React.createRef<Gallery>();

    constructor(props) {
        super(props);

        this.onProjectGalleryClick = this.onProjectGalleryClick.bind(this);
    }

    onProjectGalleryClick(project: Project) {
        this._galleryRef.current.setState(() => {
            return {
                visible: true,
                title: project.props.name,
                subtitle: project.props.subtitle,
                images: project.props.images,
                currentImageIndex: 0,
            };
        });
    }

    render() {
        return (
            <>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2>Moje zkušenosti</h2>
                        <div className={styles.projects}>
                            {this.props.projects.map((project) => (
                                <Project
                                    name={project.name}
                                    subtitle={project.subtitle}
                                    years={project.years}
                                    type={project.type}
                                    url={project.url}
                                    description={project.description}
                                    technologies={project.technologies}
                                    thumbnail={project.thumbnail}
                                    images={project.images}
                                    onGalleryClick={this.onProjectGalleryClick}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Gallery
                    ref={this._galleryRef}
                />
            </>
        )
    }
}
