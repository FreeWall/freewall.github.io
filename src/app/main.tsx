import Hero from './main/hero';
import Projects from './main/projects';

export default class Main extends React.Component<{}, {}> {

    render() {
        return (
            <main>
                <Hero/>
                <Projects/>
            </main>
        )
    }
}
