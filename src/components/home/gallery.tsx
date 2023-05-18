import { ProjectProps } from '@/contexts/app';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import { useEffect, useRef } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface GalleryProps {
  project: ProjectProps;
  onClose?: () => void;
}

export default function Gallery(props: GalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
      disableBodyScroll(galleryRef.current, {
        reserveScrollBarGap: true,
      });
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, []);

  return (
    <div
      ref={galleryRef}
      className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center"
    >
      <div
        className="absolute h-full w-full bg-black opacity-50"
        onClick={() => props.onClose?.()}
      />
      <div className="h-full w-full">
        <div className="h-full py-28">
          <Swiper
            className="h-full"
            slidesPerView={1}
            centeredSlides={true}
            centerInsufficientSlides={true}
            onSlideChange={() => {}}
            lazyPreloadPrevNext={1}
            onSwiper={(swiper) => {}}
          >
            {props.project.images?.map((image, idx) => (
              <SwiperSlide key={idx}>
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
      </div>
    </div>
  );
}
