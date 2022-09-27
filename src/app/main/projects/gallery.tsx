import styles from './gallery.less';
import closeIcon from '../../../../assets/images/icons/close.inline.svg';
import {ProjectProps} from './project';
import {useEffect, useState} from 'react';

interface GalleryProps {
    isVisible: boolean;
    setVisible: (visible: boolean) => void;
    project: ProjectProps;
}

export default function Gallery(props: GalleryProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const previewRef = React.createRef<HTMLDivElement>();

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('wheel', onWhell);

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.removeEventListener('wheel', onWhell);
        }
    }, [props.isVisible, currentImageIndex]);

    const onKeyDown = (event: KeyboardEvent) => {
        if (event.key == 'Escape') {
            props.setVisible(false);
        }
    };

    const onWhell = (event: WheelEvent) => {
        if (!props.isVisible) {
            return;
        }

        for (let element of event.composedPath()) {
            if (element == previewRef.current) {
                if (event.deltaY > 0) {
                    nextImage();
                } else {
                    previousImage();
                }

                break;
            }
        }
    };

    const nextImage = () => {
        if (currentImageIndex >= props.project.images.length - 1) {
            return;
        }

        changeImage(currentImageIndex + 1);
    }

    const previousImage = () => {
        if (currentImageIndex < 1) {
            return;
        }

        changeImage(currentImageIndex - 1);
    }

    const changeImage = (index) => {
        setCurrentImageIndex(index);
    }

    document.body.className = props.isVisible ? styles.disableScroll : '';

    if (!props.isVisible) {
        return null;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.overlay} onClick={() => props.setVisible(false)}/>
            <div className={styles.gallery}>
                <div className={styles.close} dangerouslySetInnerHTML={{__html: closeIcon}} onClick={() => props.setVisible(false)}/>
                <div className={styles.preview} ref={previewRef}>
                    <div className={styles.slides} data-index={currentImageIndex}>
                        {props.project.images.map((image) => (
                            <div className={styles.slide}>
                                <img src={image.source} alt=""/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.thumbnails}>
                    {props.project.images.map((thumbnail, index) => (
                        <div className={styles.thumbnail + ' ' + (currentImageIndex == index ? styles.current : null)} onClick={() => changeImage(index)}>
                            <img src={thumbnail.thumbnail} alt=""/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
