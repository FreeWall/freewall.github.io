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

export default class App extends React.Component<AppProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.container}>
                <Header
                    fullname={this.props.author.fullname}
                    subtitle={this.props.author.label}
                    links={this.props.links}
                />
                <Main
                    projects={this.props.projects}
                    skills={this.props.skills}
                />
                <Footer
                    fullname={this.props.author.fullname}
                    address={this.props.author.address}
                    links={this.props.links}
                />
            </div>
        )
    }
}