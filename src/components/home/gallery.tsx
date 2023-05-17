import { ProjectProps } from '@/contexts/app';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface GalleryProps {
  project: ProjectProps;
}

export default function Gallery(props: GalleryProps) {
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full">
      <div className="absolute h-full w-full bg-black opacity-60"></div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {props.project.images?.map((image, idx) => (
          <SwiperSlide key={idx}>{image.thumbnail}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
