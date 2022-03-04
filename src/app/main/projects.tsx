import styles from './projects.less';

export default class Projects extends React.Component<{}, {}> {

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h2>Moje zkušenosti</h2>
                    <div className={styles.projects}>

                    </div>
                </div>
            </div>
        )
    }
}
