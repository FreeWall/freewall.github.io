import styles from './gallery.less';

export interface GalleryState {
    visible: boolean;
    title?: string;
    subtitle?: string;
}

export default class Gallery extends React.Component<{}, GalleryState> {

    constructor(props) {
        super(props);

        this.state = {visible: false};
    }

    render() {
        return (
            <>
                {this.state.visible && (
                    <div className={styles.wrapper}>
                        <div className={styles.overlay}/>
                        <div className={styles.gallery}>

                        </div>
                    </div>
                )}
            </>
        )
    }
}
