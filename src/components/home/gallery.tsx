import { ProjectProps } from '@/contexts/app';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import SwipperClass, { Navigation } from 'swiper';
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
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!swiper) {
      return;
    }

    if (
      typeof swiper.navigation == 'object' &&
      prevRef.current &&
      nextRef.current
    ) {
      swiper.navigation.prevEl = prevRef.current;
      swiper.navigation.nextEl = nextRef.current;
    }
  }, [swiper]);

  return (
    <div
      ref={galleryRef}
      className="fixed left-0 top-0 z-50 flex h-full w-full animate-fadeIn items-center justify-center"
    >
      <div
        className="absolute h-full w-full bg-black opacity-60"
        onClick={() => props.onClose?.()}
      />
      <div className="z-10 flex h-full w-full flex-col py-8 pt-20 md:py-8">
        <div
          className="absolute right-0 top-0 z-20 flex w-full justify-end md:w-auto"
          onClick={() => props.onClose?.()}
        >
          <div className="cursor-pointer p-6 text-white md:p-12 md:text-body md:hover:text-white">
            <FaTimes size={32} />
          </div>
        </div>
        <div className="h-full w-full animate-slideIn items-center overflow-y-hidden">
          <Swiper
            modules={[Navigation]}
            className="h-full"
            slidesPerView={1}
            centeredSlides={true}
            centerInsufficientSlides={true}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            lazyPreloadPrevNext={1}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onClick={(swiper, { target }) =>
              target instanceof HTMLDivElement && props.onClose?.()
            }
          >
            {props.project.images?.map((image, idx) => (
              <SwiperSlide
                className="!flex h-full items-center"
                key={idx}
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
          <>
            <div className="absolute right-0 top-0 z-10 hidden h-full md:block">
              <div
                className="flex h-full cursor-pointer items-center p-12 hover:text-white"
                ref={nextRef}
              >
                <FaChevronRight size={48} />
              </div>
            </div>
            <div className="absolute left-0 top-0 z-10 hidden h-full md:block">
              <div
                className="flex h-full cursor-pointer items-center p-12 hover:text-white"
                ref={prevRef}
              >
                <FaChevronLeft size={48} />
              </div>
            </div>
          </>
        )}
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
