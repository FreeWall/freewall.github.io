import styles from './gallery.less';
import closeIcon from '../../../../assets/images/icons/close.inline.svg';
import {ProjectImage} from './project';

export interface GalleryState {
    visible: boolean;
    title?: string;
    subtitle?: string;
    images?: ProjectImage[];
    currentImageIndex?: number;
}

export default class Gallery extends React.Component<{}, GalleryState> {

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            currentImageIndex: 0,
        };

        this.close = this.close.bind(this);
        this.changeImage = this.changeImage.bind(this);
    }

    close() {
        this.setState(() => {
            return {visible: false};
        });
    }

    componentDidMount(): void {
        document.addEventListener('keydown', this.onKeyDown.bind(this));
    }

    componentWillUnmount(): void {
        document.removeEventListener('keydown', this.onKeyDown.bind(this));
    }

    onKeyDown(e: KeyboardEvent) {
        if (e.key == 'Escape') {
            this.close();
        }
    }

    changeImage(index) {
        this.setState(() => {
            return Object.assign({}, this.state, {currentImageIndex: index});
        });
    }

    render() {
        if (!this.state.visible) {
            return null;
        }

        const image = this.state.images[this.state.currentImageIndex];

        return (
            <div className={styles.wrapper}>
                <div className={styles.overlay} onClick={() => this.close()}/>
                <div className={styles.gallery}>
                    <div className={styles.close} dangerouslySetInnerHTML={{__html: closeIcon}} onClick={() => this.close()}/>
                    <div className={styles.preview}>
                        <img src={image.source} alt=""/>
                    </div>
                    <div className={styles.thumbnails}>
                        {this.state.images.map((thumbnail, index) => (
                            <div className={styles.thumbnail + ' ' + (this.state.currentImageIndex == index ? styles.current : null)} onClick={() => this.changeImage(index)}>
                                <img src={thumbnail.thumbnail} alt=""/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
