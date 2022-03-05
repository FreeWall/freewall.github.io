import Hero from './main/hero';
import Projects from './main/projects';
import {ProjectProps} from './main/projects/project';

interface MainProps {
    projects: ProjectProps[];
}

export default class Main extends React.Component<MainProps, {}> {

    render() {
        return (
            <main>
                <Hero/>
                <Projects
                    projects={this.props.projects}
                />
            </main>
        )
    }
}
