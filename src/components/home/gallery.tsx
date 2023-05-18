import { ProjectProps } from '@/contexts/app';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import SwipperClass from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface GalleryProps {
  project: ProjectProps;
  onClose?: () => void;
}

export default function Gallery(props: GalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState<SwipperClass>();

  useEffect(() => {
    if (galleryRef.current) {
      disableBodyScroll(galleryRef.current, {
        reserveScrollBarGap: true,
      });
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key == 'Escape') {
        props.onClose?.();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      clearAllBodyScrollLocks();
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [galleryRef, props]);

  return (
    <div
      ref={galleryRef}
      className="fixed left-0 top-0 z-50 flex h-full w-full animate-fadeIn items-center justify-center"
    >
      <div
        className="absolute h-full w-full bg-black opacity-60"
        onClick={() => props.onClose?.()}
      />
      <div className="z-10 flex h-full w-full flex-col py-8">
        <div className="absolute right-0 top-0 z-10 flex justify-end">
          <div
            className="cursor-pointer p-10 hover:text-white"
            onClick={() => props.onClose?.()}
          >
            <FaTimes size={32} />
          </div>
        </div>
        <div className="h-full w-full animate-slideIn items-center overflow-y-hidden">
          <Swiper
            className="h-full items-center"
            slidesPerView={1}
            centeredSlides={true}
            centerInsufficientSlides={true}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            lazyPreloadPrevNext={1}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
          >
            {props.project.images?.map((image, idx) => (
              <SwiperSlide
                key={idx}
                onClick={({ target }) =>
                  target instanceof HTMLDivElement && props.onClose?.()
                }
              >
                <img
                  className="mx-auto max-h-full select-none"
                  src={image.source}
                  alt={props.project.name}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {Number(props.project.images?.length) > 1 && (
          <div className="flex items-center justify-center space-x-2 pt-8 md:space-x-4">
            {props.project.images?.map((image, idx) => (
              <div
                className="bg-black"
                key={idx}
              >
                <img
                  className={classNames(
                    'h-[60px] cursor-pointer select-none sm:h-[70px] md:h-[110px]',
                    {
                      'opacity-70 hover:opacity-100': currentSlide != idx,
                    },
                  )}
                  src={image.thumbnail}
                  alt={props.project.name}
                  width={160}
                  loading="lazy"
                  onClick={() => swiper?.slideTo(idx)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
