import Hero from './main/hero';
import Projects from './main/projects';
import {ProjectProps} from './main/projects/project';
import Skills from './main/skills';
import {SkillProps} from './main/skills/skill';

interface MainProps {
    projects: ProjectProps[];
    skills: SkillProps[];
}

export default class Main extends React.Component<MainProps, {}> {

    render() {
        return (
            <main>
                <Hero/>
                <Projects
                    projects={this.props.projects}
                />
                <Skills
                    skills={this.props.skills}
                />
            </main>
        )
    }
}
