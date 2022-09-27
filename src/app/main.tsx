import Hero from './main/hero';
import Projects from './main/projects';
import {ProjectProps} from './main/projects/project';
import Skills from './main/skills';
import {SkillProps} from './main/skills/skill';

interface MainProps {
    projects: ProjectProps[];
    skills: SkillProps[];
}

export default function Main(props: MainProps) {
    return (
        <main>
            <Hero/>
            <Projects
                projects={props.projects}
            />
            <Skills
                skills={props.skills}
            />
        </main>
    );
}
