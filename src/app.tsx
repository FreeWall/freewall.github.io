import styles from "./app.less";

interface AppState {
	test: number;
}

export default class App extends React.Component<{}, AppState> {

	constructor(props) {
		super(props);
		this.state = {test: 1};
	}

	render() {
		return (
            <div className={styles.app}
                 onClick={() => alert('bagr')}>ahoj bagr
                bagr {this.state.test}</div>
        )
	}
}
