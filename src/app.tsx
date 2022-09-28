import styles from './app.less';
import Header from './app/header';
import Main from './app/main';
import Footer from './app/footer';
import {ProjectProps} from './app/main/projects/project';
import {SkillProps} from './app/main/skills/skill';

export interface LinkProps {
    name: string;
    url: string;
    icon;
}

interface AppProps {
    author: {
        fullname: string;
        label: string;
        address: string[];
    };
    links: LinkProps[];
    projects: ProjectProps[];
    skills: SkillProps[];
}

export default function App(props: AppProps) {
    return (
        <div className={styles.container}>
            <Header
                fullname={props.author.fullname}
                subtitle={props.author.label}
                links={props.links}
            />
            <Main
                projects={props.projects}
                skills={props.skills}
            />
            <Footer
                fullname={props.author.fullname}
                address={props.author.address}
                links={props.links}
            />
        </div>
    );
}
