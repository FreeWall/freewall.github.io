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

    private _previewRef = React.createRef<HTMLDivElement>();

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            currentImageIndex: 0,
        };
    }

    close() {
        this.setState(() => {
            return {visible: false};
        });
    }

    componentDidMount(): void {
        document.addEventListener('keydown', this.onKeyDown.bind(this));
        document.addEventListener('wheel', this.onWhell.bind(this));
    }

    componentWillUnmount(): void {
        document.removeEventListener('keydown', this.onKeyDown.bind(this));
        document.removeEventListener('wheel', this.onWhell.bind(this));
    }

    onKeyDown(event: KeyboardEvent) {
        if (event.key == 'Escape') {
            this.close();
        }
    }

    onWhell(event: WheelEvent) {
        if (!this.state.visible) {
            return;
        }

        for (let element of event.composedPath()) {
            if (element == this._previewRef.current) {
                if (event.deltaY > 0) {
                    this.nextImage();
                } else {
                    this.previousImage();
                }

                break;
            }
        }
    }

    nextImage() {
        if (this.state.currentImageIndex >= this.state.images.length - 1) {
            return;
        }

        this.changeImage(this.state.currentImageIndex + 1);
    }

    previousImage() {
        if (this.state.currentImageIndex < 1) {
            return;
        }

        this.changeImage(this.state.currentImageIndex - 1);
    }

    changeImage(index) {
        this.setState(() => {
            return Object.assign({}, this.state, {currentImageIndex: index});
        });
    }

    render() {
        document.body.className = this.state.visible ? styles.disableScroll : '';

        if (!this.state.visible) {
            return null;
        }

        return (
            <div className={styles.wrapper}>
                <div className={styles.overlay} onClick={() => this.close()}/>
                <div className={styles.gallery}>
                    <div className={styles.close} dangerouslySetInnerHTML={{__html: closeIcon}} onClick={() => this.close()}/>
                    <div className={styles.preview} ref={this._previewRef}>
                        <div className={styles.slides} data-index={this.state.currentImageIndex}>
                            {this.state.images.map((image, index) => (
                                <div className={styles.slide}>
                                    <img src={image.source} alt=""/>
                                </div>
                            ))}
                        </div>
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
