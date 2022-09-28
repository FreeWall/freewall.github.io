import styles from './projects.less';
import Project, {ProjectProps} from './projects/project';
import Gallery from './projects/gallery';
import {useState} from 'react';

interface ProjectsProps {
    projects: ProjectProps[];
}

export default function Projects(props: ProjectsProps) {
    const [currentProject, setCurrentProject] = useState<ProjectProps>(null);
    const [isGalleryVisible, setGalleryVisible] = useState(false);

    const onProjectGalleryClick = (project: ProjectProps) => {
        setGalleryVisible(true);
        setCurrentProject(project);
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h2>Moje zkušenosti</h2>
                    <div className={styles.projects}>
                        {props.projects.map((project) => (
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
                                onGalleryClick={() => onProjectGalleryClick(project)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Gallery
                isVisible={isGalleryVisible}
                setVisible={setGalleryVisible}
                project={currentProject}
            />
        </>
    );
}
